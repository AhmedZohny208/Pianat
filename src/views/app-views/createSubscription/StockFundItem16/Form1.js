import React from 'react'
import { Input, Select } from 'antd'
import item from '../../../../configs/stockFundItems/Item16'
import { ReactComponent as Edit } from '../../../../components/shared-components/svgs/editBlack.svg'

const { Option } = Select

let value = '';
item.v1_3.forEach(ele => {
  const element = `(${ele.name} - ${ele.number}) . `
  value += element
})

export default function Form1() {
  return (
    <div>
      <p>{item.p1}</p>
      <div className='mb-3'>
        {item.p2}
        <Select value={item.p3} className='' style={{ width: '72.5%' }} >
          <Option value='jack'>Jack</Option>
        </Select>
      </div>

      <div className="row mb-36">

        <div className="col-5">
          <div className='mb-3'>
            <div className='mb-2 flex-cvhb'>
              <div>{item.l1_1}</div>
              <Edit />
            </div>
            <Input value={item.v1_1} className='grey-input' />
          </div>
        </div>
        
        <div className="col-5 offset-1">
          <div className='mb-3'>
            <div className='mb-2 flex-cvhb'>
              <div>{item.l1_2}</div>
              <Edit />
            </div>
            <Input value={item.v1_2} className='grey-input' />
          </div>
        </div>
        <div className="col-5">
          <div>
            <div className='mb-2 flex-cvhb'>
              <div>{item.l1_3}</div>
              <Edit />
            </div>
            <Input value={value} className='grey-input' />
          </div>
        </div>
        <div className="col-5 offset-1">
          <div>
            <div className='mb-2 flex-cvhb'>
              <div>{item.l1_4}</div>
              <Edit />
            </div>
            <Input value={item.v1_4} className='grey-input' />
          </div>
        </div>

      </div>

    <div className='mb-4'>

      <p className='p-0 mb-3'>
        {item.p4} <br />
        {item.p5}
      </p>

      <div className='mb-3'>
        {item.p6}
        <Select value={item.p7} className='mx-4' style={{ width: '72.5%' }} >
          <Option value='jack'>Jack</Option>
        </Select>
        {item.p8}
      </div>

      <div className="row align-items-center">
        <div className="col-3">
          <div>
            <div className="mb-2 ">{item.l2_1}</div>
            <Input value={123390} className='grey-input' />
          </div>
        </div>
        <div className="col-3">
          <div>
            <div className="mb-2 ">{item.l2_2}</div>
            <Input value={23421} className='grey-input' />
          </div>
        </div>
        <div className="col-3">
          <div>
            <div className="mb-2 ">{item.l2_3}</div>
            <Input value={'22 فبراير 2022'} className='grey-input' />
          </div>
        </div>
        <div className="col-3">
          <div>
            {item.p9}
          </div>
        </div>
      </div>

    </div>

    </div>
  )
}
