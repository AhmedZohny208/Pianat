import React from 'react'
import { ReactComponent as Cloud } from '../svgs/cloudGold.svg'

export default function UploadShareholderForm({ content }) {
  return (
    <button className='btn upload-Shareholder-form'>
      <Cloud />
      {content}
    </button>
  )
}
