import React, { useState } from 'react'
import { Select } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item24'
import ListedInput from '../../../../components/shared-components/Form/ListedInput'

const { Option } = Select

export default function StockFundItem24({openSidebar}) {
  const [purpose, setPurpose] = useState('')
  const [items, setItems] = useState([])
  return (
    <div className='stock-fund-item'>
      <Header
        title={'24. أرباح الصندوق و عائد الوثيقة و توزيعات الأرباح'}
        progress={10}
        info={'البند الرابع و العشرون'}
        openSidebar={openSidebar}
      />

      <div className="content-rows">
        <div className="d-flex align-items-start">
          <div className="title">{item.t1}</div>
          <div className="desc">
            <p className='p-0 lh-lg mb-2'>{item.p1_1}</p>
            <p className='p-0 mb-0 lh-lg'>{item.p1_2}</p>
            <p className='p-0 mb-0 lh-lg'>{item.p1_3}</p>
            {item.p1_4.map(ele => (
              <p className='p-0 mb-1 lh-lg'>{ele}</p>
            ))}
          </div>
        </div>
        <div className="d-flex align-items-start">
          <div className="title">{item.t2}</div>
          <div className="desc">
            {item.p2.map(ele => (
              <p className='p-0 mb-1 lh-lg'>{ele}</p>
            ))}
          </div>
        </div>
        <div className="d-flex align-items-start">
          <div className="title mt-2">{item.t3}</div>
          <div className="desc p-in-first">
            <div className="row align-items-center mb-5">
              <div className="col-2">
                {item.p3_1}
              </div>
              <div className="col-10">
                <Select placeholder={item.ph1} className='w-100 m-0'>
                  <Option value='jack'>Jack</Option>
                </Select>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-2">
                {item.p3_2}
              </div>
              <div className="col-10">
                <ListedInput
                  placeholder={item.ph2}
                  ph2={'اضغط enter للادخال'}
                  value={purpose}
                  setValue={setPurpose}
                  items={items}
                  setItems={setItems}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavigateItems item={24} />
    </div>
  )
}
