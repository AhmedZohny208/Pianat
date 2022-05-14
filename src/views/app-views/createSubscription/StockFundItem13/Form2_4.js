import React from 'react'
import { Input } from 'antd'
import item from '../../../../configs/stockFundItems/Item13'
import DownloadShareholderFormBtn from '../../../../components/shared-components/Buttons/DownloadShareholderForm'
import UploadShareholderFormBtn from '../../../../components/shared-components/Buttons/UploadShareholderForm'
import { ReactComponent as Exclamation } from '../../../../components/shared-components/svgs/exclamationBlue.svg'
import AddName from '../../../../components/shared-components/Buttons/AddName'

export default function Form2_4() {
  return (
    <div>
      <h6 className='fw-bold mb-2'>{item.p9}</h6>
      <p className='p-0 mb-3'>{item.p10}</p>

      <div className="row mb-3">
        <div className="col-4">
          <span className='me-2 fs-17'>{item.p5}</span>
          <DownloadShareholderFormBtn content={'تنزيل النموذج'} />
        </div>
        <div className="col-4">
          <span className='me-2 fs-17'>{item.p6}</span>
          <UploadShareholderFormBtn content={'رفع النموذج'} />
          <Exclamation className='ms-3' />
        </div>
      </div>

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
      </div>

      <AddName content={'اضافة اسم جديد'} />
    </div>
  )
}
