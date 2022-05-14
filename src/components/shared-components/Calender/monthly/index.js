import React from 'react'
import { weeks, days } from '../../../../configs/calender'
import { ReactComponent as Arrow } from '../../svgs/arrowDownBlue.svg'
import { ReactComponent as GoldArrow } from '../../svgs/arrowGold.svg'
import SingleAccordion from '../SingleAccordion'

export default function Monthly({ week, day, setWeek, setDay }) {
  return (
    <div className='calender'>
      <div className='calender-header'>
        يتكرر في{' '}
        {week && <span>الاسبوع {week}</span>}{' '}
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
