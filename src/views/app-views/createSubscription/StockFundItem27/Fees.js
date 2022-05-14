import React from 'react'
import { Input, Select } from 'antd'
import item from '../../../../configs/stockFundItems/Item27'
import SingleOption from '../../../../components/shared-components/Form/SingleOption'

const { Option } = Select

export default function Fees({ title, p1 }) {
  return (
    <div className='d-flex'>
      <div className='title'>{title}</div>
      <div className='desc'>
        <div className='content-w-input'>
          <div className='row mb-3'>
            <div className='col-6'>
              {p1}
              <Input
                className='inline-input'
                placeholder={item.ph2}
                style={{ width: '146px' }}
              />
            </div>
            <div className='col-6'>
              {item.p9_2}
              <Select
                dropdownAlign={{ offset: [1, 3] }}
                placeholder={item.ph4}
                className='rotating-repeat'
                style={{ width: '70%' }}
                dropdownClassName='rotating-dropdown'
              >
                {item.repeat.map((e) => (
                  <Option value={e}>
                    <SingleOption classn={'sm'} option={e} />
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div>
            {item.p9_3}
            <Input
              className='inline-input'
              placeholder={item.ph3}
              style={{ width: '92%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
