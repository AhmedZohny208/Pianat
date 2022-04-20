import { Input } from 'antd'
import React from 'react'
import AddName from '../../../../components/shared-components/Buttons/AddName'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item6'

export default function StockFundItem6() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'6. الجهات متلقية الاكتتاب والشراء والاسترداد'}
        progress={10}
        info={'البند السادس'}
      />

      <div className="content">
        <div className='p-in-first'>
          <div className='mb-5'>
            <p className='fs-6 fw-600 mb-3 p-0'>{item.p1_1}</p>

            <div className="staff-form">
              <div className="row">
                <div className="col-6">
                  <div className='input'>
                    <div className="label">{item.p1_2}</div>
                    <Input placeholder={item.ph1} className="text-input"/>
                  </div>
                </div>
                <div className="col-6">
                  <div className='input'>
                    <div className="label">{item.p1_3}</div>
                    <Input placeholder={item.ph2} className="text-input"/>
                  </div>
                </div>
              </div>

              <AddName content={'اضافة جهة جديد'} />
            </div>
          </div>

          <div className='mb-4'>
            <p className='fs-6 fw-600 mb-3 p-0'>{item.p1_1}</p>

            <div className="staff-form">
              <div className="row">
                <div className="col-6">
                  <div className='input'>
                    <div className="label">{item.p1_2}</div>
                    <Input placeholder={item.ph1} className="text-input"/>
                  </div>
                </div>
                <div className="col-6">
                  <div className='input'>
                    <div className="label">{item.p1_3}</div>
                    <Input placeholder={item.ph2} className="text-input"/>
                  </div>
                </div>
              </div>

              <AddName content={'اضافة جهة جديد'} />
            </div>
          </div>

          <div className="content-w-input">
            <p className='fs-6 fw-500 mb-2 p-0'>{item.p1_5}</p>
            <p className='mb-2 p-0'>
              {item.p1_6}
              <Input className='inline-input' style={{ width: '188px' }} placeholder={item.ph1} />
              {item.p1_7}
              <Input className='inline-input' style={{ width: '188px' }} placeholder={item.ph1} />
              {item.p1_8}
            </p>
            <p className='mb-2 p-0'>{item.p1_9}</p>
            <p className='mb-2 p-0'>{item.p1_10}</p>
            <p className='mb-2 p-0'>{item.p1_11}</p>
          </div>
        </div>

      </div>

      <NavigateItems item={6} />
    </div>
  )
}
