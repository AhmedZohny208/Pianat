import React from 'react'
import { Input } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item7'
import Card from './Card'
import data from './data'
import CardsDisplay from './CardsDisplay'

export default function StockFundItem7({ openSidebar }) {
  return (
    <div className='stock-fund-item item-7'>
      <Header
        title={'7. السياسة الاستثمارية للصندوق'}
        progress={20}
        info={'البند السابع'}
        openSidebar={openSidebar}
      />
      <div className='content'>
        <div className='content-w-input p-in-first'>
          <div className='d-flex align-items-center p-0'>
            <div style={{ width: '21%' }} className='p-0'>
              {item.p1}
            </div>
            <Input
              style={{ width: '65%' }}
              className='inline-input'
              placeholder={item.ph1}
            />
          </div>

          <p>
            {item.p2}
            <Input
              className='inline-input'
              style={{ width: '215px' }}
              placeholder={item.ph1}
            />
          </p>
          <p className='p-0 mb-3'>{item.p3}</p>
          <p className='p-0 mb-3'>{item.p4}</p>

          <p className='p-0 mb-2 fs-6 fw-500'>{item.p5}</p>
          <div className='p-0 text-red'>
            <p className='p-0 mb-1'>{item.p6}</p>
            <p className='p-0 mb-1'>{item.p7}</p>
            <p className='p-0 mb-1'>{item.p8}</p>
            <p className='p-0'>{item.p9}</p>
          </div>

          {data && <CardsDisplay data={data} item={item} />}

          <Card />

          <p className='p-0 mb-2 fs-6 fw-500'>{item.p10}</p>
          <div className='p-0 text-red'>
            <p className='p-0 mb-1'>{item.p11}</p>
            <p className='p-0 mb-1'>{item.p12}</p>
            <p className='p-0 mb-1'>{item.p13}</p>
          </div>
        </div>
      </div>

      <NavigateItems item={7} />
    </div>
  )
}
