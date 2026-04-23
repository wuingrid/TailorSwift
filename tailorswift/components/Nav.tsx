'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/jobs', label: 'Job Search' },
  { href: '/match', label: 'Resume Match' },
  { href: '/tailor', label: 'Resume Tailor' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="bg-zinc-900 text-white px-8 py-4 flex items-center gap-10">
      <span className="font-semibold text-lg tracking-tight">TailorSwift</span>
      <div className="flex gap-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm transition-colors ${
              pathname === href
                ? 'text-white font-medium'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
