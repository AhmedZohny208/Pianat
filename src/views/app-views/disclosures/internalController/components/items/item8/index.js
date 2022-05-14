import React from 'react'
import { Input, Radio, DatePicker, Select } from 'antd';
import DownloadLightBlue from '../../../../../../../components/shared-components/Buttons/DownloadLightBlue';
import moment from 'moment';

const { TextArea } = Input;
const dateFormat = 'YYYY/MM/DD';
const { Option } = Select

export default function Item8() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <label>
            <span className='num'>1</span>
            البند
          </label>
          <TextArea
          className='grey'
          autoSize
          value={'التزام مدير الاستثمار بمواد نشرة الاكتتاب والمرتبطه بأن تلتزم إدارة الصندوق بالنسب والحدودالاستثمارية القصوى والدنيا لنسب الاستثمارالمسموح بها لكل نوع من الأصول المستثمر فيها والواردة في هذه النشرة.'}
        />
        </div>
        <div className="col-3 offset-1">
          <label>الحالة</label>
          <div className="radio-box black text-center">
            <Radio.Group>
              <Radio value={1}>ملتزم</Radio>
              <Radio value={2}>غير ملتزم</Radio>
            </Radio.Group>
          </div>
        </div>
      </div>

      <div>
        <label>بنود عدم الالتزام / العمليات المخالفة</label>
        <TextArea 
          className='white'
          autoSize
          value={'هذا النص يمكن وضعه في اي من الشاشات ووهو نص فقط غير حقيقي ولا يمت للواقع بصله '}
        />
      </div>

      <div>
        <label>خطط العمل لتالفى المخالفة</label>
        <TextArea 
          className='white'
          autoSize
          value={'هذا النص يمكن وضعه في اي من الشاشات ووهو نص فقط غير حقيقي ولا يمت للواقع بصله '}
        />
      </div>

      <div>
        <div>
          <label>البند المخالف</label>
        </div>
        <Select placeholder='اختر البند' className='mx-0 mb-4 w-100'>
          <Option value='jack'>Jack</Option>
        </Select>
      </div>

      <div>
        <label>نسب استثمار</label>
        <Input className='inline-input mx-0 mb-4' />
      </div>

      <div className="row gx-5">
        <div className="col-3">
          <label>تاريخ تلقى الشكوى</label>
          <DatePicker 
            placeholder=' ' 
            className='inline-input w-100 mx-0'
            value={moment('2015/01/01', dateFormat)} format={dateFormat}
          />
        </div>
        <div className="col-3">
          <label>التاريخ المحدد لتلافى المخالفات</label>
          <DatePicker 
            placeholder=' ' 
            className='inline-input w-100 mx-0'
            value={moment('2015/01/01', dateFormat)} format={dateFormat}
          />
        </div>
        <div className="col-3">
          <label>المسئول</label>
          <Input
            value={'مدير الاستثمار'}
            className='inline-input mx-0' 
          />
        </div>
        <div className="col-3">
          <label>مرفقات تلافي المخالفة</label>
          <DownloadLightBlue classn={'w-100'} />
        </div>
      </div>
    </>
  )
}
