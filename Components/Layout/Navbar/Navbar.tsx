import { useState } from 'react'
import { Links } from '../Links/Links'
import { cn } from '../../../lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className={cn('flex h-20 items-center bg-white px-4')}>
      <div className="mx-auto flex w-full max-w-[1170px] items-center justify-end">
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={cn(
              'mb-1 block h-0.5 w-6 bg-gray-600 transition-transform',
              isOpen ? 'translate-y-1.5 rotate-45' : ''
            )}
          />
          <span className={cn('mb-1 block h-0.5 w-6 bg-gray-600', isOpen ? 'opacity-0' : '')} />
          <span
            className={cn(
              'block h-0.5 w-6 bg-gray-600 transition-transform',
              isOpen ? '-translate-y-1.5 -rotate-45' : ''
            )}
          />
        </button>
        <Links isOpen={isOpen} />
      </div>
    </nav>
  )
}
