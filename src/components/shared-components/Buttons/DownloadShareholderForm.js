import React from 'react'
import { ReactComponent as Excel } from '../svgs/excelWhite.svg'

export default function DownloadShareholderForm({ content }) {
  return (
    <button className='btn download-Shareholder-form'>
      <Excel />
      {content}
    </button>
  )
}
