import React, { useEffect, useState } from 'react'

interface TypeWriterI {
  message: string
}

export const TypeWriter = ({ message }: TypeWriterI) => {
  const SPEED = 50

  // const x = document.getElementById('typewriter') as HTMLParagraphElement
  // if (x) {
  //   x.innerHTML = 'test'
  // }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <p id="typewriter">{message}</p>
    </div>
  )
}
