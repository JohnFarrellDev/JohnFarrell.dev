import React, { useState } from 'react'

type Props = {
  text: string
  length: number
}

export const ShowMoreText = ({ text, length }: Props) => {
  const [expanded, setExpanded] = useState(false)

  if (text.length - 20 <= length) {
    return <div>{text}</div>
  }

  const truncatedText = expanded ? text : `${text.slice(0, length)}... `

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const showMoreText = expanded ? 'Show less' : 'Show more'

  return (
    <div>
      {truncatedText}
      <span
        style={{ color: 'blue', cursor: 'pointer' }}
        onClick={toggleExpanded}
      >
        {showMoreText}
      </span>
    </div>
  )
}
