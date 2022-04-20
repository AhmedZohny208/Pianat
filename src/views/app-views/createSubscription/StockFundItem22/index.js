import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item22'

export default function StockFundItem22() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'22. القوائم المالية والتقييم'}
        progress={50}
        info={'البند التاني و العشرون'}
      />

      <div className='content'>
        <div className="p-in-first">
          <p style={{ lineHeight: '36px' }}>
            {item.p1} <br />
            {item.p2} <br />
            {item.p3} <br />
            {item.p4} <br />
            {item.p5} <br />
          </p>
        </div>
      </div>

      <NavigateItems item={22} />
    </div>
  )
}
