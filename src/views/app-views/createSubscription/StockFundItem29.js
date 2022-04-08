import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem29() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'29. إقرار الشركة ومدير الاستثمار'}
        progress={10}
        info={'البند التاسع و العشرون'}
      />
      <NavigateItems item={29} />
    </div>
  )
}
