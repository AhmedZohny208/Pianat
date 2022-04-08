import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem20() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={' 20. تخفيض حجم الصندوق'}
        progress={10}
        info={'البند العشرون'}
      />
      <NavigateItems item={20} />
    </div>
  )
}
