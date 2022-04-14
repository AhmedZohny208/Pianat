import { Input, Select } from 'antd'
import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import DownloadShareholderFormBtn from '../../../../components/shared-components/Buttons/DownloadShareholderForm'
import UploadShareholderFormBtn from '../../../../components/shared-components/Buttons/UploadShareholderForm'
import { ReactComponent as Exclamation } from '../../../../components/shared-components/svgs/exclamationBlue.svg'
import Item from '../../../../configs/stockFundItems/Item3'
import Rows15 from './Rows_15'
import Rows1To6 from './Rows_1_6'
import Rows7To12 from './Rows_7_12'

const { Option } = Select

export default function StockFundItem3() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'3. تعريف وشكل الصندوق'}
        progress={50}
        info={'البند الثالث'}
      />

      <div className="content-rows">
        <Rows1To6 />
        <Rows7To12 />

        <div className="d-flex">
          <div className="title">{Item.t13}</div>
          <div className="desc">
            <p className='mb-3'>{Item.p13_1}</p>
            <div className="row gx-5 mb-4">
              <div className="col-6 mb-2">
                <div className='row align-items-center'>
                  <div className="col-3">{Item.p13_2}</div>
                  <div className="col-9">
                    <Input className='inline-input' placeholder={Item.ph10} style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className='row align-items-center'>
                  <div className="col-3">{Item.p13_3}</div>
                  <div className="col-9">
                    <Select placeholder={Item.ph11} style={{ width: '100%' }} >
                      <Option value='jack'>Jack</Option>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className='row align-items-center'>
                  <div className="col-4">{Item.p13_4}</div>
                  <div className="col-8">
                    <Input className='inline-input' placeholder={Item.ph12} style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className='row align-items-center'>
                  <div className="col-3">{Item.p13_5}</div>
                  <div className="col-9">
                    <Select placeholder={Item.ph6} style={{ width: '100%' }} >
                      <Option value='jack'>Jack</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <p className='fw-500'>{Item.p13_6}</p>

            <div className="row mb-36">
              <div className="col-6">
                <span className='me-2 fs-17'>{Item.p13_7}</span>
                <DownloadShareholderFormBtn content={'تنزيل نموذج المساهمين'} />
              </div>
              <div className="col-6">
                <span className='me-2 fs-17'>{Item.p13_8}</span>
                <UploadShareholderFormBtn content={'رفع نموذج المساهمين'} />
                <Exclamation className='ms-3' />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t14}</div>
          <div className="desc"></div>
        </div>
        
        <Rows15 />
      </div>

      <NavigateItems item={3} />
    </div>
  )
}
