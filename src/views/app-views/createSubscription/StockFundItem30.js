import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem30() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'30. إقرار مراقبا الحسابات'}
        progress={10}
        info={'البند الثلاثون'}
      />
      <NavigateItems item={30} />
    </div>
  )
}
