"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent as ReactPointerEvent } from "react";

type Point = { x: number; y: number };

type GameState = {
  player: Point;
  collected: string[];
  steps: number;
  deadEnds: number;
  shipped: boolean;
  note: string;
};

type NetworkNodeType =
  | "BUILDER"
  | "COMMUNITY"
  | "EDUCATION"
  | "PROJECT"
  | "EVENT"
  | "PROGRAM"
  | "ORGANIZATION"
  | "OPPORTUNITY";

type NetworkNode = {
  id: string;
  type: NetworkNodeType;
  x: number;
  y: number;
};

type NetworkRule = {
  pair: [string, string];
  score: number;
  quality: "correct" | "strong";
  unlock?: string[];
  note: string;
};

type NetworkConnection = {
  key: string;
  from: string;
  to: string;
  score: number;
  quality: "correct" | "strong";
};

type NetworkDragState = {
  active: boolean;
  sourceId?: string;
  pointerX: number;
  pointerY: number;
  moved: boolean;
  targetId?: string;
  hoverNodeId?: string;
};

type NetworkGameState = {
  unlocked: string[];
  connections: NetworkConnection[];
  selectedNode?: string;
  score: number;
  note: string;
  flashedNodes: string[];
  invalidNodes: string[];
  recentConnection?: string;
};

const BOARD_WIDTH = 9;
const BOARD_HEIGHT = 6;
const START: Point = { x: 0, y: 0 };
const SHIP: Point = { x: 8, y: 5 };

const NODE_POINTS: Point[] = [
  { x: 1, y: 0 },
  { x: 2, y: 2 },
  { x: 4, y: 1 },
  { x: 5, y: 3 },
  { x: 7, y: 2 },
  { x: 7, y: 4 },
];

const OBSTACLES = new Set([
  "1-2",
  "1-3",
  "2-4",
  "3-1",
  "3-3",
  "4-3",
  "5-1",
  "6-1",
  "6-4",
]);

const NETWORK_NODES: NetworkNode[] = [
  { id: "builder", type: "BUILDER", x: 12, y: 50 },
  { id: "community", type: "COMMUNITY", x: 28, y: 28 },
  { id: "education", type: "EDUCATION", x: 28, y: 72 },
  { id: "project", type: "PROJECT", x: 46, y: 50 },
  { id: "event", type: "EVENT", x: 62, y: 24 },
  { id: "program", type: "PROGRAM", x: 62, y: 76 },
  { id: "organization", type: "ORGANIZATION", x: 80, y: 34 },
  { id: "opportunity", type: "OPPORTUNITY", x: 80, y: 68 },
];

