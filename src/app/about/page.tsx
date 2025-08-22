export const metadata = { title: 'About — Arfath Ahmed Syed' }
import { ResumeAccordion } from '@/components/resume-accordion'

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-heading text-3xl">About</h1>

      <section className="grid grid-cols-1 gap-6">
        <div className="glass p-6">
          <h2 className="font-heading text-xl">Lead</h2>
          <p className="mt-3 max-w-3xl text-muted">
            I’m Arfath — a full-stack Data Scientist focused on turning GenAI from demos into dependable products. I lead multi-capability teams, design agentic systems, and obsess over the boring bits that make AI safe, fast, and maintainable.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="glass p-6">
          <h2 className="font-heading text-xl">Short bio</h2>
          <p className="mt-3 text-muted">
            Build AI systems end-to-end: problem framing → architecture → deployment → adoption. Recent work: enterprise GenAI analytics platform; modernized recommendation engine with vector/hybrid search; internal AI copilots for DS workflows. Care as much about reliability as novelty: guardrails, observability, latency, and cost. Based in Hyderabad; open to global roles.
          </p>
        </div>
        <div className="glass p-6">
          <h2 className="font-heading text-xl">Skills</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted">
            <li>GenAI & Agents: LangGraph, LangChain, RAG</li>
            <li>ML & CV: PyTorch/TF, recsys, YOLO, SAM, CLIP</li>
            <li>MLOps: Docker, K8s, gRPC, FastAPI, Ray/Celery</li>
            <li>Cloud/Data: GCP/Azure/AWS, Snowflake, SQL/NoSQL</li>
            <li>Frontend: React/Next, Tailwind</li>
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="glass p-6">
          <h2 className="font-heading text-xl">Timeline</h2>
          <ul className="mt-3 space-y-3 text-sm text-muted">
            <li>
              <span className="text-foreground">Senior Associate – Data Science, Publicis Sapient (2022–present)</span> — Product lead for Insights IQ; AWS Marketplace launch; agentic pipelines; K8s-native MLOps
            </li>
            <li>
              <span className="text-foreground">Business Analyst Intern, Saras Analytics (2020–2021)</span> — Churn models (DNN + regression), ARIMA/SARIMAX forecasting
            </li>
          </ul>
        </div>
        <div className="glass p-6">
          <h2 className="font-heading text-xl">Certifications & Awards</h2>
          <p className="mt-3 text-sm text-muted">GCP Professional ML Engineer (Apr ’24) • Best GenAI Case Study (Jun ’24) • Aspire Award Finalist (Mar ’24) • Embracing the Future (Oct ’24) • GRE 327/340 (2022)</p>
        </div>
      </section>

      <section className="glass p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-heading text-xl">Résumé</h2>
            <p className="mt-1 text-sm text-muted">Download a one-page PDF or preview inline.</p>
          </div>
          <div className="flex gap-3">
            <a href="/resume.pdf" className="rounded-2xl bg-primary px-4 py-2 text-sm text-primary-foreground">Download PDF</a>
            <a href="/resume.pdf" target="_blank" rel="noopener" className="rounded-2xl border border-border px-4 py-2 text-sm hover:bg-white/5">Open ↗</a>
          </div>
        </div>
        <div className="mt-4">
          <ResumeAccordion height="h-[70vh]" />
        </div>
      </section>
    </div>
  )
}
