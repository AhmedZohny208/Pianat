import React from 'react'
import { Input } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item26'

const { TextArea } = Input

export default function StockFundItem26({openSidebar}) {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'26. إنهاء وتصفية الصندوق'}
        progress={10}
        info={'البند السادس و العشرون'}
        openSidebar={openSidebar}
      />

      <div className="content-rows">
        <div className="d-flex align-items-start">
          <div className="title">{item.t1}</div>
          <div className="desc">
            <div className='mb-3'>
              {item.p1.map(ele => (
                <p className='lh-lg mb-1'>{ele}</p>
              ))}
            </div>

            <div>
              <div className="label mb-2">{item.p2}</div>
              <TextArea
                className='w-100'
                placeholder={item.ph}
              />
            </div>
          </div>
        </div>
      </div>

      <NavigateItems item={26} />
    </div>
  )
}
