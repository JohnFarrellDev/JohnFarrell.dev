import React from 'react';

import { cn } from '@/Utilities/cn';

interface FullBleedContainerProps {
  as?: React.ElementType;
  className?: string;
}

export function FullBleedContainer({
  children,
  as: ContainerElement = 'div',
  className,
}: React.PropsWithChildren<FullBleedContainerProps>) {
  return <ContainerElement className={cn('col-span-full', className)}>{children}</ContainerElement>;
}
