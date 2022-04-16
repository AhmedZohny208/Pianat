import React from 'react'
import { Select, Input } from 'antd'
import item from '../../../../configs/stockFundItems/Item15'

const { Option } = Select

export default function Form2() {
  return (
    <div>
      <p className='p-0 fw-bold mb-3'>{item.p4}</p>

      <div className="row">

        <div className="col-5">
          <div className='mb-3'>
            <p className='p-0 mb-1 fw-600'>{item.l1_1}</p>
            <Select className='w-100 m-0' placeholder={item.ph1} >
              <Option value='jack'>Jack</Option>
            </Select>
          </div>
        </div>

        <div className="col-7">
          <div className="row">
            <div className="col-6">
              <div className='mb-3'>
                <p className='p-0 mb-1 fw-600'>{item.l2}</p>
                <Input className='grey-input m-0' value={item.v2} />
              </div>
            </div>
            <div className="col-6">
              <div className='mb-3'>
                <p className='p-0 mb-1 fw-600'>{item.l3}</p>
                <Input className='grey-input m-0' value={item.v3} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-5">
          <div className='mb-3'>
            <p className='p-0 mb-1 fw-600'>{item.l4}</p>
            <Input className='grey-input m-0' value={item.v4} />
          </div>
        </div>

        <div className="col-7">
          <div className="row">
            <div className="col-6">
              <div className='mb-3'>
                <p className='p-0 mb-1 fw-600'>{item.l5}</p>
                <Input className='grey-input m-0' value={item.v5} />
              </div>
            </div>
            <div className="col-6">
              <div className='mb-3'>
                <p className='p-0 mb-1 fw-600'>{item.l6}</p>
                <Input className='grey-input m-0' value={item.v6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
