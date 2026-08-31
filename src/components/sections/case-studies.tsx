import Link from "next/link";

import { MediaFrame } from "@/components/ui/media-frame";
import { caseStudyPreviews } from "@/content/case-studies";

const [hackunion, openbuildWeek, lordsGithubCodeWave, lsa] = caseStudyPreviews;

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="case-studies" aria-labelledby="case-studies-title">
      <div className="case-header">
        <p className="case-label">03 / Case Studies</p>
        <h2 id="case-studies-title" className="case-title-intro">
          Selected work, unpacked.
        </h2>
        <p className="case-intro-copy">
          Selected examples that begin to show approach, ownership, execution,
          and applied learning.
        </p>
      </div>

      <article className="case-study case-study-primary" aria-labelledby="case-hackunion-title">
        <MediaFrame
          media={hackunion.media}
          label={hackunion.mediaLabel}
          pendingLabel={hackunion.mediaPendingLabel}
          className="case-media case-media-primary"
          sizes="(min-width: 960px) 58vw, 100vw"
        />
        <div className="case-body">
          <p className="case-number">{hackunion.number}</p>
          <h3 id="case-hackunion-title" className="case-title case-title-hero">
            {hackunion.title}
          </h3>
          <p className="case-category">{hackunion.category}</p>
          <p className="case-context">{hackunion.context}</p>
          <p className="case-role-label">Role</p>
          <p className="case-role-copy">{hackunion.role}</p>
          <Link href={hackunion.href} className="case-link">
            {hackunion.actionLabel} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </article>

      <article className="case-study case-study-secondary" aria-labelledby="case-openbuild-title">
        <MediaFrame
          media={openbuildWeek.media}
          label={openbuildWeek.mediaLabel}
          pendingLabel={openbuildWeek.mediaPendingLabel}
          className="case-media case-media-secondary"
          sizes="(min-width: 960px) 44vw, 100vw"
        />
        <div className="case-body">
          <p className="case-number">{openbuildWeek.number}</p>
          <h3 id="case-openbuild-title" className="case-title">
            {openbuildWeek.title}
          </h3>
          <p className="case-category">{openbuildWeek.category}</p>
          <p className="case-context">{openbuildWeek.context}</p>
          <p className="case-role-label">Role</p>
          <p className="case-role-copy">{openbuildWeek.role}</p>
          <Link href={openbuildWeek.href} className="case-link">
            {openbuildWeek.actionLabel} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </article>

      <div className="case-compact-grid" aria-label="Additional case studies">
        <article className="case-compact" aria-labelledby="case-lords-title">
          <MediaFrame
            media={lordsGithubCodeWave.media}
            label={lordsGithubCodeWave.mediaLabel}
            pendingLabel={lordsGithubCodeWave.mediaPendingLabel}
            className="case-media case-media-compact"
            sizes="(min-width: 960px) 26vw, 100vw"
          />
          <div className="case-body case-body-compact">
            <p className="case-number">{lordsGithubCodeWave.number}</p>
            <h3 id="case-lords-title" className="case-title case-title-compact">
              {lordsGithubCodeWave.title}
            </h3>
            <p className="case-category">{lordsGithubCodeWave.category}</p>
            <p className="case-context">{lordsGithubCodeWave.context}</p>
            <p className="case-role-label">Role</p>
            <p className="case-role-copy">{lordsGithubCodeWave.role}</p>
            <Link href={lordsGithubCodeWave.href} className="case-link">
              {lordsGithubCodeWave.actionLabel} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </article>

        <article className="case-compact" aria-labelledby="case-lsa-title">
          <MediaFrame
            media={lsa.media}
            label={lsa.mediaLabel}
            pendingLabel={lsa.mediaPendingLabel}
            className="case-media case-media-compact"
            sizes="(min-width: 960px) 26vw, 100vw"
          />
          <div className="case-body case-body-compact">
            <p className="case-number">{lsa.number}</p>
            <h3 id="case-lsa-title" className="case-title case-title-compact">
              {lsa.title}
            </h3>
            <p className="case-category">{lsa.category}</p>
            <p className="case-context">{lsa.context}</p>
            <p className="case-role-label">Role</p>
            <p className="case-role-copy">{lsa.role}</p>
            <Link href={lsa.href} className="case-link">
              {lsa.actionLabel} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </article>
      </div>

      <div className="case-next" aria-label="Section transition">
        <div className="intro-next-rule" />
        <p className="intro-next-label">04 / Writing</p>
      </div>
    </section>
  );
}
