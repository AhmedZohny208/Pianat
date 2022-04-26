import React from 'react'
import {ReactComponent as Approve} from '../svgs/approval.svg';

export default function SendDisclosure({ content, classn, onclick }) {
  return (
    <button 
      className={`btn send-disclosure ${classn}`}
      onClick={onclick}
    >
      <Approve />
      {content}
    </button>
  )
}
