export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl py-16">
      <div className="surface-panel px-6 py-8 text-center md:px-8 md:py-10">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-heading text-4xl leading-tight text-foreground md:text-5xl">
          This page is not in the current route map.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted md:text-base">
          Head back to the homepage or move to the work index from there.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full border border-primary/35 bg-primary/12 px-5 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-foreground transition hover:-translate-y-0.5 hover:bg-primary/18"
        >
          Go home
        </a>
      </div>
    </div>
  )
}
