import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem16() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'16. أمين الحفظ'}
        progress={10}
        info={'البند السادس عشر'}
      />
      <NavigateItems item={16} />
    </div>
  )
}
