import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem8() {
  return (
    <div className='stock-fund-item'>
      <Header title={'8. المخاطر'} progress={10} info={'البند الثامن'} />
      <NavigateItems item={8} />
    </div>
  )
}
