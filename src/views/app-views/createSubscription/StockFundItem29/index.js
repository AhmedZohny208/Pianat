import { Input } from 'antd'
import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item29'
import Form from './Form'

export default function StockFundItem29({openSidebar}) {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'29. إقرار الشركة ومدير الاستثمار'}
        progress={10}
        info={'البند التاسع و العشرون'}
        openSidebar={openSidebar}
      />

      <div className="content">
        <div>
          <div className='bg-light p-in-first'>
            {item.p1}
            <Input className='grey-input w-35 mx-2' value={item.p2} />
            {item.p3}
          </div>

          <div className='p-in'>
            <div className='mb-2'>
              <Input className='grey-input w-35 me-2' value={item.p4} />
              {item.p5}
              <Input className='grey-input w-35 ms-2' value={item.p4} />
            </div>
            <p className='lh-29 mb-3 p-0'>{item.p6}</p>
            <p className='mb-3 p-0'>{item.p7}</p>
            <div className='mb-3'>
              {item.p8}
              <Input className='inline-input w-90' />
            </div>
            <p className='mb-2 p-0'>{item.p9}</p>
            <p className='mb-3 p-0'>{item.p10}</p>

            <Form />
          </div>
        </div>
      </div>

      <NavigateItems item={29} />
    </div>
  )
}
