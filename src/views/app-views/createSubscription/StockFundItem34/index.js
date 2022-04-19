import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem34() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'34. إقرار لجنة الرقابة الشرعية'}
        progress={10}
        info={'البند الرابع والثلاثون'}
      />
      <NavigateItems item={34} />
    </div>
  )
}
