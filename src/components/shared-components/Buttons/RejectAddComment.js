import React from 'react'
import { ReactComponent as Reload } from '../svgs/reload.svg'

export default function RejectAddComment({ onclick, classn }) {
  return (
    <>
      <button
        onClick={onclick}
        className={`btn rejectAdd ${classn}`}
        style={{ marginLeft: '43px' }}
      >
        <Reload />
        رفض واضافة تعليق
      </button>
    </>
  )
}
