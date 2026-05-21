import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-white">
      <div className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-soft backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Get started</p>
          <h1 className="mt-3 text-4xl font-semibold">Create your StudyMind AI account</h1>
          <p className="mt-3 text-slate-400">Unlock unlimited uploads, AI tutor support, and exam-ready planning.</p>
        </div>
        <form className="space-y-4">
          <label className="block text-sm text-slate-300">
            Full name
            <input type="text" placeholder="Éva Kovács" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
          </label>
          <label className="block text-sm text-slate-300">
            School email
            <input type="email" placeholder="eva@school.hu" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
          </label>
          <label className="block text-sm text-slate-300">
            Password
            <input type="password" placeholder="Create a password" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
          </label>
          <button type="submit" className="w-full rounded-3xl bg-brand px-5 py-3 text-base font-semibold text-white transition hover:bg-violet-400">
            Create account
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-white transition hover:text-brand">
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
}
