import React from 'react'
import { ReactComponent as Edit } from '../svgs/editBlue.svg'

export default function FundModification({ onclick }) {
  return (
    <button onClick={onclick} className='btn fund-modify'>
      <Edit />
      تعديل الصندوق
    </button>
  )
}
