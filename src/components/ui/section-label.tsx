type SectionLabelProps = {
  number: string;
  label: string;
  meta?: string;
};

export function SectionLabel({ number, label, meta }: SectionLabelProps) {
  return (
    <div className="section-label-wrap" aria-label={`${number} ${label}`}>
      <p className="section-label-kicker">
        <span>{number}</span>
        <span>{label}</span>
      </p>
      {meta ? <p className="section-label-meta">{meta}</p> : null}
    </div>
  );
}
