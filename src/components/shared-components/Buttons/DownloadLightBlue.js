import React from 'react'
import { ReactComponent as Cloud } from '../svgs/cloudSky.svg'

export default function DownloadLightBlue({classn}) {
  return (
    <button className={`btn download-light-blue ${classn}`}>
      <Cloud />
      تنزيل
    </button>
  )
}
