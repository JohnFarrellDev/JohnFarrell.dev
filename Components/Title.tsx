import React from 'react'

interface TitleProps {
  title: string
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className="underline" />
    </div>
  )
}
