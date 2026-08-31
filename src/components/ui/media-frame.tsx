import Image from "next/image";
import type { CSSProperties } from "react";

import type { SelectedWorkMedia } from "@/content/selected-work";

type MediaFrameProps = {
  media?: SelectedWorkMedia;
  label: string;
  pendingLabel: string;
  className?: string;
  sizes?: string;
};

export function MediaFrame({
  media,
  label,
  pendingLabel,
  className,
  sizes = "(min-width: 960px) 50vw, 100vw",
}: MediaFrameProps) {
  const hasImage = Boolean(media?.src);
  const frameStyle = {
    "--media-ratio": media?.aspectRatio ?? "16 / 10",
  } as CSSProperties;

  return (
    <figure className={`work-media ${className ?? ""}`.trim()}>
      <div className="work-media-frame" style={frameStyle}>
        {hasImage && media ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes={sizes}
            className="work-media-image"
            style={{ objectPosition: media.objectPosition ?? "center" }}
          />
        ) : (
          <div className="work-media-fallback" aria-label={`${label} ${pendingLabel}`} role="img">
            <span className="work-media-label">{label}</span>
            <span className="work-media-pending">{pendingLabel}</span>
          </div>
        )}
      </div>

      {hasImage && media ? (
        <figcaption className="work-media-caption">
          {media.caption ?? label}
          {media.credit ? ` - ${media.credit}` : ""}
        </figcaption>
      ) : null}
    </figure>
  );
}
