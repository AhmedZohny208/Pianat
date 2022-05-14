import React from 'react'
import { ReactComponent as Add } from '../svgs/addComment.svg'

export default function AddComment({ onclick }) {
  return (
    <>
      <button className='btn add-comment' onClick={onclick}>
        <Add />
        اضافة تعليق
      </button>
    </>
  )
}
