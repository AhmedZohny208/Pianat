import React from 'react'
import { Input, Select } from 'antd'
import item from '../../../../configs/stockFundItems/Item27'

const { Option } = Select

export default function Fees({ title, p1 }) {
  return (
    <div className="d-flex">
      <div className="title">{title}</div>
      <div className="desc">
        <div className="content-w-input">
          <div className="row mb-3">
            <div className="col-6">
              {p1}
              <Input className='inline-input' placeholder={item.ph2} style={{ width: '146px' }} />
            </div>
            <div className="col-6">
              {item.p9_2}
              <Select style={{ width: '70%' }} placeholder={item.ph4} >
                <Option value='jack'>Jack</Option>
              </Select>
            </div>
          </div>
          <div>
            {item.p9_3}
            <Input className='inline-input' placeholder={item.ph3} style={{ width: '92%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
