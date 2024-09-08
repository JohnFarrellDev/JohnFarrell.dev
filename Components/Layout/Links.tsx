import React from 'react';
import Link from 'next/link';
import { House } from '../icons/House';
import { Person } from '../icons/Person';
import { Wrench } from '../icons/Wrench';
import { NewsPaper } from '../icons/NewsPaper';
import { Mail } from '../icons/Mail';
import { cn } from '../../lib/utils';

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
        isOpen ? 'absolute left-0 right-0 top-20 z-10 flex flex-col bg-white p-4' : 'hidden'
      )}
      id="mobile-menu"
    >
      {data.map((link) => (
        <li key={link.id}>
          <Link
            href={link.url}
            className="flex items-center gap-2 font-bold capitalize tracking-wide text-gray-100 no-underline transition duration-300 hover:text-primary-500"
          >
            <span className="md:hidden">{link.icon}</span>
            <span>{link.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
