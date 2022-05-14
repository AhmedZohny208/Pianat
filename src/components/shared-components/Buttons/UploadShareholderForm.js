import React from 'react'
import { ReactComponent as Cloud } from '../svgs/cloudGold.svg'

export default function UploadShareholderForm({ content, width, onclick }) {
  return (
    <button 
      style={{ width }} 
      className='btn upload-Shareholder-form'
      onClick={onclick}
    >
      <Cloud />
      {content}
    </button>
  )
}
