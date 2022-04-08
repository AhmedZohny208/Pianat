import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem24() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'24. أرباح الصندوق و عائد الوثيقة و توزيعات الأرباح'}
        progress={10}
        info={'البند الرابع و العشرون'}
      />
      <NavigateItems item={24} />
    </div>
  )
}
