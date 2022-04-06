import React from 'react'

export default function SingleItemBtn({ content }) {
  console.log(content.length)
  return (
    <div className="col-4">
      <button style={{ fontSize: content.length > 49 ? '13px' : '14px' }} className='btn single-item'>{content}</button>
    </div>
  )
}
