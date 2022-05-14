import React, { useState, useEffect } from 'react'
import { Select, Input } from 'antd'
import { ReactComponent as Close } from '../../../../components/shared-components/svgs/close.svg'
import item from '../../../../configs/stockFundItems/Item1'
import AddNameBtn from '../../../../components/shared-components/Buttons/AddName'
import data from './data'
import SingleOption from '../../../../components/shared-components/Form/SingleOption'

const { Option } = Select

export default function DynamicSelect() {
  const [inputFields, setInputFields] = useState([])

  const [selectVal, setSelectVal] = useState(null)
  const [selectedObj, setSelectedObject] = useState(null)
  const [showDetails, isShowDetails] = useState(false)

  const handleSelect = (value) => {
    setSelectVal(value)
  }

  useEffect(() => {
    selectVal ? isShowDetails(true) : isShowDetails(false)
    const obj = JSON.parse(selectVal)
    setSelectedObject(obj)
  }, [selectVal])

  const add = () => {
    setInputFields([...inputFields, selectedObj])
    setSelectVal(null)
  }
  const remove = (id) => {
    const newInputFields = inputFields.filter((e) => e.id !== id)
    setInputFields(newInputFields)
  }

  return (
    <>
      {inputFields.map((inputField, index) => (
        <div key={index}>
          <Select
            placeholder={item.ph4}
            style={{ width: '600px' }}
            dropdownAlign={{ offset: [0, 10] }}
            className='ms-0'
            onChange={handleSelect}
            defaultValue={`${inputField.name} - ${inputField.number}`}
          >
            {data &&
              data.map((e, i) => (
                <Option key={i} value={JSON.stringify(e)}>
                  <SingleOption option={`${e.name} - ${e.number}`} />
                </Option>
              ))}
          </Select>
          <Close
            className='cursor-pointer'
            onClick={() => remove(inputField.id)}
          />

          <div className='row w-100 mt-3 mb-3 gx-5'>
            <div className='col-6'>
              <div>
                <div className='mb-2 '>
                  اسم مدير المحفظة بشركة مدير الاستثمار
                </div>
                <Input value={inputField.fundManager} className='grey-input' />
              </div>
            </div>
            <div className='col-6'>
              <div>
                <div className='mb-2 '>رقم البطاقة او الباسبور</div>
                <Input value={inputField.id} className='grey-input' />
              </div>
            </div>
          </div>
        </div>
      ))}

      <Select
        placeholder={item.ph4}
        style={{ width: '600px' }}
        dropdownAlign={{ offset: [0, 10] }}
        className='ms-0'
        value={selectVal}
        onChange={handleSelect}
      >
        {data &&
          data.map((e, i) => (
            <Option key={i} value={JSON.stringify(e)}>
              <SingleOption option={`${e.name} - ${e.number}`} />
            </Option>
          ))}
      </Select>
      {/* <Close className='cursor-pointer' /> */}

      {showDetails && (
        <div className='row w-100 mt-3 mb-3 gx-5'>
          <div className='col-6'>
            <div>
              <div className='mb-2 '>اسم مدير المحفظة بشركة مدير الاستثمار</div>
              <Input value={selectedObj.fundManager} className='grey-input' />
            </div>
          </div>
          <div className='col-6'>
            <div>
              <div className='mb-2 '>رقم البطاقة او الباسبور</div>
              <Input value={selectedObj.id} className='grey-input' />
            </div>
          </div>
        </div>
      )}

      <div>
        <AddNameBtn content={'أضف الصندوق'} onclick={add} />
      </div>
    </>
  )
}
