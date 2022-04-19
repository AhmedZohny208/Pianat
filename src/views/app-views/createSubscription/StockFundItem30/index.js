import React from 'react'
import { Input, Select } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item30'
import SignatureUpload from '../../../../components/shared-components/Buttons/SignatureUpload'

const { Option } = Select

export default function StockFundItem30() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'30. إقرار مراقبا الحسابات'}
        progress={10}
        info={'البند الثلاثون'}
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
              <Select placeholder={item.p8} className='w-100 m-0' >
                <Option value='jack'>Jack</Option>
              </Select>
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
        </div>

        <div className="p-in mb-5">
          <div className='content-w-input mb-3'>
            {item.p1}
            <Input className='grey-input w-35 mx-2' value={item.p2} />
            {item.p3}
            {item.p4}
          </div>

          <div className='row mb-2'>
            <div className="col-4">
              <label className='fw-600 mb-2'>{item.p5}</label>
              <Select placeholder={item.p8} className='w-100 m-0' >
                <Option value='jack'>Jack</Option>
              </Select>
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
        </div>

        <div className="p-in"></div>
      </div>

      <NavigateItems item={30} />
    </div>
  )
}
