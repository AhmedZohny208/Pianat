import React from 'react'
import { Input } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item32'
import SignatureUpload from '../../../../components/shared-components/Buttons/SignatureUpload'

export default function StockFundItem32({openSidebar}) {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'32. إقرار شركة خدمات الادارة'}
        progress={10}
        info={'البند الثاني والثلاثون'}
        openSidebar={openSidebar}
      />

      <div className="content">
        <div className="p-in-first">
          <div className="content-w-input mb-12">
            {item.p1}
            <Input className='grey-input w-35 mx-2' value={item.p2} />
            {item.p3}{' '}
            {item.p4}
          </div>

          <p className='p-0 mb-3'>{item.p5}</p>

          <div className='row mb-2'>
            <div className="col-4">
              <label className='fw-600 mb-2'>{item.l1}</label>
              <Input className='grey-input' value={item.v1} />
            </div>
            <div className="col-4">
              <label className='fw-600 mb-2'>{item.l2}</label>
              <Input className='grey-input' value={item.v2} />
            </div>
            <div className="col-4">
              <label className='fw-600 mb-2'>{item.l3}</label>
              <Input className='grey-input' value={item.v3} />
            </div>
          </div>
          <div className='mb-5'>
            <SignatureUpload />
          </div>
        </div>
      </div>

      <NavigateItems item={32} />
    </div>
  )
}
