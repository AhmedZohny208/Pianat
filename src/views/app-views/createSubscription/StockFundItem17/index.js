import React from 'react'
import { Input } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item17'

export default function StockFundItem17() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'17. جماعة حملة الوثائق'}
        progress={10}
        info={'البند السابع عشر'}
      />

      <div className="content-rows">
        <div className='d-flex'>
          <div className='title'>{item.t1}</div>
          <div className='desc lh-lg'>
            {item.p1_1} <br />
            {item.p1_2}
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t2}</div>
          <div className='desc'>
            {item.ordered.map(ele => (
              <p className='mb-2'>{ele}</p>
            ))}

            <div className="content-w-input">
              {item.p2_1}
              <Input className='inline-input' placeholder={item.ph1} style={{ width: '188px' }} />
              {item.p2_2}
              <p>{item.p2_3}</p>
            </div>
          </div>
        </div>
      </div>

      <NavigateItems item={17} />
    </div>
  )
}
