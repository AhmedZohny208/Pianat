import { Input, DatePicker, Radio, Select } from 'antd'
import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import Item from '../../../../configs/stockFundItems/Item3'
import { orderedList, unorderedList } from '../../../../configs/stockFundItems/Item3'
import { ReactComponent as Exclamation } from '../../../../components/shared-components/svgs/exclamationGrey.svg'

const { Option } = Select

export default function StockFundItem3() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'3. تعريف وشكل الصندوق'}
        progress={50}
        info={'البند الثالث'}
      />

      <div className="content-rows">

        <div className="d-flex">
          <div className="title">
            {Item.t1}
          </div>
          <div className="desc">
            {Item.p1}
            <Input className='inline-input' placeholder={Item.ph1} style={{ width: '677px' }} />
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t2}</div>
          <div className="desc">
            <p style={{ marginBottom: '13px' }}>{Item.p2_1}</p>

            <div className="d-flex" style={{ marginBottom: '8px' }}>
              <div style={{ marginLeft: '40px' }}>
                <span className='label'>{Item.p2_2}</span>
                <Input className='inline-input' placeholder={Item.ph2} style={{ width: '371px' }} />
              </div>
              <div>
                <span className='label'>{Item.p2_3}</span>
                <DatePicker placeholder={Item.ph3} className='inline-input' style={{ width: '190px' }} />
              </div>
            </div>
            <div className="d-flex">
              <div style={{ marginLeft: '40px' }}>
                <span className='label'>{Item.p2_4}</span>
                <Input className='inline-input' placeholder={Item.ph2} style={{ width: '188px' }} />
              </div>
              <div>
                <span className='label'>{Item.p2_3}</span>
                <DatePicker placeholder={Item.ph3} className='inline-input' style={{ width: '190px' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t3}</div>
          <div className="desc">
            <div className='content-w-input'>
              {Item.p3_1}
              <Input className='inline-input' placeholder={Item.ph2} style={{ width: '188px' }} />
              {Item.p3_2} <br />

              <p style={{ marginTop: '8px', marginBottom: '32px' }}>
                {Item.p3_3}
                <Radio.Group style={{ marginRight: '36px' }}>
                  <Radio value={1}>مفتوح</Radio>
                  <Radio value={2}>مغلق</Radio>
                </Radio.Group>
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t4}</div>
          <div className="desc">
            <div className='content-w-input'>
              {Item.p4}
              <Input className='inline-input' placeholder={Item.ph4} style={{ width: '715px' }} />
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t5}</div>
          <div className="desc">
            <div className='content-w-input'>
              <p>
                {Item.p5_1}
              </p>
              <div>
                <span className='label'>{Item.p5_2}</span>
                <DatePicker placeholder={Item.ph3} className='inline-input' style={{ width: '190px' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t6}</div>
          <div className="desc">
            <div className='content-w-input'>
              <p>
                {Item.p6_1}
              </p>
              <div>
                <span className='label'>{Item.p6_2}</span>
                <DatePicker placeholder={Item.ph3} className='inline-input' style={{ width: '182px' }} />
                <span className='label'>{Item.p6_3}</span>
                <DatePicker placeholder={Item.ph3} className='inline-input' style={{ width: '182px' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t7}</div>
          <div className="desc">
            <div className='content-w-input'>
              <p>
                {Item.p7_1}
              </p>
              <div>
                <span className='label'>{Item.p7_2}</span>
                <Input placeholder={Item.ph5} className='inline-input' style={{ width: '190px' }} />
                <span className='label ms-2'>{Item.p7_3}</span>
                <DatePicker placeholder={Item.ph3} className='inline-input' style={{ width: '190px' }} />
                <span className='label ms-2'>{Item.p7_4}</span>
                <DatePicker placeholder={Item.ph3} className='inline-input' style={{ width: '190px' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t8}</div>
          <div className="desc">
            <div className="content-w-input">
              <p>{Item.p8_1}</p>
              <div>
                <span className='label'>{Item.p8_2}</span>
                <Select placeholder={Item.ph6} >
                  <Option value='jack'>Jack</Option>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t9}</div>
          <div className="desc d-flex align-items-center">
            <div className='content-w-input'>
              {Item.p9}
              <Input className='inline-input' placeholder={Item.ph7} style={{ width: '660px' }} />
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t10}</div>
          <div className="desc d-flex align-items-center">
            <div className="d-flex">
              <div style={{ marginLeft: '40px' }}>
                <span className='label'>{Item.p10_1}</span>
                <Input className='inline-input' placeholder={Item.ph9} style={{ width: '174px' }} />
                <p className='hint grey'>
                  <Exclamation />
                  {Item.p10_2}
                </p>
              </div>
              <div>
                <span className='label'>{Item.p2_3}</span>
                <DatePicker placeholder={Item.ph3} className='inline-input' style={{ width: '190px' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t11}</div>
          <div className="desc">
            <div className='content-w-input'>
              {Item.p11_1}
              <Input className='inline-input' placeholder={Item.ph2} style={{ width: '188px' }} />
              {Item.p11_2}
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t12}</div>
          <div className="desc">
            <div className='content-w-input'>
              {Item.p12}
              <Input className='inline-input' placeholder={Item.ph1} style={{ width: '423px' }} />
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t13}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t14}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t15}</div>
          <div className="desc">
            <p>{Item.p15_1}</p>
            <p className='mb-2'>{Item.p15_2}</p>
            <div className="ordered-list">
              <ol>
                {orderedList.map(ele => (
                  <li>{ele}</li>
                ))}
              </ol>
            </div>
            <p className='mb-2'>{Item.p15_3}</p>
            <div className="unordered-list">
              <ul>
                {unorderedList.map(ele => (
                  <li>{ele}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <NavigateItems item={3} />
    </div>
  )
}
