type ProofItem = {
  label: string
  value: string
  detail?: string
}

export function ProofStrip({ items }: { items: ProofItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
      {items.map((item) => (
        <div
          key={`${item.label}-${item.value}`}
          className="rounded-[1.6rem] border border-border bg-white/[0.03] px-5 py-5"
        >
          <div className="meta-label">{item.label}</div>
          <div className="mt-3 font-heading text-xl leading-tight text-foreground">{item.value}</div>
          {item.detail ? <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p> : null}
        </div>
      ))}
    </div>
  )
}
