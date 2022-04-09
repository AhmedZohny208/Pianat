import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'
import { item1 } from '../../../configs/Items'

export default function StockFundItem1() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'1. تعريفات عامة عن النشرة'}
        progress={10}
        info={'البند الأول'}
      />

      <div className="content-rows">
        <div className='d-flex'>
          <div className='title'>{item1.t1}</div>
          <div className='desc'>{item1.p1}</div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item1.t2}</div>
          <div className='desc'>{item1.p2}</div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item1.t3}</div>
          <div className='desc'>{item1.p3}</div>
        </div>
      </div>

      <NavigateItems item={1} />
    </div>
  )
}
