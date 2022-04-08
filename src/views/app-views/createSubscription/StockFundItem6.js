import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem6() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'6. الجهات متلقية الاكتتاب والشراء والاسترداد'}
        progress={10}
        info={'البند السادس'}
      />
      <NavigateItems item={6} />
    </div>
  )
}
