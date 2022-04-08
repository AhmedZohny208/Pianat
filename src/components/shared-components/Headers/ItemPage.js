import React from 'react'
import { ReactComponent as Humburger } from '../svgs/humburger.svg'
import { ReactComponent as RightArrow } from '../svgs/rightArrow.svg'

export default function ItemPage({title}) {
  return (
    <div className='header d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-center'>
        <Humburger className='icon' />
        <h2>{title}</h2>
      </div>

      <RightArrow />
    </div>
  )
}
