import React from 'react'
import {ReactComponent as Delete} from '../svgs/deleteWhite.svg';

export default function DeleteDisclosure({ content }) {
  return (
    <button className='btn delete-disclosure'>
      <Delete />
      {content}
    </button>
  )
}
