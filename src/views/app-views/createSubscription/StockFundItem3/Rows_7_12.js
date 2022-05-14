import React from 'react'
import { Input, DatePicker, Select } from 'antd'
import Item from '../../../../configs/stockFundItems/Item3'
import { ReactComponent as Exclamation } from '../../../../components/shared-components/svgs/exclamationGrey.svg'

const { Option } = Select

export default function Rows_7_12() {
  return (
    <>
      <div className='d-flex'>
        <div className='title'>{Item.t7}</div>
        <div className='desc'>
          <div className='content-w-input'>
            <p>{Item.p7_1}</p>
            <div>
              <span className='label'>{Item.p7_2}</span>
              <Input
                placeholder={Item.ph5}
                className='inline-input'
                style={{ width: '190px' }}
              />
              <span className='label ms-2'>{Item.p7_3}</span>
              <DatePicker
                placeholder={Item.ph3}
                className='inline-input'
                style={{ width: '190px' }}
              />
              <span className='label ms-2'>{Item.p7_4}</span>
              <DatePicker
                placeholder={Item.ph3}
                className='inline-input'
                style={{ width: '190px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex'>
        <div className='title'>{Item.t8}</div>
        <div className='desc'>
          <div className='content-w-input'>
            <p>{Item.p8_1}</p>
            <div>
              <span className='label'>{Item.p8_2}</span>
              <Select
                className='currency-selector'
                placeholder={Item.ph6}
                style={{ width: '186px' }}
                dropdownAlign={{ offset: [1, 4] }}
                dropdownClassName='currency-dropdown'
              >
                <Option value='جنية'>جنية</Option>
                <Option value='ريال'>ريال</Option>
                <Option value='دولار'>دولار</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex'>
        <div className='title'>{Item.t9}</div>
        <div className='desc d-flex align-items-center'>
          <div className='content-w-input'>
            {Item.p9}
            <Input
              className='inline-input'
              placeholder={Item.ph7}
              style={{ width: '660px' }}
            />
          </div>
        </div>
      </div>

      <div className='d-flex'>
        <div className='title'>{Item.t10}</div>
        <div className='desc d-flex align-items-center'>
          <div className='d-flex'>
            <div style={{ marginLeft: '40px' }}>
              <span className='label'>{Item.p10_1}</span>
              <Input
                className='inline-input'
                placeholder={Item.ph9}
                style={{ width: '174px' }}
              />
              <p className='hint grey'>
                <Exclamation />
                {Item.p10_2}
              </p>
            </div>
            <div>
              <span className='label'>{Item.p2_3}</span>
              <DatePicker
                placeholder={Item.ph3}
                className='inline-input'
                style={{ width: '190px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex'>
        <div className='title'>{Item.t11}</div>
        <div className='desc'>
          <div className='content-w-input'>
            {Item.p11_1}
            <Input
              className='inline-input'
              placeholder={Item.ph2}
              style={{ width: '188px' }}
            />
            {Item.p11_2}
          </div>
        </div>
      </div>

      <div className='d-flex'>
        <div className='title'>{Item.t12}</div>
        <div className='desc'>
          <div className='content-w-input'>
            {Item.p12}
            <Input
              className='inline-input'
              placeholder={Item.ph1}
              style={{ width: '423px' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
