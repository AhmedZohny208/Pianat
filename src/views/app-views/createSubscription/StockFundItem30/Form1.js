import React, { useState } from 'react'
import { Input, Select } from 'antd'
import SingleOption from '../../../../components/shared-components/Form/SingleOption'
import SelectInput from '../../../../components/shared-components/Form/SelectInput'
import item from '../../../../configs/stockFundItems/Item30'
import SignatureUpload from '../../../../components/shared-components/Buttons/SignatureUpload'
import data from './data'

const { Option } = Select

export default function Form1() {
  const [newOption, setNewOption] = useState({
    name: '',
    idNum: '',
    office: '',
    recordNum: '',
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
      <div className='row mb-2'>
        {!showAdd && (
          <>
            <div className='col-4'>
              <label className='fw-600 mb-2'>{item.p5}</label>
              <Select
                placeholder={item.p8}
                className='w-100 m-0'
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <SelectInput
                      value={newOption.companyName}
                      onClick={openNewNameForm}
                      onKeyDown={addItem}
                      placeholder={'اضافة اسم رباعي - ورقم البطاقة'}
                      clickable
                    />
                  </>
                )}
                dropdownAlign={{ offset: [0, 8] }}
                onChange={handleSelect}
              >
                {options.map((option) => (
                  <Option value={JSON.stringify(option)}>
                    <SingleOption
                      classn='sm'
                      option={`${option.name} - ${option.idNum}`}
                    />
                  </Option>
                ))}
              </Select>
            </div>
            <div className='col-4'>
              <label className='fw-600 mb-2'>{item.p6}</label>
              <Input
                className='grey-input m-0'
                id='office'
                name='office'
                value={selectVal.office}
                onChange={handleChange}
              />
            </div>
            <div className='col-4'>
              <label className='fw-600 mb-2'>{item.p7}</label>
              <Input
                className='grey-input m-0'
                id='recordNum'
                name='recordNum'
                value={selectVal.recordNum}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        {showAdd && (
          <>
            <div className='col-5'>
              <div className='mb-3'>
                <p className='p-0 mb-1 fw-600'>الاسم رباعى</p>
                <Input
                  className='inline-input mx-0'
                  id='name'
                  name='name'
                  value={newOption.name}
                  onChange={handleNewNameChange}
                />
              </div>
            </div>

            <div className='col-7'>
              <div className='row align-items-end'>
                <div className='col-6'>
                  <div className='mb-3'>
                    <p className='p-0 mb-1 fw-600'>رقم البطاقة</p>
                    <Input
                      className='inline-input mx-0'
                      id='idNum'
                      name='idNum'
                      value={newOption.idNum}
                      onChange={handleNewNameChange}
                    />
                  </div>
                </div>
                <div className='col-6'>
                  <button className='btn grey-save' onClick={handleSubmit}>
                    حفظ
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <SignatureUpload />
    </>
  )
}
