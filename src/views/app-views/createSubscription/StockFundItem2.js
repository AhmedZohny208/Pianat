import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'


export default function StockFundItem2() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'2. مقدمة وأحكام عامة'}
        progress={40}
        info={'البند التاني'}
      />
      <NavigateItems item={2} />
    </div>
  )
}
