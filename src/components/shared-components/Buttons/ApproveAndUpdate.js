import React from 'react'
import { ReactComponent as Edit } from '../svgs/editWhite.svg'

export default function ApprovalAndUpdate({ onclick }) {
  return (
    <button onClick={onclick} className='btn approval-update'>
      <Edit />
      الاعتماد والتحديث
    </button>
  )
}
