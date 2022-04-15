import React from 'react'
import { ReactComponent as Plus } from '../svgs/plusBlue.svg'

export default function AddNameLight({ content, classn, width }) {
  return (
    <button style={{ width }} className={`btn add-name-light ${classn}`}>
      <Plus />
      {content}
    </button>
  )
}