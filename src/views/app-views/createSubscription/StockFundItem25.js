import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem25() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'25. لافصاح الدوري عن المعلومات'}
        progress={10}
        info={'البند الخامس و العشرون'}
      />
      <NavigateItems item={25} />
    </div>
  )
}
