import React from 'react'
import { ReactComponent as Excel } from '../svgs/excelWhite.svg'

export default function DownloadShareholderForm({ content, width }) {
  return (
    <button style={{ width }} className='btn download-Shareholder-form'>
      <Excel />
      {content}
    </button>
  )
}
