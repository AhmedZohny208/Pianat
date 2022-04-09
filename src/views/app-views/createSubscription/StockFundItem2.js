import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'
import { item2 } from '../../../configs/Items'

export default function StockFundItem2() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'2. مقدمة وأحكام عامة'}
        progress={40}
        info={'البند التاني'}
      />

      <div className='content'>
        <div>{item2.p1}</div>
        <div>{item2.p2}</div>
        <div>{item2.p3}</div>
        <div>{item2.p4}</div>
        <div>{item2.p5}</div>
        <div>{item2.p6}</div>
        <div>{item2.p7}</div>
        <div>{item2.p8}</div>
        <div>{item2.p9}</div>
      </div>

      <NavigateItems item={2} />
    </div>
  )
}
