import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Highway S.S Management System',
    template: '%s | Highway SMS',
  },
  description:
    'A full-stack school management system for Highway S.S Kiganda to manage students, marks, and fees.',
  openGraph: {
    title: 'Highway S.S Management System',
    description:
      'A full-stack school management system for Highway S.S Kiganda.',
    type: 'website',
    images: [
      {
        url: '/school-logo.ico',
        width: 640,
        height: 640,
        alt: 'Highway Secondary School Kiganda Logo',
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
