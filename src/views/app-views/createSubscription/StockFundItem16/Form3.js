import { Input } from 'antd'
import React from 'react'
import UploadDownloadFiles from '../../../../components/shared-components/Buttons/UploadDownloadFiles'
import GreenHint from '../../../../components/shared-components/Hints/GreenHint'
import item from '../../../../configs/stockFundItems/Item16'
import AddName from '../../../../components/shared-components/Buttons/AddName'

export default function Form3() {
  return (
    <div>
      <h6 className='fw-600 mb-3 text-black'>{item.p11}</h6>
      <UploadDownloadFiles content1={'تنزيل النموذج'} content2={'رفع النموذج'} />

      <div className="staff-form">
        <div className="row">
          <div className="col-4">
            <div className='input'>
              <div className="label">{item.l4_1}</div>
              <Input className="text-input"/>
            </div>
          </div>
          <div className="col-4">
            <div className='input'>
              <div className="label">{item.l4_2}</div>
              <Input className="text-input"/>
            </div>
          </div>
          <div className="col-4">
            <div className='input'>
              <div className="label">{item.l4_3}</div>
              <Input className="text-input"/>
            </div>
          </div>
          <div className="col-4">
            <div className='input'>
              <div className="label">{item.l4_4}</div>
              <Input className="text-input"/>
              <GreenHint content={'لن ينشر رقم الباسبور مع العامة.'} />
            </div>
          </div>
          <div className="col-4">
            <div className='input'>
              <div className="label">{item.l4_5}</div>
              <Input className="text-input"/>
              <GreenHint content={'لن ينشر رقم البطاقة مع العامة.'} />
            </div>
          </div>
          <div className="col-4">
            <div className='input'>
              <div className="label">{item.l4_6}</div>
              <Input className="text-input"/>
            </div>
          </div>
          <div className="col-4">
            <div className='input'>
              <div className="label">{item.l4_7}</div>
              <Input className="text-input"/>
            </div>
          </div>
          <div className="col-8">
            <div className='input'>
              <div className="label">{item.l4_8}</div>
              <Input className="text-input"/>
            </div>
          </div>
        </div>

        <AddName content={'اضافة اسم جديد'} />
      </div>
    </div>
  )
}
