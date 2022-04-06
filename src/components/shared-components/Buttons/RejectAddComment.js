import React from 'react'
import {ReactComponent as Reload} from '../svgs/reload.svg';

export default function RejectAddComment() {
  return (
    <>
    <button className='btn rejectAdd' style={{ marginLeft: '43px' }}>
      <Reload />
      رفض واضافة تعليق
    </button>
    </>
  )
}
