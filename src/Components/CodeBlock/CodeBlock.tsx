'use client';

import { Copy, ExternalLink } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import coldarkDark from 'react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark';

import { useState } from 'react';

interface CodeBlockProps {
  canHide: boolean;
  githubLink?: string;
  children: string;
  fileName?: string;
}

export function CodeBlock({ canHide, githubLink, children, fileName }: CodeBlockProps) {
  const [showCode, setShowCode] = useState(true);

  return (
    <>
      <div className="flex flex-col items-start justify-start overflow-auto rounded-t-lg bg-gray-600 py-4 pr-2 pl-8 sm:flex-row sm:items-center sm:justify-between md:pr-5 md:pl-10">
        <div className="flex gap-2 md:gap-4">
          {githubLink && (
            <a href={githubLink} className="flex gap-1 text-white md:gap-2">
              <ExternalLink /> GitHub
            </a>
          )}

          {canHide && (
            <button onClick={() => setShowCode(!showCode)} className="text-white">
              {showCode ? 'Hide code' : 'Show code'}
            </button>
          )}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <button
            className="flex text-white"
            onClick={() => {
              navigator.clipboard.writeText(children);
            }}
          >
            <Copy />
            Copy Code
          </button>
          {fileName && (
            <p className="m-0 text-white sm:before:mx-2 sm:before:inline-block sm:before:h-6 sm:before:w-px sm:before:bg-gray-400 sm:before:align-middle sm:before:content-['']">
              {fileName}
            </p>
          )}
        </div>
      </div>
      {showCode && (
        <SyntaxHighlighter
          language="typescript"
          style={coldarkDark}
          showLineNumbers={true}
          customStyle={{
            margin: '0rem 0rem 1rem 0rem',
          }}
        >
          {children}
        </SyntaxHighlighter>
      )}
    </>
  );
}
