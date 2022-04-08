import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem19() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'19. شراء / استرداد الوثائق'}
        progress={10}
        info={'البند التاسع عشر'}
      />
      <NavigateItems item={19} />
    </div>
  )
}
