import Link from 'next/link';

import { Document } from '@/Components/icons/Document';
import { House } from '@/Components/icons/House';
import { Mail } from '@/Components/icons/Mail';
import { NewsPaper } from '@/Components/icons/NewsPaper';
import { Person } from '@/Components/icons/Person';
import { Wrench } from '@/Components/icons/Wrench';
import { cn } from '@/Utilities/cn';

const data = [
  {
    id: 1,
    text: 'home',
    icon: <House />,
    url: '/',
  },
  {
    id: 2,
    text: 'about me',
    icon: <Person />,
    url: '/about-me/',
  },
  {
    id: 3,
    text: 'projects',
    icon: <Wrench />,
    url: '/projects/',
  },
  {
    id: 4,
    text: 'articles',
    icon: <NewsPaper />,
    url: '/articles/',
  },
  {
    id: 5,
    text: 'CV',
    icon: <Document />,
    url: '/cv/',
  },
  {
    id: 6,
    text: 'contact',
    icon: <Mail />,
    url: '/contact/',
  },
];

interface LinkProps {
  isOpen: boolean;
  onLinkClick?: () => void;
}

export function Links({ isOpen, onLinkClick }: LinkProps) {
  return (
    <ul
      className={cn(
        'justify-end gap-2 min-[300px]:gap-8 md:flex md:items-center',
        isOpen
          ? 'fixed inset-0 top-14 z-10 flex flex-col items-center justify-center gap-6 bg-white md:relative md:inset-auto md:top-auto md:gap-8'
          : 'hidden'
      )}
      id="mobile-menu"
      role="menu"
      onKeyDown={(e) => {
        if (e.key === 'Escape') onLinkClick?.();
      }}
    >
      {data.map((link) => (
        <li key={link.id} role="none">
          <Link
            href={link.url}
            onClick={onLinkClick}
            role="menuitem"
            className="hover:text-primary-600 flex items-center gap-2 text-xl font-bold tracking-wide text-gray-900 capitalize no-underline transition duration-300 md:text-base"
          >
            <span className="md:hidden">{link.icon}</span>
            <span>{link.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
