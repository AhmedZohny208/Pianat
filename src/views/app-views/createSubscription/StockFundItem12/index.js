import { Input } from 'antd'
import React from 'react'
import AddName from '../../../../components/shared-components/Buttons/AddName'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item12'

export default function StockFundItem12() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'12. قنوات تسويق وثائق الاستثمار التى يصدرها الصندوق'}
        progress={14}
        info={'البند التاني عشر'}
      />

      <div className="content">
        <div className="p-in-first">
          <p className='p-0 mb-4'>{item.p1}</p>

          <div className='ordered-input-list'>
            <Input className='inline-input m-0' />
            <div className="order">1.</div>
          </div>
          <AddName content={'اضافة جهة جديدة'} />

          <p className='p-0 lh-lg mt-3'>{item.p2}</p>
        </div>
      </div>

      <NavigateItems item={12} />
    </div>
  )
}
