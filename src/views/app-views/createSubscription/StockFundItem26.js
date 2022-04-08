import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'

export default function StockFundItem26() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'26. إنهاء وتصفية الصندوق'}
        progress={10}
        info={'البند السادس و العشرون'}
      />
      <NavigateItems item={26} />
    </div>
  )
}
