import React from 'react'
import { Input, DatePicker } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item25'

export default function StockFundItem25() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'25. لافصاح الدوري عن المعلومات'}
        progress={10}
        info={'البند الخامس و العشرون'}
      />

      <div className="content">
        <div className="p-in-first">
          <p className='p-0 mb-2'>{item.p1_1}</p>
          <p className='p-0 mb-2'>{item.p1_2}</p>
          {item.p1_3.map(ele => (
            <p className='p-0 mb-1'>{ele}</p>
          ))}
        </div>

        <div className="p-in">
          <p className='p-0 mb-2 fw-600'>{item.p2_1}</p>
          <ul>
            <li className='mb-12 lh-lg'>{item.p2_2}</li>
            <li className='mb-12'>
              {item.p2_3}
              <ul className='list-unstyled text-lightblue mt-1 ms-0'>
                {item.p2_6.map(ele => (
                  <li className='p-0 mb-1'>{ele}</li>
                ))}
              </ul>
            </li>
            <li className='mb-12'>{item.p2_4}</li>
            <li className='mb-12'>{item.p2_5}</li>
          </ul>
        </div>

        <div className="p-in-first">
          <p className='p-0 mb-2 fw-600'>{item.p3_1}</p>
          <ul>
            {item.p3_2.map(ele => (
              <li className='mb-12 lh-lg'>{ele}</li>
            ))}
          </ul>
        </div>

        <div className='p-in'>
          <p className='p-0 mb-12 fw-600'>{item.p4_1}</p>
          <ul>
            <li>
              {item.p4_2}
            </li>
          </ul>

          <div className="row align-items-center ms-2 mb-4">
            <div className="col-1 pe-0" style={{ fontSize: '13.5px' }}>
              {item.l1}
            </div>
            <div className="col-4">
              <Input placeholder={item.ph1} className='inline-input' />
            </div>
            <div className="col-6">
              {item.l2}
              <Input placeholder={item.ph2} className='inline-input w-65' />
            </div>
          </div>

          <div className='row align-items-center ms-2'>
            <div className="col-1 pe-0">
              {item.l3}
            </div>
            <div className="col-4">
              <DatePicker placeholder={item.ph3} className='inline-input w-100' />
            </div>
            <div className="col-7">{item.p4_3}</div>
          </div>
        </div>

        <div className="p-in-first">
          <p className='p-0 mb-2 fw-600'>{item.p5_1}</p>
          <ul>
            {item.p5_2.map(ele => (
              <li className='mb-12 lh-lg'>{ele}</li>
            ))}
          </ul>
        </div>

        <div className="p-in">
          <p className='p-0 mb-2 fw-600'>{item.p6_1}</p>
          <ul>
            <li className='mb-12'>{item.p6_2}</li>

            {item.p6_3.map(ele => (
              <p className='p-0 mb-2 lh-lg'>{ele}</p>
            ))}
          </ul>
        </div>
      </div>

      <NavigateItems item={25} />
    </div>
  )
}
