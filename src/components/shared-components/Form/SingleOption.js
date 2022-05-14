import React from 'react'

export default function SingleOption({ option, classn }) {
  return (
    <div className={`single-option ${classn}`}>
      <div className='icon'>
        <div className='selected'></div>
      </div>
      <div>{option}</div>
    </div>
  )
}
