import Link from "next/link";

const writingThemes = [
  "Developer Relations",
  "Community",
  "Developer Education",
  "Ecosystems",
  "Building",
  "Programs",
];

export function WritingSection() {
  return (
    <section id="writing" className="writing" aria-labelledby="writing-title">
      <div className="writing-header">
        <p className="writing-label">04 / Writing</p>
        <h2 id="writing-title" className="writing-title">
          Notes from building with developers.
        </h2>
        <p className="writing-support">
          Writing, notes, and practical thinking shaped through work with developers,
          communities, and ecosystems.
        </p>
      </div>

      <div className="writing-rail" aria-label="Writing themes">
        {writingThemes.map((theme) => (
          <p key={theme} className="writing-theme">
            {theme}
          </p>
        ))}
      </div>

      <div className="writing-footer">
        <Link href="/writing" className="intro-link">
          View all writing <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="writing-next" aria-label="Section transition">
        <div className="intro-next-rule" />
        <p className="intro-next-label">05 / Speaking &amp; Events</p>
      </div>
    </section>
  );
}
