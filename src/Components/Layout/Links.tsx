import Link from 'next/link';

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
    text: 'contact',
    icon: <Mail />,
    url: '/contact/',
  },
];

interface LinkProps {
  isOpen: boolean;
}

export function Links({ isOpen }: LinkProps) {
  return (
    <ul
      className={cn(
        'justify-end gap-2 min-[300px]:gap-8 md:flex md:items-center',
        isOpen ? 'absolute top-14 right-0 left-0 z-10 flex flex-col bg-white p-4 md:top-20' : 'hidden'
      )}
      id="mobile-menu"
    >
      {data.map((link) => (
        <li key={link.id}>
          <Link
            href={link.url}
            className="hover:text-primary-600 flex items-center gap-2 font-bold tracking-wide text-gray-900 capitalize no-underline transition duration-300"
          >
            <span className="md:hidden">{link.icon}</span>
            <span>{link.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
