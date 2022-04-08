import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem31() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'31. إقرار المستشار القانوني'}
        progress={10}
        info={'البند الثلاثون'}
      />
      <NavigateItems item={31} />
    </div>
  )
}
