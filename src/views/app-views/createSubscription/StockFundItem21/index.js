import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item21'

export default function StockFundItem21() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'21. احتساب قيمة الوثيقة'}
        progress={10}
        info={'البند الاول و العشرون'}
      />

      <div className="content">
        <div className="p-in-first">
          <p className='p-0 mb-2 lh-lg'>{item.p1_1}</p>
          <p className='p-0 mb-2 lh-lg'>{item.p1_2}</p>
        </div>

        <div className="p-in">
          <p className='p-0 mb-2 fw-600'>{item.p2_1}</p>
          {item.p2_2.map(ele => (
            <p className='p-0 mb-3 lh-lg'>{ele}</p>
          ))}
        </div>

        <div className="p-in-first">
          <p className='p-0 mb-2 fw-600'>{item.p3_1}</p>
          {item.p3_2.map(ele => (
            <p className='p-0 mb-3 lh-lg'>{ele}</p>
          ))}
        </div>

        <div className="p-in-first">
          <p className='p-0 mb-2 fw-600'>{item.p4_1}</p>
          <p className='p-0 mb-3 lh-lg'>{item.p4_2}</p>
        </div>
        <div className='p-in'></div>
      </div>

      <NavigateItems item={21} />
    </div>
  )
}
