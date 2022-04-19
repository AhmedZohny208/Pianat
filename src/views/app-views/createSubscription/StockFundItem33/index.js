import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem33() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'33. إقرار أمين الحفظ'}
        progress={10}
        info={'البند الثالث والثلاثون'}
      />
      <NavigateItems item={33} />
    </div>
  )
}
