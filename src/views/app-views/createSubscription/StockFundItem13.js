import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem13() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'13. مدير الاستثمار'}
        progress={30}
        info={'البند الثالث عشر'}
      />
      <NavigateItems item={13} />
    </div>
  )
}
