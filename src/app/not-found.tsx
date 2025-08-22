export default function NotFound() {
  return (
    <div className="space-y-3 text-center">
      <h1 className="font-heading text-3xl">This page took a different route.</h1>
      <p className="text-muted">Head home?</p>
      <a href="/" className="inline-block rounded-2xl bg-primary px-4 py-2 text-sm text-primary-foreground">Go home</a>
    </div>
  )
}

