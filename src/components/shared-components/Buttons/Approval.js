import React from 'react'
import { ReactComponent as Approve } from '../svgs/approval.svg'

export default function Approval({ content, style, classn, onclick }) {
  return (
    <button
      onClick={onclick}
      style={style}
      className={`btn approval ${classn}`}
    >
      <Approve />
      {content}
    </button>
  )
}
