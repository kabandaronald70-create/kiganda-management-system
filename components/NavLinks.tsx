'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

export default function NavLinks() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'All Meetings', href: '/meetings' }, // Assuming you are using the sacrament logic or change to Kiganda routes
    { name: 'Dashboard', href: '/dashboard', protected: true },
  ];

  return (
    <nav className="bg-slate-700 text-white">
      <ul className="container mx-auto px-4 flex gap-6 py-3 items-center">
        {links.map((link) => {
          // Hide protected links if not logged in
          if (link.protected && !session) return null;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? 'text-yellow-400 font-bold underline'
                    : 'hover:text-slate-300'
                }
              >
                {link.name}
              </Link>
            </li>
          );
        })}

        {/* Auth Buttons */}
        <li className="ml-auto">
          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm font-semibold transition"
            >
              Sign Out
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm font-semibold transition"
            >
              Sign In
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
