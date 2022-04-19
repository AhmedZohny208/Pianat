import React from 'react'
import { Input,DatePicker } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item31'
import SignatureUpload from '../../../../components/shared-components/Buttons/SignatureUpload'

export default function StockFundItem31() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'31. إقرار المستشار القانوني'}
        progress={10}
        info={'البند الاول و الثلاثون'}
      />

      <div className="content">
        <div className="p-in-first">
          <div className='content-w-input mb-3'>
            {item.p1}
            <Input className='grey-input w-35 mx-2' value={item.p2} />
            {item.p3}
            {item.p4}
          </div>

          <div className='row mb-2'>
            <div className="col-4">
              <label className='fw-600 mb-2'>{item.p5}</label>
              <Input className='grey-input' value={item.p8} />
            </div>
            <div className="col-4">
              <label className='fw-600 mb-2'>{item.p6}</label>
              <Input className='grey-input' value={item.p9} />
            </div>
            <div className="col-4">
              <label className='fw-600 mb-2'>{item.p7}</label>
              <Input className='grey-input' value={item.p10} />
            </div>
          </div>
          <SignatureUpload />

          <div className='content-w-input mt-4'>
            <p className='mb-2 p-0'>{item.p11}</p>
            <p className='p-0'>
              {item.p12}
              <DatePicker placeholder={'اختر التاريخ'} className='inline-input' style={{ width: '20%' }} />
              {item.p13}
            </p>
          </div>
        </div>
      </div>

      <NavigateItems item={31} />
    </div>
  )
}
