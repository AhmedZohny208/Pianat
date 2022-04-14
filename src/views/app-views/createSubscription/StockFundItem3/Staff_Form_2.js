import React from 'react'
import { Input } from 'antd'
import { ReactComponent as Exclamation } from '../../../../components/shared-components/svgs/exclamationGreen.svg'
import { ReactComponent as Plus } from '../../../../components/shared-components/svgs/plusWhite.svg'

export default function Staff_Form_2() {
  return (
    <div className="staff-form mb-3">
      <div className="row">
        <div className="col-4">
          <div className='input'>
            <div className="label">الاسم</div>
            <Input className="text-input"/>
          </div>
        </div>
        <div className="col-4">
          <div className='input'>
            <div className="label">المنصب</div>
            <Input className="text-input"/>
          </div>
        </div>
        <div className="col-4">
          <div className='input'>
            <div className="label">الجنسية</div>
            <Input className="text-input"/>
          </div>
        </div>
        <div className="col-4">
          <div className='input'>
            <div className="label">رقم الباسبور</div>
            <Input className="text-input"/>
            <div className='hint'>
              <Exclamation />
              لن ينشر رقم الباسبور مع العامة.
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className='input'>
            <div className="label">رقم البطاقة</div>
            <Input className="text-input"/>
            <div className='hint'>
              <Exclamation />
              لن ينشر رقم البطاقة مع العامة.
            </div>
          </div>
        </div>
      </div>

      <div>
        <button className='btn add-name'>
          <Plus />
          اضافة اسم جديد
        </button>
      </div>
    </div>
  )
}
