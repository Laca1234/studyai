import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'StudyMind AI',
  description: 'Premium AI-powered study platform for Hungarian high school and university students.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-slate-950 text-white">
      <body>{children}</body>
    </html>
  );
}
