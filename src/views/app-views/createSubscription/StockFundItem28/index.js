import React from 'react'
import { Input } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item28'
import AddName from '../../../../components/shared-components/Buttons/AddName'

export default function StockFundItem28() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'28. أسماء و عناوين مسؤولي الاتصال'}
        progress={10}
        info={'البند الثامن و العشرون'}
      />

      <div className="content">
        <div className="p-in-first">

          <p className='p-0 mb-3'>{item.h1}</p>
          <div className="staff-form mb-5">
            <div className="row">
              <div className="col-4">
                <div className='input'>
                  <div className="label">{item.l1_1}</div>
                  <Input className="text-input"/>
                </div>
              </div>
              <div className="col-4">
                <div className='input'>
                  <div className="label">{item.l1_2}</div>
                  <Input className="text-input"/>
                </div>
              </div>
              <div className="col-4">
                <div className='input'>
                  <div className="label">{item.l1_3}</div>
                  <Input className="text-input"/>
                </div>
              </div>
            </div>

            <AddName content={'اضافة اسم جديد'} />
          </div>

          <p className='p-0 mb-3'>{item.h2}</p>
          <div className="staff-form mb-5">
            <div className="row">
              <div className="col-6">
                <div className='input'>
                  <div className="label">{item.l2_1}</div>
                  <Input className="text-input"/>
                </div>
              </div>
              <div className="col-6">
                <div className='input'>
                  <div className="label">{item.l2_2}</div>
                  <Input className="text-input"/>
                </div>
              </div>
              <div className="col-6">
                <div className='input'>
                  <div className="label">{item.l2_3}</div>
                  <Input className="text-input"/>
                </div>
              </div>
              <div className="col-6">
                <div className='input'>
                  <div className="label">{item.l2_4}</div>
                  <Input className="text-input"/>
                </div>
              </div>
            </div>

            <AddName content={'اضافة جهة جديد'} />
          </div>

        </div>
      </div>

      <NavigateItems item={28} />
    </div>
  )
}
