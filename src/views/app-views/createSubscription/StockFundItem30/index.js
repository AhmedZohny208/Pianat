import React from 'react'
import { Input, Select } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item30'
import SignatureUpload from '../../../../components/shared-components/Buttons/SignatureUpload'
import Form1 from './Form1'
import Form2 from './Form2'

const { Option } = Select

export default function StockFundItem30({ openSidebar }) {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'30. إقرار مراقبا الحسابات'}
        progress={10}
        info={'البند الثلاثون'}
        openSidebar={openSidebar}
      />

      <div className='content'>
        <div className='p-in-first'>
          <div className='content-w-input mb-3'>
            {item.p1}
            <Input className='grey-input w-35 mx-2' value={item.p2} />
            {item.p3}
            {item.p4}
          </div>

          <Form1 />
        </div>

        <div className='p-in mb-5'>
          <div className='content-w-input mb-3'>
            {item.p1}
            <Input className='grey-input w-35 mx-2' value={item.p2} />
            {item.p3}
            {item.p4}
          </div>

          <Form2 />
        </div>

        <div className='p-in'></div>
      </div>

      <NavigateItems item={30} />
    </div>
  )
}
