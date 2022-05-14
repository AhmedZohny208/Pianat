import React, { useState } from 'react'
import { Input, Select } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item24'
import ListedInput from '../../../../components/shared-components/Form/ListedInput'
import SingleOption from '../../../../components/shared-components/Form/SingleOption'
import data from './data'
import SelectInput from '../../../../components/shared-components/Form/SelectInput'

const { Option } = Select

export default function StockFundItem24({ openSidebar }) {
  const [purpose, setPurpose] = useState('')
  const [items, setItems] = useState([])

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
        title={'24. أرباح الصندوق و عائد الوثيقة و توزيعات الأرباح'}
        progress={10}
        info={'البند الرابع و العشرون'}
        openSidebar={openSidebar}
      />

      <div className='content-rows'>
        <div className='d-flex align-items-start'>
          <div className='title'>{item.t1}</div>
          <div className='desc'>
            <p className='p-0 lh-lg mb-2'>{item.p1_1}</p>
            <p className='p-0 mb-0 lh-lg'>{item.p1_2}</p>
            <p className='p-0 mb-0 lh-lg'>{item.p1_3}</p>
            {item.p1_4.map((ele) => (
              <p className='p-0 mb-1 lh-lg'>{ele}</p>
            ))}
          </div>
        </div>
        <div className='d-flex align-items-start'>
          <div className='title'>{item.t2}</div>
          <div className='desc'>
            {item.p2.map((ele) => (
              <p className='p-0 mb-1 lh-lg'>{ele}</p>
            ))}
          </div>
        </div>
        <div className='d-flex align-items-start'>
          <div className='title mt-2'>{item.t3}</div>
          <div className='desc p-in-first'>
            {!showAdd && (
              <div className='row align-items-center mb-5'>
                <div className='col-2'>{item.p3_1}</div>
                <div className='col-10'>
                  <Select
                    mode='multiple'
                    placeholder={item.ph1}
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
                </div>
              </div>
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

            <div className='row mb-5'>
              <div className='col-2'>{item.p3_2}</div>
              <div className='col-10'>
                <ListedInput
                  placeholder={item.ph2}
                  ph2={'اضغط enter للادخال'}
                  value={purpose}
                  setValue={setPurpose}
                  items={items}
                  setItems={setItems}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavigateItems item={24} />
    </div>
  )
}
