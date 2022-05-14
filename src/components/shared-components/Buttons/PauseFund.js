import React from 'react'
import { ReactComponent as Pause } from '../svgs/pauseRed.svg'

export default function PauseFund({ onclick, classn }) {
  return (
    <button onClick={onclick} className={`btn pause-fund ${classn}`}>
      <Pause />
      ايقاف الصندوق
    </button>
  )
}
