import React from 'react'
import { Input, DatePicker, Radio } from 'antd'
import Item from '../../../../configs/stockFundItems/Item3'

export default function Rows_1_6() {
  return (
    <>
    <div className="d-flex">
      <div className="title">
        {Item.t1}
      </div>
      <div className="desc">
        {Item.p1}
        <Input className='inline-input' placeholder={Item.ph1} style={{ width: '677px' }} />
      </div>
    </div>

    <div className="d-flex">
      <div className="title">{Item.t2}</div>
      <div className="desc">
        <p style={{ marginBottom: '13px' }}>{Item.p2_1}</p>

        <div className="d-flex" style={{ marginBottom: '8px' }}>
          <div style={{ marginLeft: '40px' }}>
            <span className='label'>{Item.p2_2}</span>
            <Input className='inline-input' placeholder={Item.ph2} style={{ width: '371px' }} />
          </div>
          <div>
            <span className='label'>{Item.p2_3}</span>
            <DatePicker placeholder={Item.ph3} className='inline-input' style={{ width: '190px' }} />
          </div>
        </div>
        <div className="d-flex">
          <div style={{ marginLeft: '40px' }}>
            <span className='label'>{Item.p2_4}</span>
            <Input className='inline-input' placeholder={Item.ph2} style={{ width: '188px' }} />
          </div>
          <div>
            <span className='label'>{Item.p2_3}</span>
            <DatePicker placeholder={Item.ph3} className='inline-input' style={{ width: '190px' }} />
          </div>
        </div>
      </div>
    </div>

    <div className="d-flex">
      <div className="title">{Item.t3}</div>
      <div className="desc">
        <div className='content-w-input'>
          {Item.p3_1}
          <Input className='inline-input' placeholder={Item.ph2} style={{ width: '188px' }} />
          {Item.p3_2} <br />

          <p style={{ marginTop: '8px', marginBottom: '32px' }}>
            {Item.p3_3}
            <Radio.Group style={{ marginRight: '36px' }}>
              <Radio value={1}>مفتوح</Radio>
              <Radio value={2}>مغلق</Radio>
            </Radio.Group>
          </p>
        </div>
      </div>
    </div>

    <div className="d-flex">
      <div className="title">{Item.t4}</div>
      <div className="desc">
        <div className='content-w-input'>
          {Item.p4}
          <Input className='inline-input' placeholder={Item.ph4} style={{ width: '715px' }} />
        </div>
      </div>
    </div>

    <div className="d-flex">
      <div className="title">{Item.t5}</div>
      <div className="desc">
        <div className='content-w-input'>
          <p>
            {Item.p5_1}
          </p>
          <div>
            <span className='label'>{Item.p5_2}</span>
            <DatePicker placeholder={Item.ph3} className='inline-input' style={{ width: '190px' }} />
          </div>
        </div>
      </div>
    </div>

    <div className="d-flex">
      <div className="title">{Item.t6}</div>
      <div className="desc">
        <div className='content-w-input'>
          <p>
            {Item.p6_1}
          </p>
          <div>
            <span className='label'>{Item.p6_2}</span>
            <DatePicker placeholder={Item.ph3} className='inline-input' style={{ width: '182px' }} />
            <span className='label'>{Item.p6_3}</span>
            <DatePicker placeholder={Item.ph3} className='inline-input' style={{ width: '182px' }} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
