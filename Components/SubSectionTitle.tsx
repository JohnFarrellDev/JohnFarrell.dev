import React, { HTMLAttributes } from 'react';

interface SubSectionTitleProps extends HTMLAttributes<HTMLElement> {
  children: string;
}

export const SubSectionTitle = ({ children, ...htmlProps }: SubSectionTitleProps) => {
  return <h4 {...htmlProps}>{children}</h4>;
};
