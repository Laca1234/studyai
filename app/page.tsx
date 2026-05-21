import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, Layers, Sparkles, Trophy } from 'lucide-react';

const stats = [
  { label: 'Study hours saved', value: '12.5k+' },
  { label: 'Quizzes generated', value: '24k+' },
  { label: 'Active learners', value: '18.3k' }
];

const features = [
  {
    title: 'AI summarization',
    description: 'Instantly transform notes, PDFs and slides into concise study overviews.',
    icon: BookOpen
  },
  {
    title: 'Smart flashcards',
    description: 'Generate spaced repetition decks from any subject in seconds.',
    icon: Layers
  },
  {
    title: 'Mock exams',
    description: 'Create exam-ready simulations with scoring and analytics.',
    icon: Trophy
  }
];

const faqs = [
  {
    question: 'What study materials can I upload?',
    answer: 'PDF, DOCX, PPTX, TXT, images, and handwritten notes are supported in the upload flow.'
  },
  {
    question: 'Can I use StudyMind AI for érettségi preparation?',
    answer: 'Yes — the platform includes exam-style simulators, oral prep, and study plans for Hungarian students.'
  },
  {
    question: 'Is there a free tier?',
    answer: 'The free plan includes limited uploads, AI summaries, and practice quizzes. Premium unlocks unlimited content.'
  }
];

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-soft backdrop-blur-md">
              Startup-ready AI study platform for Hungarian students
            </p>
            <div className="mt-10 max-w-3xl">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Turn your notes into smart study materials instantly.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Upload PDFs, slides, handwritten notes, and let AI build summaries, practice quizzes, flashcards, and mock exams in seconds.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:bg-violet-400">
                  Start Studying
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="#demo" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-white/20 hover:bg-white/10">
                  Try Demo
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mt-8 w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-soft backdrop-blur-xl sm:mt-0">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-br from-brand/40 via-transparent to-transparent" />
            <div className="space-y-5">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Study dashboard preview</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Live</span>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Today</p>
                    <h2 className="text-xl font-semibold text-white">Exam-ready plan</h2>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-brand/15" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-950 p-4">
                    <p className="text-xs uppercase text-slate-500">Progress</p>
                    <p className="mt-3 text-3xl font-semibold text-white">84%</p>
                    <p className="mt-2 text-sm text-slate-400">Érettségi readiness</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950 p-4">
                    <p className="text-xs uppercase text-slate-500">Flashcards</p>
                    <p className="mt-3 text-3xl font-semibold text-white">42</p>
                    <p className="mt-2 text-sm text-slate-400">active cards</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 rounded-3xl border border-white/10 bg-slate-950 p-5 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="text-xs uppercase text-slate-500">Live AI coach</p>
                  <p className="mt-3 font-semibold text-white">Explain chemistry</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="text-xs uppercase text-slate-500">Next exam</p>
                  <p className="mt-3 font-semibold text-white">Biology oral in 3 days</p>
                </div>
                <div className="rounded-3xl bg-brand/10 p-4 text-brand">
                  <p className="text-xs uppercase">AI recommendation</p>
                  <p className="mt-3 text-sm">Review vocabulary lists & formulas</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="demo" className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Study AI tools</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">All your learning workflows in one modern workspace.</h2>
                </div>
                <Sparkles className="h-10 w-10 text-brand" />
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.title} className="rounded-3xl border border-white/10 bg-slate-900 p-6 text-slate-300">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-brand">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-950/90 p-6 text-center shadow-soft">
                  <p className="text-4xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-slate-300 shadow-soft backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Premium study tiers</h3>
            <p className="mt-3 text-slate-400">Flexible plans for high school and university workflows with advanced AI, unlimited uploads, and study analytics.</p>
            <div className="mt-8 space-y-5">
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Free</p>
                <p className="mt-2 text-3xl font-semibold text-white">Starter</p>
                <p className="mt-4 text-sm text-slate-400">Limited uploads, basic summaries, 5 quizzes/month.</p>
              </div>
              <div className="rounded-3xl border border-brand/20 bg-brand/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-brand">Premium</p>
                <p className="mt-2 text-3xl font-semibold text-white">Unlimited</p>
                <p className="mt-4 text-sm text-slate-300">Unlimited AI tutor, mock exams, analytics, priority processing, exam planner.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Built for fast, intelligent learning.</h2>
              <p className="mt-4 max-w-2xl text-slate-400">StudyMind AI helps Hungarian high school and university students prepare for érettségi, oral exams, language learning, and technical subjects with materials-driven AI workflows.</p>
            </div>
            <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:bg-violet-400">
              Explore the dashboard
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Study planner</p>
              <p className="mt-4 text-2xl font-semibold text-white">Adaptive schedules</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Flashcards</p>
              <p className="mt-4 text-2xl font-semibold text-white">Spaced repetition</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">AI tutor</p>
              <p className="mt-4 text-2xl font-semibold text-white">Instant explanations</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Mock exams</p>
              <p className="mt-4 text-2xl font-semibold text-white">Real exam simulations</p>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-soft backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">FAQ</p>
            {faqs.map((faq) => (
              <div key={faq.question} className="space-y-3 rounded-3xl border border-white/10 bg-slate-900 p-6">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-soft backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Trusted by students in Hungary</h3>
            <p className="mt-4 text-slate-400">The interface is designed for fast mobile studying and polished desktop workflows, with a premium AI SaaS feel that scales for school, university, and exam prep.</p>
            <div className="mt-8 space-y-5">
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
                <p className="font-semibold text-white">"The mock exam builder feels like a real érettségi simulation."</p>
                <p className="mt-2 text-sm text-slate-500">— Anna, Budapest</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
                <p className="font-semibold text-white">"I can finally keep all my notes in one intelligent space."</p>
                <p className="mt-2 text-sm text-slate-500">— Tamás, university student</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
