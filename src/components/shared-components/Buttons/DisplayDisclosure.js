import React from 'react'
import { ReactComponent as Eye } from '../svgs/eyeBlue.svg'

export default function DisplayDisclosure({ content, classn, width, onclick }) {
  return (
    <button 
      style={{ width }} 
      className={`btn display-disclosure ${classn}`}
      onClick={onclick}
    >
      <Eye />
      {content}
    </button>
  )
}
