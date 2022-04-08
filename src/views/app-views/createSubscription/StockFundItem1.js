import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'


export default function StockFundItem1() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'1. تعريفات عامة عن النشرة'}
        progress={10}
        info={'البند الأول'}
      />
      <NavigateItems item={1} />
    </div>
  )
}
