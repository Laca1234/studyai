import Link from 'next/link';

export default function MockExamsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Mock exams</p>
              <h1 className="mt-3 text-4xl font-semibold">Real exam simulation</h1>
              <p className="mt-3 text-slate-400">Create timed érettségi and university-style tests with analytics and readiness scores.</p>
            </div>
            <Link href="/dashboard" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">
              Back to dashboard
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Exam type</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Érettségi simulation</h2>
              <p className="mt-3 text-slate-400">Designed for Hungarian final exams with structured sections and time tracking.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Review mode</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Performance analytics</h2>
              <p className="mt-3 text-slate-400">Automatic grading, score breakdown, and improvement recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
