import React from 'react'
import {ReactComponent as DocumentDownload} from '../svgs/documentDownload.svg';

export default function DownloadDoc() {
  return (
    <button className='btn download-doc'>
      <DocumentDownload />
      تنزيل
    </button>
  )
}
