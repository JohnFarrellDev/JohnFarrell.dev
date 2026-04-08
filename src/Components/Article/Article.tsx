import React from 'react';

type ArticleProps = {
  children: React.ReactNode;
};

export function ArticleStyles({ children }: ArticleProps) {
  return (
    <div className="[&>h3]:mt-8 [&_h3]:mb-2 [&>h3]:p-0 [&_h3]:text-xl md:[&_h3]:text-2xl [&_h4]:mt-8 [&_h5]:mt-8 [&_h6]:mt-8 [&_li]:max-w-[70ch]">
      {children}
    </div>
  );
}
