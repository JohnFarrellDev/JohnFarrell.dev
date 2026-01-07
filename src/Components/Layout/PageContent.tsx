import React from 'react';
import { cn } from '@/Utilities/cn';

interface PageContentContainerProps {
  as?: React.ElementType;
  className?: string;
}

export function PageContentContainer({
  children,
  as: ContainerElement = 'div',
  className,
}: React.PropsWithChildren<PageContentContainerProps>) {
  return (
    <ContainerElement className={cn('col-start-2 w-full px-[var(--page-padding)]', className)}>
      {children}
    </ContainerElement>
  );
}
