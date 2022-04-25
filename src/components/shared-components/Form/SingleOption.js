import React from 'react'

export default function SingleOption({ option }) {
  return (
    <div className='single-option'>
      <div className="icon">
        <div className="selected"></div>
      </div>
      <div>{option}</div>
    </div>
  )
}
