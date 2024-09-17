'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import coldarkDark from 'react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark';
import { Copy, ExternalLink } from 'lucide-react';

interface CodeBlockProps {
  canHide: boolean;
  githubLink?: string;
  children: string;
  fileName?: string;
}

export const CodeBlock = ({ canHide, githubLink, children, fileName }: CodeBlockProps) => {
  const [showCode, setShowCode] = useState(true);

  return (
    <>
      <div className="flex flex-col items-start justify-start overflow-auto rounded-t-lg bg-gray-600 py-4-p pl-8-p pr-2-p sm:flex-row sm:items-center sm:justify-between md:pl-10-p md:pr-5-p">
        <div className="flex gap-2-p md:gap-4-p">
          {githubLink && (
            <a href={githubLink} className="flex gap-1 text-white md:gap-2-p">
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
            <p className="m-0 text-white sm:before:mx-2-p sm:before:inline-block sm:before:h-6-p sm:before:w-px sm:before:bg-gray-400 sm:before:align-middle sm:before:content-['']">
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
};
