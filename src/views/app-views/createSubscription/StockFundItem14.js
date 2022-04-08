import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem14() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'14. أصول وموجودات الصندوق'}
        progress={40}
        info={'البند الرابع عشر'}
      />
      <NavigateItems item={14} />
    </div>
  )
}
