import React from 'react'
import { ReactComponent as Cloud } from '../svgs/cloudBlue.svg'

export default function UploadTransparent({ content, width, onclick }) {
  return (
    <button
      style={{ width }}
      className='btn upload-transparent'
      onClick={onclick}
    >
      <Cloud />
      {content}
    </button>
  )
}
