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
  extraStyles?: string
}

const Contents = ({ content, hierarchy = '1', extraStyles }: ContentsProps) => {
  return (
    <>
      {content.map((data, index) => {
        if (data.nestedContent) {
          return (
            <>
              <Display
                data={data}
                hierarchy={hierarchy}
                index={index}
                extraStyles={extraStyles}
                key={incrementLastDigit(hierarchy, index) + '-display-nested'}
              />
              <Contents
                content={data.nestedContent}
                hierarchy={addLastDigit(incrementLastDigit(hierarchy, index))}
                key={
                  addLastDigit(incrementLastDigit(hierarchy, index)) +
                  '-contents'
                }
                extraStyles={styles.padContent}
              />
            </>
          )
        }

        return (
          <Display
            key={incrementLastDigit(hierarchy, index) + '-display-not-nested'}
            data={data}
            hierarchy={hierarchy}
            index={index}
            extraStyles={extraStyles}
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
  extraStyles?: string
}

const Display = ({ data, hierarchy, index, extraStyles }: DisplayProps) => {
  return (
    <li className={extraStyles && extraStyles}>
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
