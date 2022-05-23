import Link from 'next/link'
import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from './CodeBlock.module.css'

interface CodeBlockProps {
  canHide: boolean
  githubLink?: string
  children: string
}

export const CodeBlock = ({
  canHide,
  githubLink,
  children,
}: CodeBlockProps) => {
  const [showCode, setShowCode] = useState(true)

  return (
    <div className={styles.container}>
      {githubLink && <Link href={githubLink}>Code on GitHub</Link>}

      {canHide && (
        <button onClick={() => setShowCode(!showCode)}>
          {showCode ? 'Hide code' : 'Show code'}
        </button>
      )}

      {showCode && (
        <SyntaxHighlighter
          language="javascript"
          style={a11yDark}
          showLineNumbers={true}
        >
          {children}
        </SyntaxHighlighter>
      )}
    </div>
  )
}
