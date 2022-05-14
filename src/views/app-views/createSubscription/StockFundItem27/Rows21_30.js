import React from 'react'
import item from '../../../../configs/stockFundItems/Item27'
import Fees from './Fees'

export default function Rows21_30() {
  return (
    <>
      <Fees 
        title={item.t21}
        p1={item.p21}
      />
      <Fees 
        title={item.t22}
        p1={item.p22}
      />
      <Fees 
        title={item.t23}
        p1={item.p23}
      />
      <Fees 
        title={item.t24}
        p1={item.p24}
      />
      <Fees 
        title={item.t25}
        p1={item.p25}
      />
      <Fees 
        title={item.t26}
        p1={item.p26}
      />
      <Fees 
        title={item.t27}
        p1={item.p27}
      />
      <Fees 
        title={item.t28}
        p1={item.p28}
      />
      <Fees 
        title={item.t29}
        p1={item.p29}
      />

      <div className="d-flex">
        <div className="title">{item.t30}</div>
        <div className="desc">
          <ul>
            {item.p30.map(ele => (
              <li className='mb-0 lh-29'>{ele}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
