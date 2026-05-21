import Link from 'next/link';

export default function AiTutorPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">AI Tutor</p>
              <h1 className="mt-3 text-4xl font-semibold">Ask questions in Hungarian or English</h1>
              <p className="mt-3 text-slate-400">Solve problems step-by-step, simplify complex topics, and generate practice tasks instantly.</p>
            </div>
            <Link href="/dashboard" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">
              Dashboard
            </Link>
          </div>
          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Suggested prompts</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-300">Explain quantum mechanics in simple Hungarian.</div>
              <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-300">Create a 20-question history quiz.</div>
              <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-300">Help me prepare for an oral exam in biology.</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
