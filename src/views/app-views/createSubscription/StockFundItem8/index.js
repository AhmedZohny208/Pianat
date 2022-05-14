import React from 'react'
import { Select } from 'antd'
import item from '../../../../configs/stockFundItems/Item8'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import Risks from './Risks'

const { Option } = Select

export default function StockFundItem8({openSidebar}) {
  return (
    <div className='stock-fund-item'>
      <Header 
        title={'8. المخاطر ( استرشادية )'} 
        progress={10} 
        info={'البند الثامن'} 
        openSidebar={openSidebar}
      />

      <div className="content">
        <div className="p-in-first">
          <p className='p-0 mb-4 lh-lg'>{item.p1}</p>

          <p className='p-0 mb-0'>{item.p2}</p>
          <p className='p-0 mb-36'>{item.p3}</p>

          <h6 className='text-darkblue fw-600 mb-2'>{item.p4}</h6>
          <Risks />

        </div>
      </div>

      <NavigateItems item={8} />
    </div>
  )
}
