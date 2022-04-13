import React from 'react'
import { ReactComponent as Download } from '../svgs/downloadDocGold.svg'

export default function DownloadDocGold() {
  return (
    <button className='btn download-doc-gold'>
      <Download />
      تنزيل
    </button>
  )
}
