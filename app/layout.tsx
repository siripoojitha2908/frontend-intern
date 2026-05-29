import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nova Learn — AI Learning Command Center',
  description: 'Premium dark-mode student learning dashboard built for futuristic study workflows.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#01030b] text-slate-50 antialiased">{children}</body>
    </html>
  );
}
