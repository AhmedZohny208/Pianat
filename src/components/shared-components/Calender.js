import React from 'react'
import { months, weeks, days } from '../../configs/calender'
import { ReactComponent as Arrow } from './svgs/arrowDownBlue.svg'
import { ReactComponent as GoldArrow } from './svgs/arrowGold.svg'

export default function Calender() {
  return (
    <div className='calender'>
      <div className='calender-header'>
        يتكرر في <span>فبراير</span> <GoldArrow />
        <span>الاسبوع الاول</span> <GoldArrow />
        <span>الأربعاء</span>
      </div>

      <div className='calender-content'>
        <div className='accordion month-accordion'>
          <div className='header'>
            <Arrow />
            شهر <span>فبراير</span>
          </div>
          <div className='content'>
            {months.map((month) => (
              <div>{month}</div>
            ))}
          </div>
          <div className='clearfix'></div>
        </div>

        <div className='accordion week-accordion'>
          <div className='header'>
            <Arrow />
            الاسبوع <span>الاول</span>
          </div>
          <div className='content'>
            {weeks.map((weeks) => (
              <div>{weeks}</div>
            ))}
          </div>
          <div className='clearfix'></div>
        </div>

        <div className='accordion day-accordion'>
          <div className='header'>
            <Arrow />
            يوم <span>الأربعاء</span>
          </div>
          <div className='content'>
            {days.map((days) => (
              <div>{days}</div>
            ))}
          </div>
          <div className='clearfix'></div>
        </div>
      </div>
    </div>
  )
}
