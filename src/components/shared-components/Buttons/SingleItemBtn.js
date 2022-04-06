import React from 'react'

export default function SingleItemBtn({ content, rightIcon, leftIcon }) {

  return (
    <div className="col-4">
      <button style={{ fontSize: content.length > 49 ? '13px' : '14px' }} className='btn single-item'>
        <span className='right-icon'>{rightIcon && rightIcon}</span>
        {content}
        <span className='left-icon'>{leftIcon && leftIcon}</span>
      </button>
    </div>
  )
}
