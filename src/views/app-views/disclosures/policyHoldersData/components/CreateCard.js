import React from 'react'
import { Input, Select, DatePicker } from 'antd'
import { Country }  from 'country-state-city';
import { ReactComponent as Percentage } from '../../../../../components/shared-components/svgs/percentageGold.svg'
import SingleOption from '../../../../../components/shared-components/Form/SingleOption';
import moment from 'moment'

const dateFormat = 'YYYY/MM/DD'
const { Option } = Select

export default function CreateCard() {
  return (
    <div className='create-card'>
      <div className='row'>
        <div className='col-4 mb-4'>
          <label className='mb-2'>نوع المستثمر / حامل الوثيقة</label>
          <Select className='mx-0 w-100' defaultValue={'مؤسسة'}>
            <Option value='مؤسسة'>
              <SingleOption option={'مؤسسة'} />
            </Option>
            <Option value='فرد'>
              <SingleOption option={'فرد'} />
            </Option>
            <Option value='صندوق'>
              <SingleOption option={'صندوق'} />
            </Option>
          </Select>
        </div>
        <div className='col-4 mb-4'>
          <label className='mb-2'>اسم الشركة</label>
          <Input className='inline-input mx-0' value={'شركة اتش سي بي سي'} />
        </div>
        <div className='col-4 mb-4'>
          <label className='mb-2'>الجنسية</label>
          <Select className='mx-0 w-100' value={'Egypt'}>
            {Country &&
              Country.getAllCountries().map((e) => (
                <Option value='jack'>{e.name}</Option>
              ))}
          </Select>
        </div>
        <div className='col-4 mb-4'>
          <label className='mb-2'>رقم السجل التجارى</label>
          <Input className='inline-input mx-0' value={'134121'} />
        </div>
        <div className='col-4 mb-4'>
          <label className='mb-2'>عدد الوثائق المشتراه او المسترده</label>
          <Input className='inline-input mx-0' value={'134121'} />
        </div>
        <div className='col-4 mb-4'>
          <label className='mb-2'>
            نسبة الملكية الوثائق بعد الشراء او الاسترداد
          </label>
          <div className='position-relative'>
            <Input className='inline-input mx-0' value={'3%'} />
            <Percentage className='percentage-gold' />
          </div>
        </div>
        <div className='col-6 mb-4'>
          <label className='mb-2'>تاريخ عملية الشراء</label>
          <DatePicker
            className='inline-input w-100 mx-0'
            placeholder=' '
            defaultValue={moment('2022/01/01', dateFormat)}
            format={dateFormat}
          />
        </div>
        <div className='col-6 mb-4'>
          <label className='mb-2'>تاريخ عملية الاسترداد</label>
          <DatePicker
            className='inline-input w-100 mx-0'
            placeholder=' '
            defaultValue={moment('2022/01/01', dateFormat)}
            format={dateFormat}
          />
        </div>
      </div>

      <div className='text-end mt-3'>
        <button className='btn save-no-icon'>حفظ البيانات</button>
        <button className='btn delete-no-icon'>حذف</button>
      </div>
    </div>
  )
}
