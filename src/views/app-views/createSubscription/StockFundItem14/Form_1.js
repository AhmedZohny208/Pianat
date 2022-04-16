import React from 'react'
import { Input, Select } from 'antd'
import item from '../../../../configs/stockFundItems/Item14'

const { Option } = Select

export default function Form_1() {
  return (
    <div className='mb-4'>

      <div className='mb-3'>
        {item.p1}
        <Select value={item.p2} className='mx-4' style={{ width: '70%' }} >
          <Option value='jack'>Jack</Option>
        </Select>
        {item.p3}
      </div>

      <div className="row align-items-center">
        <div className="col-3">
          <div>
            <div className="mb-2 ">{item.p4}</div>
            <Input value={123390} className='grey-input' />
          </div>
        </div>
        <div className="col-3">
          <div>
            <div className="mb-2 ">{item.p5}</div>
            <Input value={23421} className='grey-input' />
          </div>
        </div>
        <div className="col-3">
          <div>
            <div className="mb-2 ">{item.p5}</div>
            <Input value={'22 فبراير 2022'} className='grey-input' />
          </div>
        </div>
        <div className="col-3">
          <div>
            {item.p7}
          </div>
        </div>
      </div>

    </div>
  )
}
