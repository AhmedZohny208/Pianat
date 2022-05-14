import React from 'react'
import { Input, Radio } from 'antd'
import item from '../../../../configs/stockFundItems/Item14'
import DownloadShareholderFormBtn from '../../../../components/shared-components/Buttons/DownloadShareholderForm'
import UploadShareholderFormBtn from '../../../../components/shared-components/Buttons/UploadShareholderForm'
import { ReactComponent as Exclamation } from '../../../../components/shared-components/svgs/exclamationBlue.svg'
import { ReactComponent as ExclamationGreen } from '../../../../components/shared-components/svgs/exclamationGreen.svg'
import AddName from '../../../../components/shared-components/Buttons/AddName'

export default function Form2_4() {
  return (
    <div>
      <h6 className='fw-bold mb-3'>{item.p11}</h6>

      <div className="row mb-3">
        <div className="col-4">
          <span className='me-2 fs-17'>{item.p12}</span>
          <DownloadShareholderFormBtn content={'تنزيل النموذج'} />
        </div>
        <div className="col-4">
          <span className='me-2 fs-17'>{item.p13}</span>
          <UploadShareholderFormBtn content={'رفع النموذج'} />
          <Exclamation className='ms-3' />
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <div className='input'>
            <div className="label">{item.l2_1}</div>
            <Input className="text-input"/>
          </div>
        </div>
        <div className="col-4">
          <div className='input'>
            <div className="label">{item.l2_2}</div>
            <Input className="text-input"/>
          </div>
        </div>
        <div className="col-4">
          <div className='input'>
            <div className="label">{item.l2_3}</div>
            <Input className="text-input"/>
          </div>
        </div>
        <div className="col-4">
          <div className='input'>
            <div className="label">{item.l2_4}</div>
            <Input className="text-input"/>
            <div className='hint green'>
              <ExclamationGreen />
              لن ينشر رقم الباسبور مع العامة.
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className='input'>
            <div className="label">{item.l2_5}</div>
            <Input className="text-input"/>
            <div className='hint green'>
              <ExclamationGreen />
              لن ينشر رقم البطاقة مع العامة.
            </div>
          </div>
        </div>
      </div>

      <AddName content={'اضافة اسم جديد'} />

      <hr className='my-4' />

      <div>
        <p className='fw-bold text-darkblue p-0 mb-2'>{item.p14}</p>
        <Radio.Group>
          <Radio className='me-5' value={1}>لا</Radio>
          <Radio value={2}>نعم</Radio>
        </Radio.Group>
      </div>
    </div>
  )
}
