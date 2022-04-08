import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem17() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'17. جماعة حملة الوثائق'}
        progress={10}
        info={'البند السابع عشر'}
      />
      <NavigateItems item={17} />
    </div>
  )
}
