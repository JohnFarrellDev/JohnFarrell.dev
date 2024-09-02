import React, { useState } from 'react'
import styles from './FileExplorer.module.css'

interface Folder {
  folderName: string
  content: Content[]
  collapsed?: boolean
}

type Content = string | Folder

interface FileExplorerProps {
  content: Content[]
}

export const FileExplorer = ({ content }: FileExplorerProps) => {
  return (
    <div className={styles.fileStructure}>
      <FileExplorerContent content={content} depth={0} />
    </div>
  )
}

interface FileExplorerContentProps {
  content: Content[]
  depth: number
  isHiddenProp?: boolean
}

function FileExplorerContent({ content, depth, isHiddenProp }: FileExplorerContentProps) {
  const [isHidden, setIsHidden] = useState<Set<number>>(new Set())
  const [isShown, setIsShown] = useState<Set<number>>(new Set())

  const setOpen = (index: number) => {
    const newIsHidden = new Set(isHidden)
    const newIsShown = new Set(isShown)

    newIsShown.add(index)
    newIsHidden.delete(index)

    setIsShown(newIsShown)
    setIsHidden(newIsHidden)
  }

  const setHide = (index: number) => {
    const newIsHidden = new Set(isHidden)
    const newIsShown = new Set(isShown)

    newIsHidden.add(index)
    newIsShown.delete(index)

    setIsHidden(newIsHidden)
    setIsShown(newIsShown)
  }

  return (
    <div
      style={{
        paddingLeft: `${depth === 0 ? 0 : 50}px`,
        display: `${isHiddenProp ? 'none' : 'block'}`,
      }}
    >
      {content.map((c, index) => (
        <div key={`${depth}.${index}`}>
          {typeof c === 'string' ? (
            <p>{c}</p>
          ) : (
            <>
              <p style={{ cursor: 'pointer', color: 'yellow' }}>
                {(c.collapsed || isHidden.has(index)) && !isShown.has(index) ? (
                  <span
                    onClick={() => setOpen(index)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ marginRight: '4px' }}>
                      <ChevronRight />
                    </span>{' '}
                    {c.folderName}
                  </span>
                ) : (
                  <span
                    onClick={() => setHide(index)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ marginRight: '4px' }}>
                      <ChevronDown />
                    </span>
                    {c.folderName}
                  </span>
                )}
              </p>

              <FileExplorerContent
                content={c.content}
                depth={depth + 1}
                isHiddenProp={(c.collapsed || isHidden.has(index)) && !isShown.has(index)}
              />
            </>
          )}
        </div>
      ))}
    </div>
  )
}

const ChevronRight = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      ></path>
    </svg>
  )
}

const ChevronDown = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      ></path>
    </svg>
  )
}
