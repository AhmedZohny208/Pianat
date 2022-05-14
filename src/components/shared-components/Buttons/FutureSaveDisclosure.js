import React from 'react'
import { ReactComponent as Save } from '../svgs/saveWhite.svg'

export default function FutureSaveDisclosure({ content, classn, onclick }) {
  return (
    <button
      onClick={onclick}
      className={`btn future-save-disclosure ${classn}`}
    >
      <Save />
      {content}
    </button>
  )
}
