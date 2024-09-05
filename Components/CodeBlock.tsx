import Link from 'next/link';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
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
      <div className="flex gap-4">
        {githubLink && (
          <Link href={githubLink} className="flex gap-2 text-link hover:text-link-hover">
            <ExternalLink /> Code on GitHub
          </Link>
        )}

        {canHide && <button onClick={() => setShowCode(!showCode)}>{showCode ? 'Hide code' : 'Show code'}</button>}

        {showCode && fileName && <p className="w-full text-right">{fileName}</p>}
      </div>
      {showCode && (
        <SyntaxHighlighter
          language="javascript"
          style={a11yDark}
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
