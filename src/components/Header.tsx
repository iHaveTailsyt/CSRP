// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Departments', href: '/departments' },
    { name: 'Rules', href: '/rules' },
  ];

  return (
    <header className="bg-gray-950 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          🚨 California State RolePlay
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-indigo-400 transition ${
                pathname === link.href ? 'text-indigo-500 font-semibold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://discord.gg/https://discord.gg/fjYjs3j5Rp"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white"
          >
            Join Discord
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-900">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block text-lg ${
                pathname === link.href ? 'text-indigo-500 font-semibold' : ''
              }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://discord.gg/your-server-invite"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
            onClick={() => setOpen(false)}
          >
            Join Discord
          </a>
        </div>
      )}
    </header>
  );
}
