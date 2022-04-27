import React from 'react'
import { ReactComponent as Download } from '../svgs/download.svg'

export default function DownloadTransparent() {
  return (
    <button className='btn download-transparent'>
      <Download />
      تنزيل
    </button>
  )
}
