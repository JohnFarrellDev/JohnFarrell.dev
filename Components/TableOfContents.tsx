import React, { useState } from 'react'

interface DisplayContent {
  display: string
  url: string
  startIndexValue?: number
  nestedContent?: DisplayContent[]
}

interface TableOfContentsProps {
  content: DisplayContent[]
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [showContents, setShowContents] = useState(true)

  return (
    <div className="w-fit border border-gray-500 bg-grey-900 p-4">
      <TableOfContentsContainer showContents={showContents} setShowContents={setShowContents} />
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

const TableOfContentsContainer = ({ showContents, setShowContents }: TableOfContentsContainerProps) => {
  return (
    <div className="flex items-center gap-4">
      <h2 className="m-0 text-lg">Contents</h2>
      <button
        className="text-link text-base before:content-['['] after:content-[']']"
        onClick={() => setShowContents(!showContents)}
      >
        {showContents ? 'hide' : 'show'}
      </button>
    </div>
  )
}

interface ContentsProps {
  content: DisplayContent[]
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
              <Contents content={data.nestedContent} hierarchy={addLastDigit(incrementLastDigit(hierarchy, index))} />
            </span>
          )
        }

        return <Display key={incrementLastDigit(hierarchy, index)} data={data} hierarchy={hierarchy} index={index} />
      })}
    </>
  )
}

interface DisplayProps {
  data: DisplayContent
  hierarchy: string
  index: number
}

const Display = ({ data, hierarchy, index }: DisplayProps) => {
  const indentationCount = ((hierarchy.split('.').length - 1) * 1.5).toString()

  return (
    <li
      style={{
        paddingLeft: `${indentationCount}rem`,
      }}
      data-test-hierarchy={hierarchy}
      data-test-indentation={indentationCount}
    >
      <a href={data.url} className="text-link hover:text-link-hover">
        <span>{incrementLastDigit(hierarchy.toString(), index)}</span>
        <span className="pl-4">{data.display}</span>
      </a>
    </li>
  )
}

function incrementLastDigit(inputDigits: string, increment: number): string {
  const allDigits = inputDigits.split('.')
  allDigits[allDigits.length - 1] = (Number(allDigits[allDigits.length - 1]) + increment).toString()
  return allDigits.join('.')
}

function addLastDigit(inputDigits: string): string {
  return inputDigits + '.1'
}
