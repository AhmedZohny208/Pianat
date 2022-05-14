import React, { useState } from 'react'
import { Input, Select } from 'antd'
import item from '../../../../configs/stockFundItems/Item14'
import SelectInput from '../../../../components/shared-components/Form/SelectInput'
import SingleOption from '../../../../components/shared-components/Form/SingleOption'
import data from './OptionsData'

const { Option } = Select

export default function Form_1() {
  const [newOption, setNewOption] = useState({
    companyName: '',
    recordNum: '',
    permission1: '',
    permissionDate: '',
  })
  const [options, setOptions] = useState(data)
  const [selectVal, setSelectVal] = useState('')

  const handleSelect = (val) => {
    setSelectVal(JSON.parse(val))
    console.log(val)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setSelectVal({ ...selectVal, [name]: value })
    const newArr = options.map((obj) =>
      obj.id === selectVal.id ? { ...obj, [name]: value } : obj
    )
    setOptions(newArr)
  }

  const addItem = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (newOption.companyName) {
        const newObj = { ...newOption, key: new Date().getTime().toString() }
        setOptions([...options, newObj])
        setNewOption('')
      }
    }
  }

  return (
    <div className='mb-4'>
      <div className='mb-3'>
        {item.p1}
        <Select
          placeholder={item.ph1}
          className='mx-4'
          style={{ width: '70%' }}
          dropdownRender={(menu) => (
            <>
              {menu}
              <SelectInput
                value={newOption.companyName}
                onChange={(e) =>
                  setNewOption({ ...newOption, companyName: e.target.value })
                }
                onKeyDown={addItem}
                placeholder={item.ph2}
              />
            </>
          )}
          dropdownAlign={{ offset: [0, 8] }}
          onChange={handleSelect}
        >
          {options.map((option) => (
            <Option value={JSON.stringify(option)}>
              <SingleOption classn='sm' option={option.companyName} />
            </Option>
          ))}
        </Select>
        {item.p3}
      </div>

      {selectVal && (
        <div className='row align-items-center'>
          <div className='col-3'>
            <div>
              <div className='mb-2 '>{item.p4}</div>
              <Input
                className='grey-input'
                id='recordNum'
                name='recordNum'
                value={selectVal.recordNum}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='col-3'>
            <div>
              <div className='mb-2 '>{item.p5}</div>
              <Input
                className='grey-input'
                id='permission1'
                name='permission1'
                value={selectVal.permission1}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='col-3'>
            <div>
              <div className='mb-2 '>{item.p5}</div>
              <Input
                className='grey-input'
                id='permissionDate'
                name='permissionDate'
                value={selectVal.permissionDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='col-3'>
            <div>{item.p7}</div>
          </div>
        </div>
      )}
    </div>
  )
}
