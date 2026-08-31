import Link from "next/link";

import { MediaFrame } from "@/components/ui/media-frame";
import { selectedWorkItems } from "@/content/selected-work";

const [hackunion, openbuildWeek, lordsGithubCodeWave, lsa] = selectedWorkItems;

function WorkMeta({ tags }: { tags: string[] }) {
  return (
    <ul className="work-meta" aria-label="Work metadata">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

export function SelectedWorkSection() {
  return (
    <section id="selected-work" className="selected-work" aria-labelledby="selected-work-title">
      <div className="selected-work-header">
        <p className="selected-work-label">02 / Selected Work</p>
        <h2 id="selected-work-title" className="selected-work-title">
          Work across communities, programs, platforms, and ecosystem-building
          initiatives.
        </h2>
        <p className="selected-work-intro">
          Selected projects and program areas that represent what has been built,
          executed, and actively developed.
        </p>
      </div>

      <article className="work-feature work-feature-primary" aria-labelledby="work-hackunion-title">
        <MediaFrame
          media={hackunion.media}
          label={hackunion.mediaLabel}
          pendingLabel={hackunion.mediaPendingLabel}
          className="work-media-hackunion"
          sizes="(min-width: 960px) 60vw, 100vw"
        />
        <div className="work-content">
          <p className="work-number">{hackunion.number}</p>
          <h3 id="work-hackunion-title" className="work-title work-title-feature">
            {hackunion.title}
          </h3>
          <p className="work-category">{hackunion.category}</p>
          <p className="work-summary">{hackunion.summary}</p>
          <WorkMeta tags={hackunion.tags} />
          <Link href={hackunion.href} className="work-link">
            {hackunion.actionLabel} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </article>

      <article className="work-feature work-feature-secondary" aria-labelledby="work-openbuild-title">
        <MediaFrame
          media={openbuildWeek.media}
          label={openbuildWeek.mediaLabel}
          pendingLabel={openbuildWeek.mediaPendingLabel}
          className="work-media-openbuild"
          sizes="(min-width: 960px) 46vw, 100vw"
        />
        <div className="work-content">
          <p className="work-number">{openbuildWeek.number}</p>
          <h3 id="work-openbuild-title" className="work-title">
            {openbuildWeek.title}
          </h3>
          <p className="work-category">{openbuildWeek.category}</p>
          <p className="work-summary">{openbuildWeek.summary}</p>
          <WorkMeta tags={openbuildWeek.tags} />
          <Link href={openbuildWeek.href} className="work-link">
            {openbuildWeek.actionLabel} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </article>

      <div className="work-compact-grid" aria-label="Additional selected work">
        <article className="work-compact" aria-labelledby="work-lords-title">
          <MediaFrame
            media={lordsGithubCodeWave.media}
            label={lordsGithubCodeWave.mediaLabel}
            pendingLabel={lordsGithubCodeWave.mediaPendingLabel}
            className="work-media-compact"
            sizes="(min-width: 960px) 24vw, 100vw"
          />
          <div className="work-content">
            <p className="work-number">{lordsGithubCodeWave.number}</p>
            <h3 id="work-lords-title" className="work-title work-title-compact">
              {lordsGithubCodeWave.title}
            </h3>
            <p className="work-category">{lordsGithubCodeWave.category}</p>
            <WorkMeta tags={lordsGithubCodeWave.tags} />
            <Link href={lordsGithubCodeWave.href} className="work-link">
              {lordsGithubCodeWave.actionLabel} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </article>

        <article className="work-compact" aria-labelledby="work-lsa-title">
          <MediaFrame
            media={lsa.media}
            label={lsa.mediaLabel}
            pendingLabel={lsa.mediaPendingLabel}
            className="work-media-compact"
            sizes="(min-width: 960px) 24vw, 100vw"
          />
          <div className="work-content">
            <p className="work-number">{lsa.number}</p>
            <h3 id="work-lsa-title" className="work-title work-title-compact">
              {lsa.title}
            </h3>
            <p className="work-category">{lsa.category}</p>
            <WorkMeta tags={lsa.tags} />
            <Link href={lsa.href} className="work-link">
              {lsa.actionLabel} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </article>
      </div>

      <div className="work-footer">
        <Link href="/work" className="intro-link">
          View all work <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="work-next" aria-label="Section transition">
        <div className="intro-next-rule" />
        <p className="intro-next-label">03 / Case Studies</p>
      </div>
    </section>
  );
}
