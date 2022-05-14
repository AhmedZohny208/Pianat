import React from 'react'
import { Select, Input } from 'antd'
import SingleOption from '../../../../../components/shared-components/Form/SingleOption'
import AddNameBtn from '../../../../../components/shared-components/Buttons/AddName'
import { ReactComponent as Percentage } from '../../../../../components/shared-components/svgs/percentage.svg'
import data from './data'

const { Option } = Select

export default function DynamicSelect({ items }) {
  return (
    <>
      <Select
        placeholder={items.ph1}
        className='w-90 m-0'
        dropdownAlign={{ offset: [1, 10] }}
        value='شركة الاهلي للصناديق - 123390'
      >
        {data &&
          data.map((e, i) => (
            <Option key={i} value={JSON.stringify(e)}>
              <SingleOption classn='sm' option={`${e.name} - ${e.number}`} />
            </Option>
          ))}
      </Select>

      <div className='row investment-data-form'>
        <div className='col-3'>
          <label>مدير استثمار الصندوق المستثمر في</label>
          <Input value={'عباس محمد علي'} className='inline-input mx-0' />
        </div>
        <div className='col-3'>
          <label>عدد الوثائق المستثمر فيها</label>
          <Input value={20} className='inline-input mx-0' />
        </div>
        <div className='col-2'>
          <label>نسبة الاستثمار</label>
          <div className='position-relative'>
            <Input value={'3'} className='inline-input mx-0' />
            <Percentage className='percentage-gold' />
          </div>
        </div>
        <div className='col-4'>
          <div className='row'>
            <div className='col-6'>
              <label>تاريخ الشراء</label>
              <Input value={'22 مارس 2021'} className='inline-input mx-0' />
            </div>
            <div className='col-6'>
              <label>تاريخ الاسترداد</label>
              <Input value={'22 مارس 2021'} className='inline-input mx-0' />
            </div>
          </div>
        </div>
      </div>

      <div>
        <AddNameBtn content={'أضف الصندوق'} />
      </div>
    </>
  )
}
