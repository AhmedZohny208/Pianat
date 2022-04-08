import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem18() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'18. الاكتتاب في الوثائق'}
        progress={50}
        info={'البند الثامن عشر'}
      />
      <NavigateItems item={18} />
    </div>
  )
}
