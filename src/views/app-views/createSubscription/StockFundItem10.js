import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem10() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'10. أصول وموجودات الصندوق'}
        progress={50}
        info={'البند العاشر'}
      />
      <NavigateItems item={10} />
    </div>
  )
}