const NETWORK_RULES: NetworkRule[] = [
  {
    pair: ["builder", "community"],
    score: 20,
    quality: "strong",
    unlock: ["project"],
    note: "Perfect match. Community activated and PROJECT unlocked. (+20)",
  },
  {
    pair: ["builder", "education"],
    score: 10,
    quality: "correct",
    unlock: ["project"],
    note: "Correct match. Learning pipeline unlocked PROJECT. (+10)",
  },
  {
    pair: ["builder", "project"],
    score: 10,
    quality: "correct",
    note: "Correct match. Builder momentum now reaches PROJECT. (+10)",
  },
  {
    pair: ["community", "project"],
    score: 10,
    quality: "correct",
    unlock: ["event"],
    note: "Correct match. COMMUNITY + PROJECT activated EVENT. (+10)",
  },
  {
    pair: ["community", "event"],
    score: 20,
    quality: "strong",
    unlock: ["program"],
    note: "Perfect match. EVENT unlocked PROGRAM formats. (+20)",
  },
  {
    pair: ["community", "program"],
    score: 10,
    quality: "correct",
    note: "Correct match. PROGRAM supports community growth. (+10)",
  },
  {
    pair: ["project", "event"],
    score: 10,
    quality: "correct",
    unlock: ["organization"],
    note: "Correct match. EVENT execution opened ORGANIZATION. (+10)",
  },
  {
    pair: ["project", "program"],
    score: 20,
    quality: "strong",
    unlock: ["organization"],
    note: "Perfect match. PROJECT + PROGRAM unlocked ORGANIZATION. (+20)",
  },
  {
    pair: ["project", "organization"],
    score: 20,
    quality: "strong",
    unlock: ["opportunity"],
    note: "Perfect match. ORGANIZATION connection unlocked OPPORTUNITY. (+20)",
  },
  {
    pair: ["project", "opportunity"],
    score: 10,
    quality: "correct",
    note: "Correct match. PROJECT linked to OPPORTUNITY. (+10)",
  },
  {
    pair: ["program", "organization"],
    score: 10,
    quality: "correct",
    note: "Correct match. PROGRAM anchored organizational ties. (+10)",
  },
  {
    pair: ["organization", "opportunity"],
    score: 20,
    quality: "strong",
    note: "Perfect match. Opportunity layer is now active. (+20)",
  },
  {
    pair: ["event", "program"],
    score: 20,
    quality: "strong",
    note: "Perfect match. EVENT + PROGRAM reinforced activation. (+20)",
  },
  {
    pair: ["program", "opportunity"],
    score: 20,
    quality: "strong",
    note: "Perfect match. PROGRAM opened additional opportunities. (+20)",
  },
];

const NODE_BY_ID = Object.fromEntries(NETWORK_NODES.map((node) => [node.id, node])) as Record<string, NetworkNode>;

function normalizePair(a: string, b: string): [string, string] {
  return a < b ? [a, b] : [b, a];
}

function networkRuleMap() {
  const map = new Map<string, NetworkRule>();
  for (const rule of NETWORK_RULES) {
    const [a, b] = normalizePair(rule.pair[0], rule.pair[1]);
    map.set(`${a}|${b}`, rule);
  }
  return map;
}

function initialNetworkState(): NetworkGameState {
  return {
    unlocked: ["builder", "community", "education"],
    connections: [],
    score: 0,
    note: "COMMUNITY and EDUCATION are now available.",
    flashedNodes: [],
    invalidNodes: [],
    recentConnection: undefined,
  };
}

function isNetworkComplete(state: Pick<NetworkGameState, "unlocked" | "connections" | "score">) {
  const unlocked = new Set(state.unlocked);
  const hasAllTypes = NETWORK_NODES.every((node) => unlocked.has(node.id));
  return hasAllTypes && state.connections.length >= 8 && state.score >= 100;
}

function pointKey(point: Point) {
  return `${point.x}-${point.y}`;
}

function initialGameState(): GameState {
  return {
    player: START,
    collected: [],
    steps: 0,
    deadEnds: 0,
    shipped: false,
    note: "Collect nodes, avoid dead ends, then reach SHIP.",
  };
}

