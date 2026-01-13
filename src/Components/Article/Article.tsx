import React from 'react';

type ArticleProps = {
  children: React.ReactNode;
};

export function ArticleStyles({ children }: ArticleProps) {
  return (
    <div className="[&_figcaption]:max-w-[70ch] [&_h2]:mb-2 [&_h2]:mt-8 [&_h2]:p-0 [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:p-0 [&_h3]:text-xl md:[&_h3]:text-2xl [&_h4]:mt-8 [&_h5]:mt-8 [&_h6]:mt-8 [&_li]:max-w-[70ch] [&_p]:mt-5 [&_p]:max-w-[70ch] [&_p]:text-pretty [&_p]:text-lg [&_p]:text-gray-900">
      {children}
    </div>
  );
}
