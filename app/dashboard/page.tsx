import Link from 'next/link';
import { ArrowRight, CalendarDays, CheckCircle2, FileText, MessageSquare, Sparkles } from 'lucide-react';

const insights = [
  { title: 'Completed goals', value: '18', icon: CheckCircle2 },
  { title: 'Active flashcards', value: '62', icon: FileText },
  { title: 'Upcoming exams', value: '3', icon: CalendarDays },
  { title: 'AI questions answered', value: '124', icon: MessageSquare }
];

const subjects = [
  { name: 'Mathematics', progress: 82 },
  { name: 'Biology', progress: 74 },
  { name: 'Hungarian', progress: 91 },
  { name: 'Physics', progress: 68 }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="grid gap-8 xl:grid-cols-[0.9fr_0.7fr]">
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Study dashboard</p>
                <h1 className="mt-3 text-4xl font-semibold">Your learning flow</h1>
                <p className="mt-3 text-slate-400">AI-powered recommendations and next study actions based on your recent uploads.</p>
              </div>
              <div className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-3 text-sm text-slate-300">
                <Sparkles className="h-5 w-5 text-brand" />
                Premium features enabled
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {insights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900 p-6">
                  <div className="flex items-center gap-3 text-brand">
                    <item.icon className="h-5 w-5" />
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.title}</p>
                  </div>
                  <p className="mt-5 text-4xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Daily focus</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Finish Biology summary</h2>
              </div>
              <ArrowRight className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Upload materials</p>
                <p className="mt-2 text-white">Chemistry notes + érettségi past papers</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">AI recommendation</p>
                <p className="mt-2 text-white">Generate formula flashcards for Physics</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Study materials</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Recent uploads</h2>
              </div>
              <Link href="/my-materials" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
                View all
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Biology notes</p>
                <p className="mt-3 text-xl font-semibold text-white">T4 érettségi summary</p>
                <p className="mt-3 text-slate-400">3 modules, flashcards generated automatically.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">History slides</p>
                <p className="mt-3 text-xl font-semibold text-white">Modern Hungary overview</p>
                <p className="mt-3 text-slate-400">Summary, quiz, and timeline created.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">Subject performance</h2>
            <div className="mt-8 space-y-5">
              {subjects.map((subject) => (
                <div key={subject.name} className="rounded-3xl border border-white/10 bg-slate-900 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-medium text-white">{subject.name}</p>
                    <p className="text-sm text-slate-400">{subject.progress}%</p>
                  </div>
                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-brand" style={{ width: `${subject.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          <Link href="/flashcards" className="group rounded-[2rem] border border-white/10 bg-brand/10 p-8 text-white transition hover:border-brand/20 hover:bg-brand/15">
            <p className="text-sm uppercase tracking-[0.3em] text-brand">Flashcards</p>
            <h3 className="mt-5 text-2xl font-semibold">Review with spaced repetition</h3>
            <p className="mt-4 text-slate-300">Flip cards, tag difficulty, and master concepts faster.</p>
          </Link>
          <Link href="/quizzes" className="group rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 text-white transition hover:border-brand/20 hover:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Quizzes</p>
            <h3 className="mt-5 text-2xl font-semibold">Instant practice tests</h3>
            <p className="mt-4 text-slate-300">Generate multiple choice, fill in the blank, and matching questions.</p>
          </Link>
          <Link href="/mock-exams" className="group rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 text-white transition hover:border-brand/20 hover:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Mock exams</p>
            <h3 className="mt-5 text-2xl font-semibold">Exam simulation mode</h3>
            <p className="mt-4 text-slate-300">Timed tests, analytics, and realistic readiness scores.</p>
          </Link>
        </section>
      </div>
    </main>
  );
}
