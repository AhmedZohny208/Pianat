import React from 'react'
import { Input,DatePicker, Select, Radio, Space } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item19'
import GreenHint from '../../../../components/shared-components/Hints/GreenHint'

const { Option } = Select

export default function StockFundItem19({openSidebar}) {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'19. شراء / استرداد الوثائق'}
        progress={10}
        info={'البند التاسع عشر'}
        openSidebar={openSidebar}
      />

      <div className="content-rows">
        <div className='d-flex'>
          <div className='title'>{item.t1}</div>
          <div className='desc'>
            <div className="row">
              <div className="col-6">
                {item.p1_1}
                <Select className='w-60' value={'اسبوعى'} >
                  <Option value='jack'>Jack</Option>
                </Select>
              </div>
              <div className="col-6">
                <div className='mb-2'>
                  {item.p1_2}
                  <Input value={1} className='inline-input' style={{ width: '70px' }} />
                  {item.p1_3}
                </div>
                <div className="d-flex mb-2">
                  <div>
                    {item.p1_4}
                    <DatePicker style={{ width: '128px' }} placeholder={item.ph2} className='inline-input' />
                  </div>
                  <div>
                    <Select style={{ width: '124px' }} value={'الى مالا نهاية'} >
                      <Option value='jack'>Jack</Option>
                    </Select>
                  </div>
                </div>
                <div className='mb-2'>{item.p1_5}</div>
                <div>
                  {item.days.map((ele, i) => (
                    <button className={`btn day ${i === 0 && 'active'}`}>{ele}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className='mb-4'>
              <p>{item.l1}</p>
              <Radio.Group className='black'>
                <Space direction="vertical">
                  <Radio value={1}>{item.l2}</Radio>
                  <Radio value={2}>{item.l3}</Radio>
                </Space>
              </Radio.Group>
            </div>

            <div>
              <div className="row">
                <div className="col-4">
                  <div className='mb-3'>
                    <div className='mb-2'>{item.l1}</div>
                    <Input className='inline-input m-0' />
                  </div>
                  <div className='mb-3'>
                    <div className='mb-2'>{item.l3}</div>
                    <Input className='inline-input m-0' />
                  </div>
                </div>
                <div className="col-4 offset-2">
                  <div className='mb-3'>
                    <div className='mb-2'>{item.l1}</div>
                    <Input className='inline-input m-0' />
                    <GreenHint content={item.hint} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t2}</div>
          <div className='desc'>
            <p className='mb-1 lh-lg'>
              {item.p2_1}
              {item.p2_2}
            </p>
            <p className='mb-1 lh-lg'>
              {item.p2_3}
              {item.p2_4}
            </p>
            <p className='mb-1 lh-lg'>{item.p2_5}</p>
            <p className='mb-1 lh-lg'>{item.p2_6}</p>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t3}</div>
          <div className='desc p-in-first'>
            <div className="row mb-3">
              <div className="col-7">
                {item.p3_1}
                <Select className='w-65' value={'السبت'} >
                  <Option value='jack'>Jack</Option>
                </Select>
              </div>
              <div className="col-5">
                {item.p3_2}
                <Select className='w-80' placeholder={item.ph1} >
                  <Option value='jack'>Jack</Option>
                </Select>
              </div>
            </div>

            <p className='mb-3'>
              {item.p3_3}
              <DatePicker placeholder={item.ph2} className='inline-input' style={{ width: '188px' }} />
              {item.p3_4}
            </p>
            <p className='mb-0 lh-lg'>{item.p3_5}</p>
            <p className='mb-0 lh-lg'>{item.p3_6}</p>
            <p className='mb-0 lh-lg'>{item.p3_7}</p>
          </div>
        </div>
      </div>

      <NavigateItems item={19} />
    </div>
  )
}