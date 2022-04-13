import React from 'react'
import { ReactComponent as Add } from '../svgs/addBlue.svg'

export default function AddDocHolder() {
  return (
    <button className='btn add-doc-holder'>
      <Add />
      اضافة حامل وثيقة جديد
    </button>
  )
}
