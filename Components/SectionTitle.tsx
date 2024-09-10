import React, { HTMLAttributes } from 'react';

interface SectionTitleProps extends HTMLAttributes<HTMLElement> {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const SectionTitle = ({ children, as = 'h2', ...htmlProps }: SectionTitleProps) => {
  const Tag = as;
  return (
    <Tag {...htmlProps} className="tracking-normal">
      {children}
    </Tag>
  );
};
