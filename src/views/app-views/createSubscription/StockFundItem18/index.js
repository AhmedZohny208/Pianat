import React, { useState } from 'react'
import { Input, DatePicker, Select } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item18'
import SingleOption from '../../../../components/shared-components/Form/SingleOption'
import data from './data'
import SelectInput from '../../../../components/shared-components/Form/SelectInput'

const { Option } = Select

export default function StockFundItem18({ openSidebar }) {
  const [newOption, setNewOption] = useState({
    companyName: '',
    recordNum: '',
  })
  const [options, setOptions] = useState(data)
  const [selectVal, setSelectVal] = useState('')
  const [showAdd, isShowAdd] = useState(false)

  const handleSelect = (val) => {
    setSelectVal(JSON.parse(val))
    console.log(val)
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
    if (newOption.companyName && newOption.recordNum) {
      const newObj = { ...newOption, id: new Date().getTime().toString() }
      setOptions([...options, newObj])
      setNewOption('')
    }
    isShowAdd(false)
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
    <div className='stock-fund-item'>
      <Header
        title={'18. الاكتتاب في الوثائق'}
        progress={50}
        info={'البند الثامن عشر'}
        openSidebar={openSidebar}
      />

      <div className='content-rows'>
        <div className='d-flex'>
          <div className='title'>{item.t1}</div>
          <div className='desc'>
            <Input className='inline-input m-0' placeholder='اكتب هنا' />
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t2}</div>
          <div className='desc'>
            <div className='content-w-input'>
              <p className='mb-2'>
                {item.p2_1}
                <DatePicker
                  placeholder={item.ph1}
                  className='inline-input'
                  style={{ width: '188px' }}
                />
                {item.p2_2}
                <DatePicker
                  placeholder={item.ph1}
                  className='inline-input'
                  style={{ width: '188px' }}
                />
              </p>
              <p className='mb-2'>{item.p2_3}</p>
              <p className='mb-2'>{item.p2_4}</p>
              <p className='mb-2'>{item.p2_5}</p>
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t3}</div>
          <div className='desc p-in-first'>
            <p className='mb-2'>{item.p3}</p>
            {!showAdd && (
              <Select
                mode='multiple'
                placeholder={item.ph2}
                className='w-100 m-0'
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <SelectInput
                      value={newOption.companyName}
                      onClick={openNewNameForm}
                      onKeyDown={addItem}
                      placeholder={'اضافة بنك جديد'}
                      clickable
                    />
                  </>
                )}
                dropdownAlign={{ offset: [0, 8] }}
                onChange={handleSelect}
                optionLabelProp='label'
              >
                {options.map((option) => (
                  <Option
                    value={JSON.stringify(option)}
                    label={option.companyName}
                  >
                    <SingleOption
                      classn='sm'
                      option={`${option.companyName} - ${option.recordNum}`}
                    />
                  </Option>
                ))}
              </Select>
            )}

            {showAdd && (
              <div className='row mb-5'>
                <div className='col-5'>
                  <Input
                    placeholder='اكتب اسم البنك متلقى الاكتتاب'
                    className='inline-input mx-0'
                    id='companyName'
                    name='companyName'
                    value={newOption.companyName}
                    onChange={handleNewNameChange}
                  />
                </div>
                <div className='col-3'>
                  <Input
                    placeholder='رقم الصندوق'
                    className='inline-input mx-0'
                    id='recordNum'
                    name='recordNum'
                    value={newOption.recordNum}
                    onChange={handleNewNameChange}
                  />
                </div>
                <div className='col-4'>
                  <button className='btn grey-save' onClick={handleSubmit}>
                    حفظ
                  </button>
                  <button
                    className='btn grey-delete'
                    onClick={() => isShowAdd(false)}
                  >
                    الغاء
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t4}</div>
          <div className='desc'>
            {item.p4_1}
            <Input className='inline-input' style={{ width: '30%' }} />
            {item.p4_2} <span className='ms-3'>{item.p4_3}</span>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t5}</div>
          <div className='desc'>
            <div className='row'>
              <div className='col-5'>
                {item.p5_1}
                <Input className='inline-input' style={{ width: '68%' }} />
                {item.p5_2}
              </div>
              <div className='col-5'>
                {item.p5_3}
                <Input className='inline-input' style={{ width: '68%' }} />
                {item.p5_4}
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t6}</div>
          <div className='desc'>{item.p6}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t7}</div>
          <div className='desc'>
            <p className='mb-0 lh-lg'>{item.p7}</p>
            {item.unordered1.map((ele) => (
              <p className='mb-0 lh-lg'>{ele}</p>
            ))}
          </div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t8}</div>
          <div className='desc'>
            {item.unordered2.map((ele) => (
              <p className='mb-0 lh-lg'>{ele}</p>
            ))}
          </div>
        </div>
      </div>

      <NavigateItems item={18} />
    </div>
  )
}
