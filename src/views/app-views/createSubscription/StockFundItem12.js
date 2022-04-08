import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem12() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'12. قنوات تسويق وثائق الاستثمار التى يصدرها الصندوق'}
        progress={14}
        info={'البند التاني عشر'}
      />
      <NavigateItems item={12} />
    </div>
  )
}
