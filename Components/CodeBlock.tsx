'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import coldarkDark from 'react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark';
import { ExternalLink } from 'lucide-react';

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
      <div className="flex flex-col gap-2-p rounded-t-lg bg-[#111b27] pl-10-p pt-2-p">
        <div className="flex gap-4">
          {githubLink && (
            <a href={githubLink} className="flex gap-2 text-white">
              <ExternalLink /> Code on GitHub
            </a>
          )}

          {canHide && (
            <button onClick={() => setShowCode(!showCode)} className="text-white">
              {showCode ? 'Hide code' : 'Show code'}
            </button>
          )}
        </div>
        {fileName && <p className="m-0 text-white">{fileName}</p>}
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
