import { Input, Select } from 'antd'
import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item5'

const { Option } = Select

export default function StockFundItem5({openSidebar}) {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'5. مصادر أموال الصندوق والوثائق المصدرة منها'}
        progress={60}
        info={'البند الخامس'}
        openSidebar={openSidebar}
      />

      <div className="content-rows">
        <div className='d-flex'>
          <div className='title'>{item.t1}</div>
          <div className='desc'>
            <div className="row">
              <div className="col-7">
                <div className='mb-2'>
                  {item.p1_1}
                  <Input className='inline-input' placeholder={item.ph1} style={{ width: '186px' }} />
                </div>
                <div>
                  {item.p1_3}
                  <Input className='inline-input' placeholder={item.ph2} style={{ width: '299px' }} />
                </div>
              </div>
              <div className="col-5">
                <div className='mb-2 text-end'>
                  {item.p1_2}
                  <Input className='inline-input' placeholder={item.ph3} style={{ width: '186px' }} />
                </div>
                <div className='text-end'>
                  {item.p1_4}
                  <Select placeholder={item.ph4} style={{ width: '186px' }} >
                    <Option value='jack'>Jack</Option>
                  </Select>
                </div>
              </div>
            </div>

            <p className='mt-4 mb-0'>{item.p1_5}</p>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t2}</div>
          <div className='desc'>
            <p className='mb-2'>{item.p2_1}</p>
            {item.p2_2}
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t3}</div>
          <div className='desc'>{item.p3}</div>
        </div>
      </div>

      <NavigateItems item={5} />
    </div>
  )
}
