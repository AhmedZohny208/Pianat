import React, { useState, useEffect } from 'react'
import { Checkbox } from 'antd'
import { ReactComponent as Arrow } from '../../../../components/shared-components/svgs/leftArrowBlue.svg'

export default function SingleGeneralOptions({
  value,
  onchange,
  itemOptions,
  showItem,
  risks,
}) {
  return (
    <>
      {showItem ? (
        <div
          className='single-option cursor-pointer'
          onClick={() => itemOptions(showItem)}
        >
          <p>{value}</p>
          <Arrow className='left-arrow' />
        </div>
      ) : (
        <div className='single-option'>
          <Checkbox
            defaultChecked={risks && risks.includes(value)}
            value={value}
            onChange={onchange}
          >
            {value}
          </Checkbox>
        </div>
      )}
    </>
  )
}

// onClick={() => itemOptions(showItem)}
