import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem21() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'21. احتساب قيمة الوثيقة'}
        progress={10}
        info={'البند الاول و العشرون'}
      />
      <NavigateItems item={21} />
    </div>
  )
}
