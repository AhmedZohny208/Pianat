import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem28() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'28. أسماء و عناوين مسؤولي الاتصال'}
        progress={10}
        info={'البند الثامن و العشرون'}
      />
      <NavigateItems item={28} />
    </div>
  )
}
