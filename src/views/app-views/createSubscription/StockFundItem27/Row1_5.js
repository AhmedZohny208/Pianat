import React from 'react'
import { Input } from 'antd'
import item from '../../../../configs/stockFundItems/Item27'

export default function Row1_5() {
  return (
    <>
      <div className='d-flex'>
        <div className="title">{item.t1}</div>
        <div className="desc">
          <div className="content-w-input">
            <p className='mb-0'>{item.p1_1}</p>
            <p className='mb-0'>
              {item.p1_2}
              <Input className='inline-input' placeholder={item.ph1} style={{ width: '154px' }} />
              {item.p1_3}
            </p>
          </div>
        </div>
      </div>

      <div className='d-flex'>
        <div className="title">{item.t2}</div>
        <div className="desc">
          <div className="content-w-input">
            <ul className='grey'>
              <li className='mb-3'>
                {item.p2_1}
                <Input className='inline-input' placeholder={item.ph2} style={{ width: '146px' }} />
                {item.p2_2}
                {item.p2_3}
              </li>
              <li>
                {item.p2_4}
                <Input className='inline-input' placeholder={item.ph2} style={{ width: '146px' }} />
                {item.p2_5}
                {item.p2_6}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='d-flex'>
        <div className="title">{item.t3}</div>
        <div className="desc">
          <div className="content-w-input lh-45">
            {item.p3_1}
            <Input className='inline-input me-4' style={{ width: '146px' }} placeholder={item.ph2} />
            {item.p3_2}
            <Input className='inline-input' style={{ width: '45%' }} placeholder={item.ph3} />
          </div>
        </div>
      </div>

      <div className='d-flex'>
        <div className="title">{item.t4}</div>
        <div className="desc">
          <div className="content-w-input">
            {item.p4_1}
            <Input className='inline-input' style={{ width: '146px' }} placeholder={item.ph1} />
            {item.p4_2}
            {item.p4_3}
          </div>
        </div>
      </div>

      <div className='d-flex'>
        <div className="title">{item.t5}</div>
        <div className="desc">
          <div className="content-w-input p-in-first">
            {item.p5_1}
            <Input className='inline-input' style={{ width: '146px' }} placeholder={item.ph2} />
            {item.p5_2}
            {item.p5_3}
            <Input className='inline-input' style={{ width: '146px' }} placeholder={item.ph2} />
            {item.p5_4}
          </div>
        </div>
      </div>
    </>
  )
}
