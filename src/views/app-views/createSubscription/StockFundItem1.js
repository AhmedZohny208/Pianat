import { Input, Select } from 'antd'
import React from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../configs/stockFundItems/Item1'
import { ReactComponent as Close } from '../../../components/shared-components/svgs/close.svg'

const { Option } = Select

export default function StockFundItem1() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'1. تعريفات عامة عن النشرة'}
        progress={10}
        info={'البند الأول'}
      />

      <div className="content-rows">
        <div className='d-flex'>
          <div className='title'>{item.t1}</div>
          <div className='desc'>{item.p1}</div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t2}</div>
          <div className='desc'>
            <div className='content-w-input'>
              {item.p2_1}
              <Input className='inline-input' placeholder={item.ph1} style={{ width: '188px' }} />
              {item.p2_2}{' '}
              {item.p2_3}
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t3}</div>
          <div className='desc'>
            <div className='content-w-input'>
              {item.p3_1}
              <Input className='inline-input' placeholder={item.ph1} style={{ width: '188px' }} />
              {item.p3_2}{' '}
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t4}</div>
          <div className='desc'>{item.p4}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t5}</div>
          <div className='desc'>{item.p5}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t6}</div>
          <div className='desc'>{item.p6}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t7}</div>
          <div className='desc'>{item.p7}</div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t8}</div>
          <div className='desc'>
            <div className='content-w-input'>
              {item.p8_1}
              <Input className='inline-input' placeholder={item.ph1} style={{ width: '188px' }} />
              {item.p2_2}
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t9}</div>
          <div className='desc'>{item.p9}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t10}</div>
          <div className='desc'>{item.p10}</div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t11}</div>
          <div className='desc'>
            <div className='content-w-input'>
              <p className='mb-2'>{item.p11_1}</p>
              {item.p11_2}
              <Input className='inline-input' placeholder={item.ph2} style={{ width: '368px' }} />
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t12}</div>
          <div className='desc'>{item.p12}</div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t13}</div>
          <div className='desc'>
            <div className='content-w-input'>
              {item.p13_1} 
              <Input className='inline-input' placeholder={item.ph1} style={{ width: '188px' }} />
              {item.p13_2}
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t14}</div>
          <div className='desc'>
            <div className='content-w-input'>
              {item.p14_1}
              <Input className='inline-input' placeholder={item.ph1} style={{ width: '188px' }} />
              <span className='label'>{item.p14_2}</span>
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t15}</div>
          <div className='desc'>
            <p className='mb-3'>{item.p15_1}</p>
            <div>
              <span className='label'>{item.p15_2}</span>
              <Select placeholder={item.ph3} style={{ width: '316px' }} >
                <Option value='jack'>Jack</Option>
              </Select>
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t16}</div>
          <div className='desc'>
            <p className='mb-3'>{item.p15_1}</p>
            <div>
              <span className='label'>{item.p15_2}</span>
              <Select placeholder={item.ph4} style={{ width: '600px' }} >
                <Option value='jack'>Jack</Option>
              </Select>
              <Close />
            </div>
          </div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t17}</div>
          <div className='desc'>{item.p17}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t18}</div>
          <div className='desc'>{item.p18}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t19}</div>
          <div className='desc'></div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t20}</div>
          <div className='desc'>{item.p20}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t21}</div>
          <div className='desc'>{item.p21}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t22}</div>
          <div className='desc'>{item.p22}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t23}</div>
          <div className='desc'>{item.p23}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t24}</div>
          <div className='desc'>{item.p24}</div>
        </div>
      </div>

      <NavigateItems item={1} />
    </div>
  )
}
