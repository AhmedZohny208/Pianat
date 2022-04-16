import React from 'react'
import { ReactComponent as ExclamationGreen } from '../svgs/exclamationGreen.svg'

export default function GreenHint({ content }) {
  return (
    <div className='hint green'>
      <ExclamationGreen />
      {content}
    </div>
  )
}
