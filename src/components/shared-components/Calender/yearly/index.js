import React from 'react'
import { months, weeks, days } from '../../../../configs/calender'
import { ReactComponent as Arrow } from '../../svgs/arrowDownBlue.svg'
import { ReactComponent as GoldArrow } from '../../svgs/arrowGold.svg'
import SingleAccordion from '../SingleAccordion'

export default function Yearly({
  month,
  week,
  day,
  setMonth,
  setWeek,
  setDay,
}) {
  return (
    <div className='calender'>
      <div className='calender-header'>
        يتكرر في <span>{month}</span>{' '}
        {week && (
          <>
            <GoldArrow />
            <span>الاسبوع {week}</span>
          </>
        )}{' '}
        {day && (
          <>
            <GoldArrow />
            <span>{day}</span>
          </>
        )}
      </div>

      <div className='calender-content'>
        <SingleAccordion
          Arrow={Arrow}
          content={months}
          title={'شهر'}
          value={month}
          setValue={setMonth}
        />
        <SingleAccordion
          Arrow={Arrow}
          content={weeks}
          title={'الاسبوع'}
          value={week}
          setValue={setWeek}
        />
        <SingleAccordion
          Arrow={Arrow}
          content={days}
          title={'يوم'}
          value={day}
          setValue={setDay}
        />
      </div>
    </div>
  )
}
