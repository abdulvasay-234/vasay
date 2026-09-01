import Link from "next/link";

import { collaborationTopics, contactChannels } from "@/content/contact";

function ContactAction({
  label,
  href,
  isExternal,
  primary,
}: {
  label: string;
  href: string;
  isExternal?: boolean;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      className={primary ? "contact-action contact-action-primary" : "contact-action"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {primary ? "Get in touch" : label} <span aria-hidden="true">&rarr;</span>
    </a>
  );
}

export function ContactSection() {
  const availableChannels = contactChannels.filter((channel) => Boolean(channel.href));
  const primaryEmail = contactChannels.find((channel) => channel.id === "email" && channel.primary);
  const supportingChannels = contactChannels.filter((channel) => channel.id !== "email");

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <header className="contact-header">
        <p className="contact-label">08 / Contact</p>
        <h2 id="contact-title" className="contact-title">
          Let&apos;s build something useful.
        </h2>
        <p className="contact-support">
          I&apos;m interested in working on developer communities, ecosystem programs,
          developer experiences, and initiatives that help builders move from curiosity
          to participation.
        </p>
      </header>

      <div className="contact-actions" aria-label="Contact actions">
        {primaryEmail?.href ? (
          <ContactAction
            label={primaryEmail.label}
            href={primaryEmail.href}
            isExternal={primaryEmail.isExternal}
            primary
          />
        ) : (
          <span className="contact-action contact-action-primary contact-action-muted" aria-disabled="true">
            Get in touch <span aria-hidden="true">&rarr;</span>
          </span>
        )}

        <div className="contact-actions-secondary" aria-label="Additional channels">
          <Link href="/#selected-work" className="contact-action">
            Explore my work <span aria-hidden="true">&rarr;</span>
          </Link>

          {supportingChannels.map((channel) =>
            channel.href ? (
              <ContactAction
                key={channel.id}
                label={channel.label}
                href={channel.href}
                isExternal={channel.isExternal}
              />
            ) : (
              <span key={channel.id} className="contact-action contact-action-muted" aria-hidden="true">
                {channel.label}
              </span>
            ),
          )}
        </div>

        {availableChannels.length < contactChannels.length ? (
          <p className="contact-availability" role="status">
            Direct links are published as verified profile details are configured.
          </p>
        ) : null}
      </div>

      <div className="contact-context" aria-labelledby="contact-context-title">
        <p id="contact-context-title" className="contact-context-label">
          Open to conversations around
        </p>
        <div className="contact-context-list">
          {collaborationTopics.map((topic) => (
            <p key={topic} className="contact-context-item">
              {topic}
            </p>
          ))}
        </div>
      </div>

      <div className="contact-end-rule" aria-hidden="true" />
    </section>
  );
}
