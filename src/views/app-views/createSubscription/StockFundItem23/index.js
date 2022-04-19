import { Input } from 'antd'
import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/item23'

export default function StockFundItem23() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'23. وسائل تجنب تعارض المصالح'}
        progress={50}
        info={'البند الثالث و العشرون'}
      />

      <div className="content">
        <div className="p-in-first">
          <p className='p-0 mb-12'>{item.p1}</p>
          <p className='p-0 mb-12'>{item.p2}</p>
          <p className='content-w-input p-0 mb-2'>
            {item.p3}{' '}
            {item.p4}
            <Input placeholder={item.ph} className='inline-input w-20' />
            {item.p5}
          </p>

          <p className='mb-2 p-0 fw-600'>{item.p6}</p>
          <ul>
            {item.p7.map(ele => (
              <li>{ele}</li>
            ))}
          </ul>
        </div>
      </div>

      <NavigateItems item={23} />
    </div>
  )
}
