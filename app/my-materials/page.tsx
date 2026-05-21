import Link from 'next/link';

const materials = [
  { title: 'Chemistry dictionary', subject: 'Chemistry', status: 'AI summary ready' },
  { title: 'Hungarian grammar', subject: 'Language', status: 'Flashcards generated' },
  { title: 'Physics formulas', subject: 'Physics', status: 'Mock exam created' }
];

export default function MyMaterialsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">My materials</p>
              <h1 className="mt-3 text-4xl font-semibold">Organized study content</h1>
            </div>
            <Link href="/dashboard" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">
              Back to dashboard
            </Link>
          </div>
          <div className="mt-8 space-y-4">
            {materials.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                    <p className="mt-2 text-sm text-slate-400">{item.subject}</p>
                  </div>
                  <span className="rounded-full bg-brand/10 px-4 py-2 text-sm text-brand">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
