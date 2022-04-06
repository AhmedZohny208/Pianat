import React from 'react'
import {ReactComponent as Add} from '../svgs/addComment.svg';

export default function AddComment() {
  return (
    <>
    <button className='btn add-comment'>
      <Add />
      اضافة تعليق
      </button>
    </>
  )
}
