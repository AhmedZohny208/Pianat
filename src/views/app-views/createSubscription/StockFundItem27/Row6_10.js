import React from 'react'
import { Input } from 'antd'
import item from '../../../../configs/stockFundItems/Item27'
import { ReactComponent as Percentage } from '../../../../components/shared-components/svgs/percentageGrey.svg'
import Fees from './Fees'

export default function Row6_10() {
  return (
    <>
      <div className="d-flex">
        <div className="title">{item.t6}</div>
        <div className="desc">
          <div className="content-w-input">
            {item.p6_1}
            <Input className='inline-input' placeholder={item.ph1} style={{ width: '154px' }} />
            {item.p6_2}
            {item.p6_3}
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="title">{item.t7}</div>
        <div className="desc p-in-first">
          <div className="content-w-input">
            {item.p7_1}
            <div className='d-inline-block position-relative'>
              <Input className='inline-input' placeholder={item.ph1} style={{ width: '154px' }} />
              <Percentage className='percentage' />
            </div>
            {item.p7_2}
            {item.p7_3}
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="title">{item.t8}</div>
        <div className="desc">
          <div className="content-w-input">
            {item.p8_1}
            <div className='d-inline-block position-relative'>
              <Input className='inline-input' placeholder={item.ph1} style={{ width: '154px' }} />
              <Percentage className='percentage' />
            </div>
            {item.p8_2}
          </div>
        </div>
      </div>

      <Fees 
        title={item.t9}
        p1={item.p9_1}
      />

      <Fees 
        title={item.t10}
        p1={item.p10}
      />
    </>
  )
}
