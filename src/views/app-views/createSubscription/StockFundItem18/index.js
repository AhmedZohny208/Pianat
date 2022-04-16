import React from 'react'
import { Input,DatePicker, Select } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item18'

const { Option } = Select

export default function StockFundItem18() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'18. الاكتتاب في الوثائق'}
        progress={50}
        info={'البند الثامن عشر'}
      />

      <div className="content-rows">
        <div className='d-flex'>
          <div className='title'>{item.t1}</div>
          <div className='desc'>
            <Input className='inline-input m-0' placeholder='اكتب هنا' />
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t2}</div>
          <div className='desc'>
            <div className="content-w-input">
              <p className='mb-2'>
                {item.p2_1}
                <DatePicker placeholder={item.ph1} className='inline-input' style={{ width: '188px' }} />
                {item.p2_2}
                <DatePicker placeholder={item.ph1} className='inline-input' style={{ width: '188px' }} />
              </p>
              <p className='mb-2'>{item.p2_3}</p>
              <p className='mb-2'>{item.p2_4}</p>
              <p className='mb-2'>{item.p2_5}</p>
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t3}</div>
          <div className='desc p-in-first'>
            <p className='mb-2'>{item.p3}</p>
            <Select className='mx-0 mb-60 w-100' placeholder={item.ph2} >
              <Option value='jack'>Jack</Option>
            </Select>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t4}</div>
          <div className='desc'>
            {item.p4_1}
            <Input className='inline-input' style={{ width: '30%' }} />
            {item.p4_2}{' '}
            <span className='ms-3'>{item.p4_3}</span>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t5}</div>
          <div className='desc'>
            <div className="row">
              <div className="col-5">
                {item.p5_1}
                <Input className='inline-input' style={{ width: '68%' }} />
                {item.p5_2}
              </div>
              <div className="col-5">
                {item.p5_3}
                <Input className='inline-input' style={{ width: '68%' }} />
                {item.p5_4}
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t6}</div>
          <div className='desc'>{item.p6}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t7}</div>
          <div className='desc'>
            <p className='mb-0 lh-lg'>{item.p7}</p>
            {item.unordered1.map(ele => (
              <p className='mb-0 lh-lg'>{ele}</p>
            ))}
          </div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t8}</div>
          <div className='desc'>
            {item.unordered2.map(ele => (
              <p className='mb-0 lh-lg'>{ele}</p>
            ))}
          </div>
        </div>
      </div>

      <NavigateItems item={18} />
    </div>
  )
}
