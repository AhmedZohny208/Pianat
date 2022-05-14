import React from 'react'
import {ReactComponent as Delete} from '../svgs/deleteWhite.svg';

export default function DeleteDisclosure({ content, onclick }) {
  return (
    <button 
      className='btn delete-disclosure'
      onClick={onclick}
    >
      <Delete />
      {content}
    </button>
  )
}
