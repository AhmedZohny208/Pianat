import React from 'react'
import {ReactComponent as Approve} from '../svgs/approval.svg';

export default function Approval() {
  return (
    <button className='btn approval'>
      <Approve />
      اعتماد
      </button>
  )
}
