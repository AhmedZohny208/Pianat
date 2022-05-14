import React from 'react'
import DownloadShareholderFormBtn from '../../../../components/shared-components/Buttons/DownloadShareholderForm'
import UploadShareholderFormBtn from '../../../../components/shared-components/Buttons/UploadShareholderForm'
import { ReactComponent as Exclamation } from '../../../../components/shared-components/svgs/exclamationBlue.svg'
import Item from '../../../../configs/stockFundItems/Item3'
import StaffForm1 from './Staff_Form_1'
import StaffForm2 from './Staff_Form_2'

export default function Row_14() {
  return (
    <div className="d-flex">
      <div className="title">{Item.t14}</div>
      <div className="desc">
        <div className="row mt-3 mb-36">
          <div className="col-6">
            <span className='me-2 fs-17'>{Item.p13_7}</span>
            <DownloadShareholderFormBtn width={255} content={'تنزيل النموذج '} />
          </div>
          <div className="col-6">
            <span className='me-2 fs-17'>{Item.p13_8}</span>
            <UploadShareholderFormBtn width={255} content={'رفع النموذج'} />
            <Exclamation className='ms-3' />
          </div>
        </div>

        <p>{Item.p14_1}</p>
        <StaffForm1 />
        <p>{Item.p14_2}</p>
        <StaffForm2 />
      </div>
    </div>
  )
}
