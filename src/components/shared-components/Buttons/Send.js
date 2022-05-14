import React from 'react'

export default function Send({ classn, content }) {
  return (
    <div className='text-end'>
      <button className={`btn send ${classn}`}>
        {content ? content : 'ارسال'}
      </button>
    </div>
  )
}
