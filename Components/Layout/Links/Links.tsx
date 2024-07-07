import React from 'react'
import Link from 'next/link'
import { House } from '../../icons/House'
import { Person } from '../../icons/Person'
import { Wrench } from '../../icons/Wrench'
import { NewsPaper } from '../../icons/NewsPaper'
import { Mail } from '../../icons/Mail'

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
]

export function Links() {
  return (
    <ul className="flex justify-end gap-2 min-[300px]:gap-8">
      {data.map((link) => {
        return (
          <li key={link.id}>
            <Link
              href={link.url}
              className="font-bold capitalize tracking-wide text-grey-100 transition duration-300 hover:text-primary-500"
            >
              <span className="hidden min-[500px]:block">{link.text}</span>
              <span className="block min-[500px]:hidden">{link.icon}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
