import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../configs/stockFundItems/Item20'

export default function StockFundItem20() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={' 20. تخفيض حجم الصندوق'}
        progress={10}
        info={'البند العشرون'}
      />

      <div className="content">
        <div className="p-in-first">
          <p>{item.p1}</p>
          <p>{item.p2}</p>
          <p>{item.p3}</p>
          <p>{item.p4}</p>
          <p>{item.p5}</p>
        </div>
      </div>

      <NavigateItems item={20} />
    </div>
  )
}
