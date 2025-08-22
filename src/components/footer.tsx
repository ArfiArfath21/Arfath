export function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="container-12 py-10 text-sm text-muted">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="">© {new Date().getFullYear()} Arfath Ahmed Syed</p>
          <a
            href="mailto:arfiarfath0305@gmail.com"
            className="rounded-xl bg-primary/10 px-3 py-2 text-primary hover:bg-primary/20"
          >
            Let’s build something great →
          </a>
        </div>
      </div>
    </footer>
  )
}
