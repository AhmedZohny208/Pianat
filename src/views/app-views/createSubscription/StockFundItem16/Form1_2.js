import React, { useState } from 'react'
import { Input, Select } from 'antd'
import item from '../../../../configs/stockFundItems/Item16'
import data from './data2'
import SingleOption from '../../../../components/shared-components/Form/SingleOption'
import SelectInput from '../../../../components/shared-components/Form/SelectInput'

const { Option } = Select

export default function Form1_2() {
  const [newOption, setNewOption] = useState({
    name: '',
    idNum: '',
    recordNum: '',
    permissionNum: '',
    permissionDate: '',
  })
  const [options, setOptions] = useState(data)
  const [selectVal, setSelectVal] = useState('')
  const [showAdd, isShowAdd] = useState(false)

  const handleSelect = (val) => {
    setSelectVal(JSON.parse(val))
  }

  const openNewNameForm = () => {
    isShowAdd(true)
    setSelectVal('')
  }

  const handleNewNameChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setNewOption({ ...newOption, [name]: value })
  }

  const handleSubmit = () => {
    if (newOption.name && newOption.idNum) {
      const newObj = { ...newOption, id: new Date().getTime().toString() }
      setOptions([...options, newObj])
      setNewOption('')
    }
    isShowAdd(false)
  }

  const addItem = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (newOption.name && newOption.idNum) {
        const newObj = { ...newOption, key: new Date().getTime().toString() }
        setOptions([...options, newObj])
        setNewOption('')
      }
    }
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

  return (
    <>
      <div className='mb-3'>
        {item.p6}
        {!showAdd && (
          <Select
            value={item.p7}
            className='mx-4'
            dropdownRender={(menu) => (
              <>
                {menu}
                <SelectInput
                  value={newOption.companyName}
                  onClick={openNewNameForm}
                  onKeyDown={addItem}
                  placeholder={'اضافة امين حفظ - و رقم السجل التجاري'}
                  clickable
                />
              </>
            )}
            style={{ width: '72.5%' }}
            dropdownAlign={{ offset: [0, 8] }}
          >
            {options.map((option) => (
              <Option value={JSON.stringify(option)}>
                <SingleOption
                  classn='sm'
                  option={`${option.companyName} - ${option.idNum}`}
                />
              </Option>
            ))}
          </Select>
        )}
        
        {showAdd && (
          <div className='d-inline'>
            <Input
              placeholder='ادخل الاسم رباعى'
              className='inline-input mx-3 w-30'
              id='name'
              name='name'
              value={newOption.name}
              onChange={handleNewNameChange}
            />
            <Input
              placeholder='رقم البطاقة'
              className='inline-input ms-0 me-3 w-30'
              id='idNum'
              name='idNum'
              value={newOption.idNum}
              onChange={handleNewNameChange}
            />
            <button className='btn grey-save mb-0 me-3' onClick={handleSubmit}>
              حفظ
            </button>
          </div>
        )}
        {item.p8}
      </div>

      <div className='row align-items-center'>
        <div className='col-3'>
          <div>
            <div className='mb-2 '>{item.l2_1}</div>
            <Input value={123390} className='grey-input' />
          </div>
        </div>
        <div className='col-3'>
          <div>
            <div className='mb-2 '>{item.l2_2}</div>
            <Input value={23421} className='grey-input' />
          </div>
        </div>
        <div className='col-3'>
          <div>
            <div className='mb-2 '>{item.l2_3}</div>
            <Input value={'22 فبراير 2022'} className='grey-input' />
          </div>
        </div>
        <div className='col-3'>
          <div>{item.p9}</div>
        </div>
      </div>
    </>
  )
}
