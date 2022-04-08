import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem5() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'5. مصادر أموال الصندوق والوثائق المصدرة منها'}
        progress={60}
        info={'البند الخامس'}
      />
      <NavigateItems item={5} />
    </div>
  )
}
