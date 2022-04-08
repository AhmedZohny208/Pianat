import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem27() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'27. الأعباء المالية'}
        progress={10}
        info={'البند السابع و العشرون'}
      />
      <NavigateItems item={27} />
    </div>
  )
}
