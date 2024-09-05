import React, { HTMLAttributes } from 'react';

interface SectionTitleProps extends HTMLAttributes<HTMLElement> {
  children: string;
}

export const SectionTitle = ({ children, ...htmlProps }: SectionTitleProps) => {
  return (
    <h3 {...htmlProps} className="tracking-normal">
      {children}
    </h3>
  );
};
