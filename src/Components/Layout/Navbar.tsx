'use client';

import { useState } from 'react';

import { PageContentContainer } from '@/Components/Layout//PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';
import { cn } from '@/Utilities/cn';

import { Links } from './Links';

export function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <PageWidthContainer
      className={cn('h-14 items-center bg-transparent md:h-20', className, {
        'bg-white': isOpen,
      })}
      as="nav"
    >
      <PageContentContainer>
        <div className="flex items-center justify-end">
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center cursor-pointer justify-center md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <Hamburger isOpen={isOpen} />
          </button>
          <Links isOpen={isOpen} />
        </div>
      </PageContentContainer>
    </PageWidthContainer>
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
