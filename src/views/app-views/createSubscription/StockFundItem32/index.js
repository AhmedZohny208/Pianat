import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem32() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'32. إقرار شركة خدمات الادارة'}
        progress={10}
        info={'البند الثاني والثلاثون'}
      />
      <NavigateItems item={32} />
    </div>
  )
}
