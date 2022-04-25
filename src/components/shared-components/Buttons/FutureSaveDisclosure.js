import React from 'react'
import {ReactComponent as Save} from '../svgs/saveWhite.svg';

export default function FutureSaveDisclosure({ content, classn }) {
  return (
    <button className={`btn future-save-disclosure ${classn}`}>
      <Save />
      {content}
    </button>
  )
}
