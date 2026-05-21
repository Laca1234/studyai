import Link from 'next/link';

export default function ForgotPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-white">
      <div className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-soft backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Reset password</p>
          <h1 className="mt-3 text-4xl font-semibold">Forgot your password?</h1>
          <p className="mt-3 text-slate-400">Enter your email and we’ll send a secure reset link.</p>
        </div>
        <form className="space-y-4">
          <label className="block text-sm text-slate-300">
            Email address
            <input type="email" placeholder="your@university.hu" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
          </label>
          <button type="submit" className="w-full rounded-3xl bg-brand px-5 py-3 text-base font-semibold text-white transition hover:bg-violet-400">
            Send reset link
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-slate-400">
          Back to{' '}
          <Link href="/auth/login" className="text-white transition hover:text-brand">
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
}
