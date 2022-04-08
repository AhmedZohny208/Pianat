import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem1() {
  return (
    <div className='stock-fund-item'>
      <Header 
        title={'11.  شركة الصندوق'} 
        progress={10} 
        info={'البند الحادي عشر'} 
      />
      <NavigateItems item={11} />
    </div>
  )
}
