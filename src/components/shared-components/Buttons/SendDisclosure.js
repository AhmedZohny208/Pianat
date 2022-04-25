import React from 'react'
import {ReactComponent as Approve} from '../svgs/approval.svg';

export default function SendDisclosure({ content, classn }) {
  return (
    <button className={`btn send-disclosure ${classn}`}>
      <Approve />
      {content}
    </button>
  )
}
