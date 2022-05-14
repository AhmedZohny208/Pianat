import React from 'react'
import { ReactComponent as Plus } from '../svgs/plusWhite.svg'

export default function AddName({ content, classn, width, onclick }) {
  return (
    <button 
      style={{ width }} 
      className={`btn add-name ${classn}`}
      onClick={onclick}
    >
      <Plus />
      {content}
    </button>
  )
}
