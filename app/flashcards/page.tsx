import Link from 'next/link';

const decks = [
  { title: 'Biology formulas', cards: 28, mastered: '68%' },
  { title: 'Hungarian verbs', cards: 42, mastered: '51%' },
  { title: 'Physics concepts', cards: 33, mastered: '74%' }
];

export default function FlashcardsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Flashcard decks</p>
              <h1 className="mt-3 text-4xl font-semibold">Interactive study cards</h1>
            </div>
            <Link href="/dashboard" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">
              Dashboard
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {decks.map((deck) => (
              <div key={deck.title} className="rounded-3xl border border-white/10 bg-slate-900 p-6">
                <h2 className="text-2xl font-semibold text-white">{deck.title}</h2>
                <p className="mt-3 text-slate-400">{deck.cards} cards · Mastered {deck.mastered}</p>
                <button className="mt-6 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                  Study now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
