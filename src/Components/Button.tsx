import React, { ButtonHTMLAttributes } from 'react';

import { cn } from '../Utilities/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className, ...htmlProps }: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-primary-800 text-primary-100 hover:bg-primary-300 hover:text-primary-1000 rounded-md px-3.5 py-2 font-bold tracking-[0.2rem] shadow-lg transition-all duration-500',
        className
      )}
      {...htmlProps}
    >
      {children}
    </button>
  );
}
