import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-white">
      <div className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-soft backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Welcome back</p>
          <h1 className="mt-3 text-4xl font-semibold">Log in to StudyMind AI</h1>
          <p className="mt-3 text-slate-400">Access your AI summaries, flashcards, mock exams, and study planner.</p>
        </div>
        <div className="space-y-4">
          <button className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
            Continue with Google
          </button>
          <div className="relative py-4 text-center text-sm text-slate-500">
            <span className="bg-slate-900 px-3">or continue with email</span>
          </div>
          <form className="space-y-4">
            <label className="block text-sm text-slate-300">
              Email address
              <input type="email" placeholder="your@school.edu" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </label>
            <label className="block text-sm text-slate-300">
              Password
              <input type="password" placeholder="••••••••" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </label>
            <button type="submit" className="w-full rounded-3xl bg-brand px-5 py-3 text-base font-semibold text-white transition hover:bg-violet-400">
              Log in
            </button>
          </form>
          <div className="flex items-center justify-between text-sm text-slate-400">
            <Link href="/auth/forgot" className="transition hover:text-white">Forgot password?</Link>
            <Link href="/auth/register" className="transition hover:text-white">Create account</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
