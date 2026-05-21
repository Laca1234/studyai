import Link from 'next/link';

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Settings</p>
              <h1 className="mt-3 text-4xl font-semibold">Account and workspace preferences</h1>
              <p className="mt-3 text-slate-400">Manage your subscription, notifications, and study workspace details.</p>
            </div>
            <Link href="/dashboard" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">
              Dashboard
            </Link>
          </div>
          <div className="mt-8 space-y-5">
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Profile</p>
              <p className="mt-4 text-slate-400">Update your name, email, and preferred study language.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Subscription</p>
              <p className="mt-4 text-slate-400">Switch between free and premium tiers for advanced AI features.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Privacy</p>
              <p className="mt-4 text-slate-400">Control your uploaded materials, session history, and notifications.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
