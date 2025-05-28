'use client';

import { useState } from 'react';
import { Links } from './Links';
import { cn } from '../../lib/utils';

export function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav
      className={cn('absolute left-0 right-0 top-0 z-10 flex h-14 items-center bg-transparent md:h-20', className, {
        'bg-white': isOpen,
      })}
    >
      <div className="container mx-auto flex items-center justify-end">
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Hamburger isOpen={isOpen} />
        </button>
        <Links isOpen={isOpen} />
      </div>
    </nav>
  );
}

function Hamburger({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      <span
        className={cn(
          'mb-1 block h-0.5 w-6 bg-gray-600 transition-transform',
          isOpen ? 'translate-y-1.5 rotate-45' : ''
        )}
      />
      <span className={cn('mb-1 block h-0.5 w-6 bg-gray-600', isOpen ? 'opacity-0' : '')} />
      <span
        className={cn('block h-0.5 w-6 bg-gray-600 transition-transform', isOpen ? '-translate-y-1.5 -rotate-45' : '')}
      />
    </>
  );
}
