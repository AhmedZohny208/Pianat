import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem15() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'15. مراقبا حسابات الصندوق'}
        progress={10}
        info={'البند الخامس عشر'}
      />
      <NavigateItems item={15} />
    </div>
  )
}
