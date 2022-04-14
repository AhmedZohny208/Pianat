import React from 'react'
import { ReactComponent as Plus } from '../svgs/plusWhite.svg'

export default function AddName({ content, classn, width }) {
  return (
    <button style={{ width }} className={`btn add-name ${classn}`}>
      <Plus />
      {content}
    </button>
  )
}
