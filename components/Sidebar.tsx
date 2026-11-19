'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const userRole = 'admin'; // Simulated role

  const links = {
    admin: [
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'Students', href: '/students' },
      { name: 'Fees', href: '/fees' },
    ],
    teacher: [
      { name: 'Marks', href: '/marks' },
      { name: 'Attendance', href: '/attendance' },
    ],
    parent: [{ name: 'My Child', href: '/parent-portal' }],
    bursar: [{ name: 'Fee Payments', href: '/fees' }],
  };

  const navLinks = links[userRole as keyof typeof links] || [];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 text-white rounded"
      >
        ☰
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-800 text-white transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 min-h-screen p-4 flex flex-col`}
      >
        <div className="text-2xl font-bold mb-8 text-blue-400">Kiganda SMS</div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded transition-colors ${
                      isActive
                        ? 'bg-blue-600 font-semibold'
                        : 'hover:bg-slate-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto pt-4 border-t border-slate-700">
          <p className="text-sm text-slate-400">Role: {userRole}</p>
        </div>
      </aside>
    </>
  );
}
