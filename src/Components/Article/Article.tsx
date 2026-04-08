import React from 'react';

type ArticleProps = {
  children: React.ReactNode;
};

export function ArticleStyles({ children }: ArticleProps) {
  return <div className="[&_h4]:mt-8 [&_h5]:mt-8 [&_h6]:mt-8 [&_li]:max-w-[70ch]">{children}</div>;
}
