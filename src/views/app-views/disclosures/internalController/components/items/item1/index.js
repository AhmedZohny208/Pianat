import React from 'react'
import { Input, DatePicker } from 'antd';
import DownloadLightBlue from '../../../../../../../components/shared-components/Buttons/DownloadLightBlue';
import moment from 'moment';

const { TextArea } = Input;
const dateFormat = 'YYYY/MM/DD';

export default function Item1() {
  return (
    <>
      <div>
        <label>اسم البند</label>
        <TextArea
          className='grey'
          autoSize
          value={'مدى التزام مدير الاستثمار بالقانون ولائحته التنفيذية والقرارات الصادرة تنفيذاً لهما ونظم الرقابة بالشركة وعلى وجه الخصوص كافة ما ورد بالفرع التاسع من الفصل الثاني من اللائحة التنفيذية لقانون سوق رأس المال رقم 2991/59'}
        />
      </div>

      <div>
        <label>بنود الشكوى</label>
        <TextArea 
          className='white'
          autoSize
          value={'هذا النص يمكن وضعه في اي من الشاشات ووهو نص فقط غير حقيقي ولا يمت للواقع بصله '}
        />
      </div>

      <div>
        <label>خطط العمل لتلافى الشكوى</label>
        <TextArea 
          className='white'
          autoSize
          value={'هذا النص يمكن وضعه في اي من الشاشات ووهو نص فقط غير حقيقي ولا يمت للواقع بصله '}
        />
      </div>

      <div className='row'>
        <div className="col-3">
          <label>تاريخ تلقى الشكوى</label>
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
