import Link from "next/link";

import { collaborationTopics, contactChannels } from "@/content/contact";
import {
  contactFinalCta,
  contactHero,
  contactMethodsMeta,
  contactNoteMeta,
  contactTopicsMeta,
} from "@/content/contact-page";

function HeroSection() {
  return (
    <section className="case-study-hero" aria-labelledby="contact-hero-title">
      <div className="case-study-hero-grid">
        <div className="case-study-hero-main">
          <p className="contact-label">{contactHero.kicker}</p>
          <h1 id="contact-hero-title" className="contact-title">
            {contactHero.headline}
          </h1>
          <p className="contact-support">{contactHero.supporting}</p>
        </div>
      </div>
    </section>
  );
}

function TopicsSection() {
  return (
    <section className="case-study-section" aria-labelledby="contact-topics-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <h2 id="contact-topics-title" className="case-study-section-title">
            {contactTopicsMeta.title}
          </h2>
        </header>

        <div className="contact-context-list" aria-label="Topics I'm open to discussing">
          {collaborationTopics.map((topic) => (
            <p key={topic} className="contact-context-item">
              {topic}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodsSection() {
  return (
    <section className="case-study-section" aria-labelledby="contact-methods-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <h2 id="contact-methods-title" className="case-study-section-title">
            {contactMethodsMeta.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{contactMethodsMeta.intro}</p>

        <div className="case-study-explore-links">
          {contactChannels.map((channel) =>
            channel.href ? (
              <a
                key={channel.id}
                href={channel.href}
                target={channel.isExternal ? "_blank" : undefined}
                rel={channel.isExternal ? "noreferrer" : undefined}
                className="case-study-explore-item"
              >
                <div className="case-study-explore-content">
                  <h3 className="case-study-explore-title">{channel.label}</h3>
                  <p className="case-study-explore-action">{channel.description}</p>
                  <p className="case-study-explore-action">
                    Open <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </a>
            ) : (
              <div
                key={channel.id}
                className="case-study-explore-item case-study-explore-item-placeholder"
                aria-disabled="true"
              >
                <div className="case-study-explore-content">
                  <h3 className="case-study-explore-title">{channel.label}</h3>
                  <p className="case-study-explore-action">{channel.description}</p>
                  <p className="case-study-explore-action">Link pending configuration</p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function QuickNoteSection() {
  return (
    <section className="case-study-section" aria-labelledby="contact-note-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <h2 id="contact-note-title" className="case-study-section-title">
            {contactNoteMeta.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{contactNoteMeta.copy}</p>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  const emailChannel = contactChannels.find((channel) => channel.id === "email");

  return (
    <section className="case-study-section" aria-labelledby="contact-final-cta-title">
      <div className="about-final-cta">
        <h2 id="contact-final-cta-title" className="about-final-cta-title">
          Ready when you are.
        </h2>
        <div className="about-final-cta-actions">
          {emailChannel?.href ? (
            <a href={emailChannel.href} className="button button-primary">
              {contactFinalCta.primaryLabel} <span aria-hidden="true">&rarr;</span>
            </a>
          ) : (
            <span className="button button-primary" aria-disabled="true">
              {contactFinalCta.primaryLabel} <span aria-hidden="true">&rarr;</span>
            </span>
          )}
          <Link href={contactFinalCta.secondaryHref} className="button button-secondary">
            {contactFinalCta.secondaryLabel} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ContactPageContent() {
  return (
    <div className="case-study-container">
      <HeroSection />
      <TopicsSection />
      <MethodsSection />
      <QuickNoteSection />
      <FinalCtaSection />
    </div>
  );
}
