import React from 'react';
import { cn } from '@/Utilities/cn';

interface PageWidthContainerProps {
  as?: React.ElementType;
  className?: string;
}

export function PageWidthContainer({
  children,
  as: ContainerElement = 'div',
  className,
}: React.PropsWithChildren<PageWidthContainerProps>) {
  return (
    <ContainerElement className={cn('grid grid-cols-[1fr_min(var(--max-width),100%)_1fr]', className)}>
      {children}
    </ContainerElement>
  );
}
