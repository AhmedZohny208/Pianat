import React from 'react'
import DownloadShareholderFormBtn from './DownloadShareholderForm'
import UploadShareholderFormBtn from './UploadShareholderForm'
import { ReactComponent as Exclamation } from '../svgs/exclamationBlue.svg'

export default function UploadDownloadFiles({ content1, content2 }) {
  return (
    <div className="row mb-3">
      <div className="col-4">
        <span className='me-2 fs-17'>1. تنزيل</span>
        <DownloadShareholderFormBtn content={content1} />
      </div>
      <div className="col-4">
        <span className='me-2 fs-17'>2. رفع</span>
        <UploadShareholderFormBtn content={content2} />
        <Exclamation className='ms-3' />
      </div>
    </div>
  )
}
