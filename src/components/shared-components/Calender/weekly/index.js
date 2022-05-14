import React from 'react'
import { days } from '../../../../configs/calender'

export default function Weekly({ day, setDay }) {
  return (
    <>
      <div className='days'>
        <h6>يتكرر في</h6>
        {days.map((ele) => (
          <div className={ele === day && 'active'} onClick={() => setDay(ele)}>
            {ele}
          </div>
        ))}
      </div>
      <div className='clearfix'></div>
    </>
  )
}
