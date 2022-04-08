import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem7() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'7. السياسة الاستثمارية للصندوق'}
        progress={20}
        info={'البند السابع'}
      />
      <NavigateItems item={7} />
    </div>
  )
}
