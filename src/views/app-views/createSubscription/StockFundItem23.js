import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem23() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'23. وسائل تجنب تعارض المصالح'}
        progress={50}
        info={'البند الثالث و العشرون'}
      />
      <NavigateItems item={23} />
    </div>
  )
}
