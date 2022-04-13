import React from 'react'
import { ReactComponent as Excel } from '../svgs/excelWhite.svg'

export default function DownloadShareholderForm() {
  return (
    <button className='btn download-Shareholder-form'>
      <Excel />
      تنزيل نموذج المساهمين
    </button>
  )
}
