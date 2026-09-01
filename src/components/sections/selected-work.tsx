import Link from "next/link";

import { MediaFrame } from "@/components/ui/media-frame";
import { selectedWorkItems } from "@/content/selected-work";

const [hackunion, openbuildWeek, lordsGithub, lsaLabs] = selectedWorkItems;

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
          Four builds that show how the work actually runs.
        </h2>
        <p className="selected-work-intro">
          Ecosystem building, campus programs, open source education, and program
          design. Each one has its own case study.
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
          <p className="work-category">{hackunion.category}</p>
          <h3 id="work-hackunion-title" className="work-title work-title-feature">
            {hackunion.title}
          </h3>
          <p className="work-context">{hackunion.context}</p>
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
          <p className="work-category">{openbuildWeek.category}</p>
          <h3 id="work-openbuild-title" className="work-title">
            {openbuildWeek.title}
          </h3>
          <p className="work-context">{openbuildWeek.context}</p>
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
            media={lordsGithub.media}
            label={lordsGithub.mediaLabel}
            pendingLabel={lordsGithub.mediaPendingLabel}
            className="work-media-compact"
            sizes="(min-width: 960px) 24vw, 100vw"
          />
          <div className="work-content">
            <p className="work-number">{lordsGithub.number}</p>
            <p className="work-category">{lordsGithub.category}</p>
            <h3 id="work-lords-title" className="work-title work-title-compact">
              {lordsGithub.title}
            </h3>
            <p className="work-context">{lordsGithub.context}</p>
            <p className="work-summary">{lordsGithub.summary}</p>
            <WorkMeta tags={lordsGithub.tags} />
            <Link href={lordsGithub.href} className="work-link">
              {lordsGithub.actionLabel} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </article>

        <article className="work-compact" aria-labelledby="work-lsa-title">
          <MediaFrame
            media={lsaLabs.media}
            label={lsaLabs.mediaLabel}
            pendingLabel={lsaLabs.mediaPendingLabel}
            className="work-media-compact"
            sizes="(min-width: 960px) 24vw, 100vw"
          />
          <div className="work-content">
            <p className="work-number">{lsaLabs.number}</p>
            <p className="work-category">{lsaLabs.category}</p>
            <h3 id="work-lsa-title" className="work-title work-title-compact">
              {lsaLabs.title}
            </h3>
            <p className="work-context">{lsaLabs.context}</p>
            <p className="work-summary">{lsaLabs.summary}</p>
            <WorkMeta tags={lsaLabs.tags} />
            <Link href={lsaLabs.href} className="work-link">
              {lsaLabs.actionLabel} <span aria-hidden="true">&rarr;</span>
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
        <p className="intro-next-label">03 / How I Work</p>
      </div>
    </section>
  );
}
