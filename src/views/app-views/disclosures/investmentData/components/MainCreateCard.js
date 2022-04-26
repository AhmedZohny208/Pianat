import React from 'react'
import { Select } from 'antd'
import items from '../config'
import Header from './Header'
import DownloadShareholderFormBtn from '../../../../../components/shared-components/Buttons/DownloadShareholderForm'
import UploadShareholderFormBtn from '../../../../../components/shared-components/Buttons/UploadShareholderForm'
import { ReactComponent as Exclamation } from '../../../../../components/shared-components/svgs/exclamationBlue.svg'
import SingleOption from '../../../../../components/shared-components/Form/SingleOption'
import MainCreateCardActions from './MainCreateCardActions'

const { Option } = Select

export default function MainCreateCard() {
  return (
    <div className='main-create-card'>
      <Header />

      <div className="main px-0 pt-2">
        <div className='content-grey'>
          <p className='lh-lg'>{items.p1}</p>
        </div>

        <div className="main">
          <div className="main-header mb-32">
            <p>{items.p2}</p>

            <div className="row align-items-center mb-3">
              <div className="col-4">
                <span className='me-2 fs-17'>1. تنزيل</span>
                <DownloadShareholderFormBtn content={'تنزيل نموذج الافصاح'} />
              </div>
              <div className="col-8">
                <span className='me-2 fs-17'>2. رفع</span>
                <UploadShareholderFormBtn 
                  content={'رفع نموذج الافصاح'}
                />
                <Exclamation className='ms-3' />
              </div>
            </div>
          </div>

          <div className='mb-32'>
            <label className='mb-2 fs-12'>{items.label}</label>
            <Select placeholder={items.ph1} className='w-90 m-0' >
              <Option value='1'>
                <SingleOption option={'شركة الاهلي للصناديق - 123390'} />
              </Option>
              <Option value='2'>
                <SingleOption option={'شركة السويس للصناديق - 123390'} />
              </Option>
              <Option value='3'>
                <SingleOption option={'شركة المتحدة لادارة الصناديق - 87404'} />
              </Option>
            </Select>
          </div>

          <div className='mb-4'>
            <p className='mb-1'>{items.p3}</p>
            <p className='mb-0'>{items.p4}</p>
          </div>

          <div>
            <p className='mb-0 lh-lg'>{items.p5}</p>
          </div>

          <MainCreateCardActions />
        </div>
      </div>
    </div>
  )
}
