import React from 'react'
import { Select } from 'antd'
import SignatureUpload from '../../../../components/shared-components/Buttons/SignatureUpload'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item34'

const { Option } = Select

export default function StockFundItem34({openSidebar}) {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'34. إقرار لجنة الرقابة الشرعية'}
        progress={10}
        info={'البند الرابع والثلاثون'}
        openSidebar={openSidebar}
      />

      <div className="content">
        <div className="p-in-first">
          <p className='py-4 mb-0'>{item.p1}</p>

          <div className="row mb-5">
            <div className="col-5 mb-4">
              <label className='fw-600 mb-2'>{item.p2}</label>
              <Select placeholder={item.p3} className='w-100 m-0' >
                <Option value='jack'>Jack</Option>
              </Select>
            </div>
            <div className="col-6 mb-4">
              <SignatureUpload />
            </div>
            <div className="col-5 mb-4">
              <label className='fw-600 mb-2'>{item.p2}</label>
              <Select placeholder={item.p3} className='w-100 m-0' >
                <Option value='jack'>Jack</Option>
              </Select>
            </div>
            <div className="col-6 mb-4">
              <SignatureUpload />
            </div>
            <div className="col-5 mb-4">
              <label className='fw-600 mb-2'>{item.p2}</label>
              <Select placeholder={item.p3} className='w-100 m-0' >
                <Option value='jack'>Jack</Option>
              </Select>
            </div>
            <div className="col-6 mb-4">
              <SignatureUpload />
            </div>
          </div>
        </div>
      </div>

      <NavigateItems item={34} />
    </div>
  )
}
