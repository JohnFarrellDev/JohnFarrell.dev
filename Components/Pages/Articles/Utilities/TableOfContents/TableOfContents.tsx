import Link from 'next/link'
import React, { useState } from 'react'
import styles from './TableOfContents.module.css'

interface displayContent {
  display: string
  url: string
  startIndexValue?: number
  nestedContent?: displayContent[]
}

interface TableOfContentsProps {
  content: displayContent[]
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [showContents, setShowContents] = useState(true)

  return (
    <div className={styles.container}>
      <TableOfContentsContainer
        showContents={showContents}
        setShowContents={setShowContents}
      />
      {showContents && (
        <ul>
          <Contents content={content} />
        </ul>
      )}
    </div>
  )
}

interface TableOfContentsContainerProps {
  showContents: boolean
  setShowContents: React.Dispatch<React.SetStateAction<boolean>>
}

const TableOfContentsContainer = ({
  showContents,
  setShowContents,
}: TableOfContentsContainerProps) => {
  return (
    <div className={styles.containerHeader}>
      <h2>Contents</h2>
      <span onClick={() => setShowContents(!showContents)}>
        {showContents ? '[hide]' : '[show]'}
      </span>
    </div>
  )
}

interface ContentsProps {
  content: displayContent[]
  hierarchy?: string
}

const Contents = ({ content, hierarchy = '1' }: ContentsProps) => {
  return (
    <>
      {content.map((data, index) => {
        if (data.nestedContent) {
          return (
            <span key={incrementLastDigit(hierarchy, index)}>
              <Display data={data} hierarchy={hierarchy} index={index} />
              <Contents
                content={data.nestedContent}
                hierarchy={addLastDigit(incrementLastDigit(hierarchy, index))}
              />
            </span>
          )
        }

        return (
          <Display
            key={incrementLastDigit(hierarchy, index)}
            data={data}
            hierarchy={hierarchy}
            index={index}
          />
        )
      })}
    </>
  )
}

interface DisplayProps {
  data: displayContent
  hierarchy: string
  index: number
}

const Display = ({ data, hierarchy, index }: DisplayProps) => {
  return (
    <li style={{ paddingLeft: `${hierarchy.split('.').length - 1}rem` }}>
      <Link href={data.url} passHref={true}>
        <a>
          <span>{incrementLastDigit(hierarchy?.toString(), index)}</span>
          <span className={styles.dataDisplay}>{data.display}</span>
        </a>
      </Link>
    </li>
  )
}

const incrementLastDigit = (inputDigits: string, increment: number): string => {
  const allDigits = inputDigits.split('.')
  allDigits[allDigits.length - 1] = (
    Number(allDigits[allDigits.length - 1]) + increment
  ).toString()
  return allDigits.join('.')
}

const addLastDigit = (inputDigits: string): string => {
  return inputDigits + '.1'
}
