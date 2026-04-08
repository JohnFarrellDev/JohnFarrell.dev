'use client';

import { useEffect, useState } from 'react';

interface TocEntry {
  display: string;
  url: string;
  nestedContent?: TocEntry[];
}

interface ArticleSidebarTocProps {
  content: TocEntry[];
}

function getAllIds(entries: TocEntry[]): string[] {
  return entries.flatMap((entry) => [
    entry.url.slice(1),
    ...(entry.nestedContent ? getAllIds(entry.nestedContent) : []),
  ]);
}

export function ArticleSidebarToc({ content }: ArticleSidebarTocProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const ids = getAllIds(content);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '0px 0px -80% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [content]);

  return (
    <nav aria-label="Table of contents" className="mt-[24px] hidden lg:block">
      <div className="sticky top-8">
        <div className="flex items-center justify-between border-b border-gray-300">
          <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Table of Contents</h2>
        </div>
        <ul className="mt-3 space-y-2">
          {content.map((entry) => (
            <TocItem key={entry.url} entry={entry} activeId={activeId} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

function TocItem({ entry, activeId }: { entry: TocEntry; activeId: string }) {
  const isActive = activeId === entry.url.slice(1);

  return (
    <li className="list-none">
      <a
        href={entry.url}
        className={`block text-sm no-underline transition-colors ${
          isActive ? 'font-semibold text-gray-900' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        {entry.display}
      </a>
      {entry.nestedContent && (
        <ul className="mt-1 space-y-1 pl-3">
          {entry.nestedContent.map((nested) => {
            const isNestedActive = activeId === nested.url.slice(1);
            return (
              <li key={nested.url} className="list-none">
                <a
                  href={nested.url}
                  className={`block text-xs no-underline transition-colors ${
                    isNestedActive ? 'font-semibold text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {nested.display}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
