import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item, { unorderedList } from '../../../../configs/stockFundItems/Item14'
import Form1 from './Form_1'
import Form2 from './Form_2'

export default function index({openSidebar}) {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'14. أصول وموجودات الصندوق'}
        progress={40}
        info={'البند الرابع عشر'}
        openSidebar={openSidebar}
      />

      <div className="content">
        <div className="p-in-first">
          <Form1 />
          <Form2 />

          <div>
            <p className='p-0 fs-6 fw-500 mb-3'>{item.p15}</p>
            <div style={{ color: '#5E7DB2' }}>
              {unorderedList.map(ele => (
                <p className='p-0 mb-12'>{ele}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <NavigateItems item={14} />
    </div>
  )
}
