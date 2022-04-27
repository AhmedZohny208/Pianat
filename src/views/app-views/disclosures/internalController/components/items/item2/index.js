import React from 'react'
import { Input, Radio, DatePicker } from 'antd';
import DownloadLightBlue from '../../../../../../../components/shared-components/Buttons/DownloadLightBlue';
import moment from 'moment';

const { TextArea } = Input;
const dateFormat = 'YYYY/MM/DD';

export default function Item2() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <label>البند</label>
          <TextArea
          className='grey'
          autoSize
          value={'الالتزام بنظم الرقابة'}
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