export function PlaygroundSection() {
  const [game, setGame] = useState<GameState>(initialGameState);
  const [networkGame, setNetworkGame] = useState<NetworkGameState>(initialNetworkState);
  const [networkDrag, setNetworkDrag] = useState<NetworkDragState>({
    active: false,
    pointerX: 0,
    pointerY: 0,
    moved: false,
  });
  const [levelPulse, setLevelPulse] = useState(false);
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const levelRef = useRef(1);
  const nodeButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const suppressNodeClickRef = useRef(false);

  const nodeKeys = useMemo(() => NODE_POINTS.map(pointKey), []);
  const nodeCount = nodeKeys.length;
  const rules = useMemo(() => networkRuleMap(), []);

  useEffect(() => {
    if (networkGame.flashedNodes.length === 0) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setNetworkGame((prev) => ({ ...prev, flashedNodes: [] }));
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [networkGame.flashedNodes]);

  useEffect(() => {
    if (!networkGame.recentConnection) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setNetworkGame((prev) => ({ ...prev, recentConnection: undefined }));
    }, 520);

    return () => window.clearTimeout(timeout);
  }, [networkGame.recentConnection]);

  useEffect(() => {
    if (networkGame.invalidNodes.length === 0) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setNetworkGame((prev) => ({ ...prev, invalidNodes: [] }));
    }, 420);

    return () => window.clearTimeout(timeout);
  }, [networkGame.invalidNodes]);

  const stateLabel = useMemo(() => {
    if (game.shipped) {
      return "SHIPPED";
    }
    if (game.collected.length < 2) {
      return "BUILD";
    }
    if (game.collected.length < nodeCount) {
      return "CONNECT";
    }
    return "SHIP";
  }, [game.collected.length, game.shipped, nodeCount]);

  const progressValue = Math.round((game.collected.length / nodeCount) * 100);

  const movePlayer = (dx: number, dy: number) => {
    setGame((prev) => {
      if (prev.shipped) {
        return prev;
      }

      const nextX = prev.player.x + dx;
      const nextY = prev.player.y + dy;

      if (nextX < 0 || nextY < 0 || nextX >= BOARD_WIDTH || nextY >= BOARD_HEIGHT) {
        return { ...prev, note: "Boundary reached." };
      }

      const nextKey = `${nextX}-${nextY}`;
      if (OBSTACLES.has(nextKey)) {
        return {
          ...prev,
          deadEnds: prev.deadEnds + 1,
          note: "Dead end. Try a different route.",
        };
      }

      const collectedSet = new Set(prev.collected);
      if (nodeKeys.includes(nextKey)) {
        collectedSet.add(nextKey);
      }

      const reachedShip = nextX === SHIP.x && nextY === SHIP.y;
      const allCollected = collectedSet.size === nodeCount;

      if (reachedShip && allCollected) {
        return {
          ...prev,
          player: { x: nextX, y: nextY },
          collected: [...collectedSet],
          steps: prev.steps + 1,
          shipped: true,
          note: "SHIPPED.",
        };
      }

      return {
        ...prev,
        player: { x: nextX, y: nextY },
        collected: [...collectedSet],
        steps: prev.steps + 1,
        note: reachedShip ? "Collect all nodes before shipping." : "",
      };
    });
  };

  const onGameKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const key = event.key.toLowerCase();
    if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d"].includes(key)) {
      event.preventDefault();
    }

    if (key === "arrowup" || key === "w") {
      movePlayer(0, -1);
    }
    if (key === "arrowdown" || key === "s") {
      movePlayer(0, 1);
    }
    if (key === "arrowleft" || key === "a") {
      movePlayer(-1, 0);
    }
    if (key === "arrowright" || key === "d") {
      movePlayer(1, 0);
    }
  };

  const resetGame = () => {
    setGame(initialGameState());
  };

  const isPairAvailable = useCallback((state: NetworkGameState, firstId: string, secondId: string) => {
    if (firstId === secondId) {
      return false;
    }

    const unlocked = new Set(state.unlocked);
    if (!unlocked.has(firstId) || !unlocked.has(secondId)) {
      return false;
    }

    const [a, b] = normalizePair(firstId, secondId);
    const key = `${a}|${b}`;
    if (!rules.has(key)) {
      return false;
    }

    return !state.connections.some((connection) => connection.key === key);
  }, [rules]);

  const networkCompletion = isNetworkComplete(networkGame);

  const networkLevelIndex = useMemo(() => {
    if (networkCompletion) {
      return 4;
    }

    const unlocked = new Set(networkGame.unlocked);
    if (unlocked.has("organization") || unlocked.has("opportunity")) {
      return 4;
    }
    if (unlocked.has("event") || unlocked.has("program")) {
      return 3;
    }
    if (unlocked.has("project") || networkGame.connections.length >= 2) {
      return 2;
    }
    return 1;
  }, [networkCompletion, networkGame.connections.length, networkGame.unlocked]);

  const networkLevel = useMemo(() => {
    if (networkLevelIndex === 4) {
      return "LEVEL 04 / SCALE";
    }
    if (networkLevelIndex === 3) {
      return "LEVEL 03 / ACTIVATE";
    }
    if (networkLevelIndex === 2) {
      return "LEVEL 02 / BUILD";
    }
    return "LEVEL 01 / CONNECT";
  }, [networkLevelIndex]);

  useEffect(() => {
    if (networkLevelIndex > levelRef.current) {
      setLevelPulse(true);
      const timeout = window.setTimeout(() => {
        setLevelPulse(false);
      }, 420);
      levelRef.current = networkLevelIndex;
      return () => window.clearTimeout(timeout);
    }

    levelRef.current = networkLevelIndex;
    return undefined;
  }, [networkLevelIndex]);

  const applyNetworkConnection = (prev: NetworkGameState, firstId: string, secondId: string): NetworkGameState => {
    if (isNetworkComplete(prev)) {
      return prev;
    }

    if (firstId === secondId) {
      return { ...prev, selectedNode: firstId, note: "Pick a second node to connect." };
    }

    const unlocked = new Set(prev.unlocked);
    if (!unlocked.has(firstId) || !unlocked.has(secondId)) {
      return {
        ...prev,
        selectedNode: undefined,
        note: "Node is not unlocked yet.",
        invalidNodes: [firstId, secondId],
      };
    }

    const [a, b] = normalizePair(firstId, secondId);
    const key = `${a}|${b}`;
    const rule = rules.get(key);

    if (!rule) {
      return {
        ...prev,
        selectedNode: undefined,
        note: "Connection unavailable. Try another route.",
        invalidNodes: [firstId, secondId],
      };
    }

    const exists = prev.connections.some((connection) => connection.key === key);
    if (exists) {
      return {
        ...prev,
        selectedNode: undefined,
        note: "Connection already established.",
      };
    }

    const newUnlocked = new Set(unlocked);
    const flashed: string[] = [];
    for (const next of rule.unlock ?? []) {
      if (!newUnlocked.has(next)) {
        newUnlocked.add(next);
        flashed.push(next);
      }
    }

    return {
      ...prev,
      unlocked: [...newUnlocked],
      connections: [
        ...prev.connections,
        {
          key,
          from: a,
          to: b,
          score: rule.score,
          quality: rule.quality,
        },
      ],
      score: prev.score + rule.score,
      selectedNode: undefined,
      flashedNodes: [firstId, secondId, ...flashed],
      invalidNodes: [],
      recentConnection: key,
      note: rule.note,
    };
  };

  const handleNetworkNodeSelect = (nodeId: string) => {
    setNetworkGame((prev) => {
      if (isNetworkComplete(prev)) {
        return prev;
      }

      if (!prev.unlocked.includes(nodeId)) {
        return { ...prev, note: "This node is still locked." };
      }

      if (!prev.selectedNode) {
        return { ...prev, selectedNode: nodeId, note: `Selected ${NODE_BY_ID[nodeId].type}. Choose another node.` };
      }

      if (prev.selectedNode === nodeId) {
        return { ...prev, selectedNode: undefined, note: "Selection cleared." };
      }

      return applyNetworkConnection(prev, prev.selectedNode, nodeId);
    });
  };

  const resetNetworkGame = () => {
    setNetworkGame(initialNetworkState());
    setNetworkDrag({ active: false, pointerX: 0, pointerY: 0, moved: false });
  };

  const connectedNodeTypes = useMemo(() => {
    const set = new Set<string>();
    for (const connection of networkGame.connections) {
      set.add(NODE_BY_ID[connection.from].type);
      set.add(NODE_BY_ID[connection.to].type);
    }
    return set;
  }, [networkGame.connections]);

  const networkObjective = useMemo(() => {
    if (networkCompletion) {
      return "Network complete. Restart to replay a different sequence.";
    }

    const unlocked = new Set(networkGame.unlocked);
    if (!unlocked.has("project")) {
      return "Target next: BUILDER x COMMUNITY or BUILDER x EDUCATION unlocks PROJECT.";
    }
    if (!unlocked.has("event")) {
      return "Target next: COMMUNITY x PROJECT unlocks EVENT.";
    }
    if (!unlocked.has("program")) {
      return "Target next: COMMUNITY x EVENT unlocks PROGRAM (+20).";
    }
    if (!unlocked.has("organization")) {
      return "Target next: PROJECT x PROGRAM unlocks ORGANIZATION (+20).";
    }
    if (!unlocked.has("opportunity")) {
      return "Target next: PROJECT x ORGANIZATION unlocks OPPORTUNITY (+20).";
    }
    return "Scale routes: ORGANIZATION x OPPORTUNITY or PROGRAM x OPPORTUNITY.";
  }, [networkCompletion, networkGame.unlocked]);

  const levelConnect = networkLevelIndex > 1;
  const levelBuild = networkLevelIndex > 2;
  const levelActivate = networkLevelIndex > 3;
  const levelScale = networkLevelIndex > 4;
  const connectCurrent = networkLevelIndex === 1;
  const buildCurrent = networkLevelIndex === 2;
  const activateCurrent = networkLevelIndex === 3;
  const scaleCurrent = networkLevelIndex === 4;

  const activeSourceId = networkDrag.active ? networkDrag.sourceId : networkGame.selectedNode;
  const compatibleTargets = useMemo(() => {
    if (!activeSourceId) {
      return new Set<string>();
    }

    const targets = new Set<string>();
    for (const node of NETWORK_NODES) {
      if (isPairAvailable(networkGame, activeSourceId, node.id)) {
        targets.add(node.id);
      }
    }
    return targets;
  }, [activeSourceId, isPairAvailable, networkGame]);

  const toCanvasPoint = (clientX: number, clientY: number) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0 || rect.height === 0) {
      return { x: 0, y: 0 };
    }

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    return {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    };
  };

  const handleNodePointerDown = (event: ReactPointerEvent<HTMLButtonElement>, nodeId: string, unlocked: boolean) => {
    if (!unlocked || event.pointerType === "touch") {
      return;
    }

    event.preventDefault();
    const point = toCanvasPoint(event.clientX, event.clientY);
    setNetworkDrag({
      active: true,
      sourceId: nodeId,
      pointerX: point.x,
      pointerY: point.y,
      moved: false,
      targetId: undefined,
      hoverNodeId: undefined,
    });
  };

  const handleCanvasPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!networkDrag.active || !networkDrag.sourceId) {
      return;
    }

    const point = toCanvasPoint(event.clientX, event.clientY);
    const eventTarget = event.target as HTMLElement | null;
    const nodeElement = eventTarget?.closest("[data-network-node-id]") as HTMLElement | null;
    const hoveredNodeId = nodeElement?.getAttribute("data-network-node-id") ?? undefined;
    const targetId =
      hoveredNodeId && isPairAvailable(networkGame, networkDrag.sourceId, hoveredNodeId)
        ? hoveredNodeId
        : undefined;

    const source = NODE_BY_ID[networkDrag.sourceId];
    const moved = Math.abs(point.x - source.x) > 1.4 || Math.abs(point.y - source.y) > 1.4;

    setNetworkDrag((prev) => ({
      ...prev,
      pointerX: point.x,
      pointerY: point.y,
      moved: prev.moved || moved,
      targetId,
      hoverNodeId: hoveredNodeId,
    }));
  };

  const handleCanvasPointerUp = () => {
    if (!networkDrag.active || !networkDrag.sourceId) {
      return;
    }

    const sourceId = networkDrag.sourceId;
    const targetId = networkDrag.targetId;
    const hoverNodeId = networkDrag.hoverNodeId;
    const moved = networkDrag.moved;

    suppressNodeClickRef.current = moved;

    if (!moved) {
      setNetworkDrag({ active: false, pointerX: 0, pointerY: 0, moved: false });
      return;
    }

    setNetworkGame((prev) => {
      if (targetId) {
        return applyNetworkConnection(prev, sourceId, targetId);
      }

      if (hoverNodeId && hoverNodeId !== sourceId) {
        return applyNetworkConnection(prev, sourceId, hoverNodeId);
      }

      return {
        ...prev,
        selectedNode: undefined,
        note: "Connection canceled.",
      };
    });

    setNetworkDrag({ active: false, pointerX: 0, pointerY: 0, moved: false });
  };

  const focusCompatibleNode = (sourceId: string, direction: "next" | "previous") => {
    const matches = NETWORK_NODES.filter((node) => isPairAvailable(networkGame, sourceId, node.id));
    if (matches.length === 0) {
      return;
    }

    const ordered = [...matches].sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));
    if (direction === "previous") {
      ordered.reverse();
    }

    const target = ordered[0];
    nodeButtonRefs.current[target.id]?.focus();
  };

  return (
    <section id="playground" className="playground" aria-labelledby="playground-title">
      <header className="playground-header">
        <p className="playground-label">07 / Playground</p>
        <h2 id="playground-title" className="playground-title">
          A little room to play.
        </h2>
        <p className="playground-support">Not everything needs to be another case study.</p>
      </header>

      <div className="playground-shell">
        <div className="playground-status" aria-label="Game status">
          <div className="playground-states" aria-label="Build connect ship states">
            {["BUILD", "CONNECT", "SHIP"].map((label) => (
              <p
                key={label}
                className={`playground-state-pill ${
                  game.shipped ? "" : stateLabel === label ? "is-active" : ""
                }`.trim()}
              >
                {label}
              </p>
            ))}
            {game.shipped ? <p className="playground-state-pill is-active">SHIPPED</p> : null}
          </div>

          <div className="playground-metrics" aria-label="Progress metrics">
            <p>Progress {game.collected.length}/{nodeCount}</p>
            <p>Score {progressValue}%</p>
            <p>Steps {game.steps}</p>
          </div>

          <p className="playground-note" role="status">
            {game.note || "Move through the ecosystem."}
          </p>

          <div className="playground-controls-row">
            <button type="button" className="playground-button" onClick={resetGame}>
              {game.shipped ? "Replay" : "Restart"}
            </button>
            <p className="playground-instructions">Use arrow keys or WASD. Touch controls are below.</p>
          </div>
        </div>

        <div
          className="playground-board-wrap"
          tabIndex={0}
          onKeyDown={onGameKeyDown}
          aria-label="Build connect ship game board"
        >
          <div className="playground-board" role="grid" aria-rowcount={BOARD_HEIGHT} aria-colcount={BOARD_WIDTH}>
            {Array.from({ length: BOARD_HEIGHT }).map((_, y) =>
              Array.from({ length: BOARD_WIDTH }).map((__, x) => {
                const key = `${x}-${y}`;
                const isPlayer = game.player.x === x && game.player.y === y;
                const isStart = START.x === x && START.y === y;
                const isShip = SHIP.x === x && SHIP.y === y;
                const isObstacle = OBSTACLES.has(key);
                const isNode = nodeKeys.includes(key);
                const isCollected = game.collected.includes(key);

                return (
                  <div
                    key={key}
                    className={[
                      "playground-cell",
                      isObstacle ? "is-obstacle" : "",
                      isNode ? "is-node" : "",
                      isCollected ? "is-collected" : "",
                      isStart ? "is-start" : "",
                      isShip ? "is-ship" : "",
                      isPlayer ? "is-player" : "",
                    ]
                      .join(" ")
                      .trim()}
                    role="gridcell"
                    aria-label={`Cell ${x + 1}, ${y + 1}`}
                  />
                );
              }),
            )}
          </div>
        </div>

        <div className="playground-touch" aria-label="Touch controls">
          <div className="playground-touch-grid">
            <button type="button" className="playground-touch-button" onClick={() => movePlayer(0, -1)}>
              Up
            </button>
            <button type="button" className="playground-touch-button" onClick={() => movePlayer(-1, 0)}>
              Left
            </button>
            <button type="button" className="playground-touch-button" onClick={() => movePlayer(1, 0)}>
              Right
            </button>
            <button type="button" className="playground-touch-button" onClick={() => movePlayer(0, 1)}>
              Down
            </button>
          </div>
        </div>
      </div>

      <div className="playground-divider" aria-hidden="true" />

      <article className="playground-network" aria-labelledby="network-title">
        <header className="playground-network-header">
          <p className="playground-network-kicker">Build the network</p>
          <h3 id="network-title" className="playground-network-title">
            Build a developer ecosystem by connecting people, communities, programs,
            projects, organizations, and opportunities.
          </h3>
        </header>

        <div className="playground-network-status" aria-label="Network game status">
          <p className={`playground-network-level ${levelPulse ? "is-pulse" : ""}`.trim()}>{networkLevel}</p>
          <div className="playground-network-metrics">
            <p>Score {networkGame.score}</p>
            <p>Connections {networkGame.connections.length}</p>
            <p>Unlocked {networkGame.unlocked.length}/{NETWORK_NODES.length}</p>
          </div>
          <p className="playground-network-instructions">
            Desktop: drag from one node to a valid target. Mobile/keyboard: select, then connect.
          </p>
          <p className="playground-network-objective">{networkObjective}</p>
          <div className="playground-network-rail" aria-label="Right-side progression indicator">
            <p className={[levelConnect ? "is-complete" : "", connectCurrent ? "is-current" : ""].join(" ").trim()}>
              CONNECT
            </p>
            <span aria-hidden="true">&rarr;</span>
            <p className={[levelBuild ? "is-complete" : "", buildCurrent ? "is-current" : ""].join(" ").trim()}>
              BUILD
            </p>
            <span aria-hidden="true">&rarr;</span>
            <p
              className={[levelActivate ? "is-complete" : "", activateCurrent ? "is-current" : ""]
                .join(" ")
                .trim()}
            >
              ACTIVATE
            </p>
            <span aria-hidden="true">&rarr;</span>
            <p className={[levelScale ? "is-complete" : "", scaleCurrent ? "is-current" : ""].join(" ").trim()}>
              SCALE
            </p>
          </div>
          <div className="playground-network-track" aria-label="Network stage objectives">
            <p className={networkLevelIndex >= 1 ? "is-complete" : ""}>01 Connect: establish first ecosystem links.</p>
            <p className={networkLevelIndex >= 2 ? "is-complete" : ""}>02 Build: unlock and route into projects.</p>
            <p className={networkLevelIndex >= 3 ? "is-complete" : ""}>03 Activate: events and programs go live.</p>
            <p className={networkLevelIndex >= 4 ? "is-complete" : ""}>04 Scale: organizations and opportunities connect.</p>
          </div>
        </div>

        <div
          ref={canvasRef}
          className="playground-network-canvas"
          aria-label="Network ecosystem board"
          onPointerMove={handleCanvasPointerMove}
          onPointerUp={handleCanvasPointerUp}
          onPointerCancel={handleCanvasPointerUp}
          onPointerLeave={handleCanvasPointerUp}
        >
          <svg className="playground-network-lines" viewBox="0 0 100 100" aria-hidden="true">
            {networkGame.connections.map((connection) => {
              const first = NODE_BY_ID[connection.from];
              const second = NODE_BY_ID[connection.to];
              return (
                <line
                  key={connection.key}
                  x1={first.x}
                  y1={first.y}
                  x2={second.x}
                  y2={second.y}
                  className={[
                    "playground-network-line",
                    connection.quality === "strong" ? "is-strong" : "",
                    networkGame.recentConnection === connection.key ? "is-recent" : "",
                  ]
                    .join(" ")
                    .trim()}
                />
              );
            })}
            {networkDrag.active && networkDrag.sourceId ? (
              <line
                x1={NODE_BY_ID[networkDrag.sourceId].x}
                y1={NODE_BY_ID[networkDrag.sourceId].y}
                x2={networkDrag.targetId ? NODE_BY_ID[networkDrag.targetId].x : networkDrag.pointerX}
                y2={networkDrag.targetId ? NODE_BY_ID[networkDrag.targetId].y : networkDrag.pointerY}
                className={[
                  "playground-network-line",
                  "is-preview",
                  networkDrag.targetId ? "is-ready" : "",
                  networkDrag.hoverNodeId && !networkDrag.targetId ? "is-invalid" : "",
                ]
                  .join(" ")
                  .trim()}
              />
            ) : null}
          </svg>

          <div className="playground-network-node-layer">
            {NETWORK_NODES.map((node) => {
              const unlocked = networkGame.unlocked.includes(node.id);
              const selected = networkGame.selectedNode === node.id;
              const flashed = networkGame.flashedNodes.includes(node.id);
              const compatible = compatibleTargets.has(node.id);
              const dragTarget = networkDrag.targetId === node.id;
              const invalid = networkGame.invalidNodes.includes(node.id);
              return (
                <button
                  key={node.id}
                  type="button"
                  data-network-node-id={node.id}
                  className={[
                    "playground-network-node",
                    unlocked ? "is-unlocked" : "is-locked",
                    selected ? "is-selected" : "",
                    flashed ? "is-flashed" : "",
                    compatible ? "is-compatible" : "",
                    dragTarget ? "is-drag-target" : "",
                    invalid ? "is-invalid" : "",
                  ]
                    .join(" ")
                    .trim()}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  onClick={() => {
                    if (suppressNodeClickRef.current) {
                      suppressNodeClickRef.current = false;
                      return;
                    }
                    handleNetworkNodeSelect(node.id);
                  }}
                  onPointerDown={(event) => {
                    handleNodePointerDown(event, node.id, unlocked);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleNetworkNodeSelect(node.id);
                      return;
                    }

                    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                      if (networkGame.selectedNode === node.id) {
                        event.preventDefault();
                        focusCompatibleNode(node.id, "next");
                      }
                    }

                    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                      if (networkGame.selectedNode === node.id) {
                        event.preventDefault();
                        focusCompatibleNode(node.id, "previous");
                      }
                    }
                  }}
                  ref={(element) => {
                    nodeButtonRefs.current[node.id] = element;
                  }}
                  aria-pressed={selected}
                  aria-label={`${node.type} node ${unlocked ? "unlocked" : "locked"}${
                    compatible ? ", compatible target" : ""
                  }`}
                >
                  <span>{node.type}</span>
                  <small>NODE</small>
                </button>
              );
            })}
          </div>
        </div>

        <p className="playground-network-note" role="status">
          {networkCompletion ? "ECOSYSTEM ONLINE" : networkGame.note}
        </p>

        {networkCompletion ? (
          <div className="playground-network-complete" aria-label="Network completion">
            <p>ECOSYSTEM ONLINE</p>
            <p>Builders connected: {connectedNodeTypes.has("BUILDER") ? 1 : 0}</p>
            <p>Communities: {networkGame.unlocked.includes("community") ? 1 : 0}</p>
            <p>Projects: {networkGame.unlocked.includes("project") ? 1 : 0}</p>
            <p>Programs: {networkGame.unlocked.includes("program") ? 1 : 0}</p>
            <p>Connections: {networkGame.connections.length}</p>
            <p className="playground-network-built">NETWORK BUILT &rarr;</p>
            <button type="button" className="playground-button" onClick={resetNetworkGame}>
              Restart network
            </button>
          </div>
        ) : (
          <div className="playground-network-actions">
            <button type="button" className="playground-button" onClick={resetNetworkGame}>
              Restart network
            </button>
          </div>
        )}
      </article>
    </section>
  );
}
