import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem9() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'9. نوعية المستثمر المخاطب بنشرة الاكتتاب'}
        progress={10}
        info={'البند التاسع'}
      />
      <NavigateItems item={9} />
    </div>
  )
}
