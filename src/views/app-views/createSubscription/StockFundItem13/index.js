import React, { useState } from 'react'
import { Select } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item, {
  orderedList_1,
  orderedList_2,
} from '../../../../configs/stockFundItems/Item13'
import Form1 from './Form1'
import Form2 from './Form2'
import SelectInput from '../../../../components/shared-components/Form/SelectInput'
import SingleOption from '../../../../components/shared-components/Form/SingleOption'

const { Option } = Select

export default function StockFundItem13({ openSidebar }) {
  const [options, setOptions] = useState(['الشركة الوطنية', 'شركة ASD للإدارة'])
  const [newOption, setNewOption] = useState('')

  const [selectVal, setSelectVal] = useState('')

  const handleSelect = (val) => {
    setSelectVal(val)
  }

  const addItem = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (newOption) {
        setOptions([...options, newOption])
        setNewOption('')
      }
    }
  }

  return (
    <div className='stock-fund-item'>
      <Header
        title={'13. مدير الاستثمار'}
        progress={30}
        info={'البند الثالث عشر'}
        openSidebar={openSidebar}
      />

      <div className='content'>
        <div className='p-in-first'>
          <p className='p-0'>{item.p1}</p>
          <p>
            {item.p2}
            <Select
              className='mx-3'
              style={{ width: '55%' }}
              placeholder={item.ph}
              dropdownRender={(menu) => (
                <>
                  {menu}
                  <SelectInput
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    onKeyDown={addItem}
                    placeholder={item.ph2}
                  />
                </>
              )}
              dropdownAlign={{ offset: [0, 8] }}
              onChange={handleSelect}
            >
              {options.map((option) => (
                <Option value={option}>
                  <SingleOption classn='sm' option={option} />
                </Option>
              ))}
            </Select>
            {item.p3}
          </p>

          {selectVal && <Form1 />}

          <Form2 />
        </div>

        <div className='p-in'>
          <div>
            <p className='p-0 mb-3 fs-6 fw-500'>{item.p19}</p>
            {orderedList_1.map((ele) => (
              <p className='p-0 mb-3 text-darkblue'>{ele}</p>
            ))}
          </div>
        </div>

        <div className='p-in-first'>
          <div>
            <p className='p-0 mb-3 fs-6 fw-500'>{item.p20}</p>
            {orderedList_2.map((ele) => (
              <p className='p-0 mb-3 text-darkblue'>{ele}</p>
            ))}
          </div>
        </div>
      </div>

      <NavigateItems item={13} />
    </div>
  )
}
