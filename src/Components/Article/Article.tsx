import React from 'react';

type ArticleProps = {
  children: React.ReactNode;
};

export function ArticleStyles({ children }: ArticleProps) {
  return (
    <div className="[&>a]:block [&>figcaption]:max-w-[70ch] [&>h2]:mt-8 [&_h2]:p-0 [&>h2]:text-2xl md:[&>h2]:text-3xl [&>h3]:mt-8 [&_h3]:mb-2 [&>h3]:p-0 [&_h3]:text-xl md:[&_h3]:text-2xl [&_h4]:mt-8 [&_h5]:mt-8 [&_h6]:mt-8 [&_li]:max-w-[70ch] [&>p]:mt-5 [&>p]:max-w-[70ch] [&>p]:text-lg [&>p]:text-pretty [&>p]:text-gray-900">
      {children}
    </div>
  );
}
