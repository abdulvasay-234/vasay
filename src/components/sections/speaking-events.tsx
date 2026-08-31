import Link from "next/link";

import { MediaFrame } from "@/components/ui/media-frame";
import {
  featuredSpeakingEvent,
  speakingEventArchive,
  speakingFieldSignals,
} from "@/content/speaking-events";

export function SpeakingEventsSection() {
  return (
    <section id="speaking-events" className="speaking-events" aria-labelledby="speaking-events-title">
      <header className="speaking-header">
        <p className="speaking-label">05 / Speaking &amp; Events</p>
        <h2 id="speaking-events-title" className="speaking-title">
          Showing up where developers build.
        </h2>
        <p className="speaking-support">
          Community-facing execution across events, workshops, builder sessions,
          campus programs, and developer education experiences.
        </p>
      </header>

      <article className="speaking-featured" aria-label="Featured event frame">
        <MediaFrame
          media={featuredSpeakingEvent.media}
          label={featuredSpeakingEvent.mediaLabel}
          pendingLabel={featuredSpeakingEvent.mediaPendingLabel}
          className="speaking-media"
          sizes="(min-width: 960px) 58vw, 100vw"
        />

        <div className="speaking-featured-body">
          <p className="speaking-featured-kicker">Featured Event</p>
          <h3 className="speaking-featured-title">
            Events, workshops, builder sessions, and community experiences.
          </h3>
          <p className="speaking-featured-description">
            {featuredSpeakingEvent.shortDescription}
          </p>

          <div className="speaking-field-signals" aria-label="Community field signals">
            {speakingFieldSignals.map((signal) => (
              <p key={signal} className="speaking-field-signal">
                {signal}
              </p>
            ))}
          </div>
        </div>
      </article>

      <div className="speaking-index" aria-label="Event index">
        <div className="speaking-index-head" aria-hidden="true">
          <span>Event</span>
          <span>Role</span>
          <span>Format</span>
        </div>

        {speakingEventArchive.length > 0 ? (
          <div className="speaking-index-body" role="list">
            {speakingEventArchive.map((entry) => (
              <article key={entry.id} className="speaking-index-row" role="listitem">
                <span>{entry.eventName}</span>
                <span>{entry.role}</span>
                <span>{entry.eventType}</span>
              </article>
            ))}
          </div>
        ) : (
          <p className="speaking-index-empty" role="status">
            Selected event records will be added as the archive is assembled.
          </p>
        )}
      </div>

      <div className="speaking-modes" aria-label="Participation modes">
        {speakingFieldSignals.map((mode) => (
          <p key={mode} className="speaking-mode-pill">
            {mode}
          </p>
        ))}
      </div>

      <div className="speaking-footer">
        <Link href="/speaking" className="intro-link">
          View all events <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="speaking-next" aria-label="Section transition">
        <div className="intro-next-rule" />
        <p className="intro-next-label">06 / About</p>
      </div>
    </section>
  );
}
