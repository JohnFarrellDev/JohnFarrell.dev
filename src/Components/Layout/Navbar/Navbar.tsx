'use client';

import { usePathname } from 'next/navigation';

import { useEffect, useState } from 'react';

import { Links } from '@/Components/Layout/Links/Links';
import { PageContentContainer } from '@/Components/Layout/PageContent/PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer/PageWidthContainer';
import { cn } from '@/Utilities/cn';

export function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.querySelectorAll('main, footer').forEach((el) => {
        el.setAttribute('inert', '');
      });
    } else {
      document.body.style.overflow = '';
      document.querySelectorAll('main, footer').forEach((el) => {
        el.removeAttribute('inert');
      });
    }
    return () => {
      document.body.style.overflow = '';
      document.querySelectorAll('main, footer').forEach((el) => {
        el.removeAttribute('inert');
      });
    };
  }, [isOpen]);

  return (
    <PageWidthContainer
      className={cn('h-14 items-center bg-transparent md:h-20', className, {
        'bg-white': isOpen,
      })}
      as="nav"
      aria-label="Main navigation"
    >
      <PageContentContainer>
        <div className="flex items-center justify-end">
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center cursor-pointer justify-center md:hidden p-[8px] mr-[-8px]"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
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
