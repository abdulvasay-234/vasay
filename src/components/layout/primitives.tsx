import type { PropsWithChildren } from "react";

type ClassNameProps = {
  className?: string;
};

export function ShellContainer({
  children,
  className,
}: PropsWithChildren<ClassNameProps>) {
  return (
    <div className={`shell-container ${className ?? ""}`.trim()}>{children}</div>
  );
}

export function EditorialColumn({
  children,
  className,
}: PropsWithChildren<ClassNameProps>) {
  return (
    <div className={`editorial-column ${className ?? ""}`.trim()}>{children}</div>
  );
}

export function Grid12({
  children,
  className,
}: PropsWithChildren<ClassNameProps>) {
  return <div className={`grid-12 ${className ?? ""}`.trim()}>{children}</div>;
}

export function SplitLayout({
  children,
  className,
}: PropsWithChildren<ClassNameProps>) {
  return (
    <section className={`split-layout ${className ?? ""}`.trim()}>{children}</section>
  );
}

export function SurfaceCard({
  children,
  className,
}: PropsWithChildren<ClassNameProps>) {
  return <article className={`surface-card ${className ?? ""}`.trim()}>{children}</article>;
}

export function MediaFrame({
  children,
  className,
}: PropsWithChildren<ClassNameProps>) {
  return <figure className={`media-frame ${className ?? ""}`.trim()}>{children}</figure>;
}
