import React from 'react'
import { Select } from 'antd'
import item from '../../../../configs/stockFundItems/Item8'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'

const { Option } = Select

export default function StockFundItem8() {
  return (
    <div className='stock-fund-item'>
      <Header title={'8. المخاطر ( استرشادية )'} progress={10} info={'البند الثامن'} />

      <div className="content">
        <div className="p-in-first" style={{ height: '1200px' }}>
          <p className='p-0 mb-4 lh-lg'>{item.p1}</p>

          <p className='p-0 mb-0'>{item.p2}</p>
          <p className='p-0 mb-36'>{item.p3}</p>

          <h6 className='text-darkblue fw-600 mb-2'>{item.p4}</h6>
          <Select className='mx-0 w-100' value={item.p4} >
            <Option value='jack'>Jack</Option>
          </Select>

        </div>
      </div>

      <NavigateItems item={8} />
    </div>
  )
}
