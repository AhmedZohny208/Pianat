import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem22() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'22. القوائم المالية والتقييم'}
        progress={50}
        info={'البند التاني و العشرون'}
      />
      <NavigateItems item={22} />
    </div>
  )
}
