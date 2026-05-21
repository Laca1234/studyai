import Link from 'next/link';

export default function StudyPlannerPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Study planner</p>
              <h1 className="mt-3 text-4xl font-semibold">AI-generated weekly schedule</h1>
              <p className="mt-3 text-slate-400">Balanced tasks, exam countdowns, and Pomodoro reminders for intense study weeks.</p>
            </div>
            <Link href="/dashboard" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">
              Dashboard
            </Link>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <h2 className="text-2xl font-semibold text-white">Exam countdown</h2>
              <p className="mt-4 text-slate-400">8 days until the biology oral exam.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <h2 className="text-2xl font-semibold text-white">Today’s focus</h2>
              <p className="mt-4 text-slate-400">Review history dates and generate mock answer bullet points.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <h2 className="text-2xl font-semibold text-white">Pomodoro</h2>
              <p className="mt-4 text-slate-400">4 sessions completed today.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
