import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-white">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-slate-900/90 p-10 shadow-soft backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">404</p>
        <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-slate-400">The study workspace you were looking for is still loading.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-white transition hover:bg-violet-400">
          Return home
        </Link>
      </div>
    </div>
  );
}
