import React, { useState } from 'react'
import { Input, Select } from 'antd'
import SignatureUpload from '../../../../components/shared-components/Buttons/SignatureUpload'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import SingleOption from '../../../../components/shared-components/Form/SingleOption'
import SelectInput from '../../../../components/shared-components/Form/SelectInput'
import item from '../../../../configs/stockFundItems/Item33'
import data from './data'

const { Option } = Select

export default function StockFundItem33({ openSidebar }) {
  const [options, setOptions] = useState(data)
  return (
    <div className='stock-fund-item'>
      <Header
        title={'33. إقرار أمين الحفظ'}
        progress={10}
        info={'البند الثالث والثلاثون'}
        openSidebar={openSidebar}
      />

      <div className='content'>
        <div className='p-in-first'>
          <div className='content-w-input mb-12'>
            {item.p1}
            <Input className='grey-input w-35 mx-2' value={item.p2} />
            {item.p3} {item.p4}
          </div>

          <p className='p-0 mb-3'>{item.p5}</p>

          <div className='row mb-2'>
            <div className='col-4'>
              <label className='fw-600 mb-2'>{item.l1}</label>
              <Select
                placeholder={item.v1}
                className='w-100 m-0'
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <SelectInput
                      placeholder={'اضافة اسم رباعي - ورقم البطاقة'}
                      clickable
                    />
                  </>
                )}
                dropdownAlign={{ offset: [0, 8] }}
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
              <label className='fw-600 mb-2'>{item.l2}</label>
              <Select
                placeholder={item.v2}
                className='w-100 m-0'
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <SelectInput
                      placeholder={'اضافة اسم رباعي - ورقم البطاقة'}
                      clickable
                    />
                  </>
                )}
                dropdownAlign={{ offset: [0, 8] }}
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
              <label className='fw-600 mb-2'>{item.l3}</label>
              <Input className='grey-input' placeholder={item.v3} />
            </div>
          </div>
          <div className='mb-5'>
            <SignatureUpload />
          </div>
        </div>
      </div>

      <NavigateItems item={33} />
    </div>
  )
}
