import { DatePicker, Input } from 'antd'
import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item11'
import DownloadShareholderFormBtn from '../../../../components/shared-components/Buttons/DownloadShareholderForm'
import UploadShareholderFormBtn from '../../../../components/shared-components/Buttons/UploadShareholderForm'
import { ReactComponent as Exclamation } from '../../../../components/shared-components/svgs/exclamationBlue.svg'
import AddNameBtn from '../../../../components/shared-components/Buttons/AddName'

const p_style = 'fs-6 fw-500 mb-2 p-0'

export default function StockFundItem1() {
  return (
    <div className='stock-fund-item'>
      <Header 
        title={'11.  شركة الصندوق'} 
        progress={10} 
        info={'البند الحادي عشر'} 
      />

      <div className="content">
        <div className='p-in-first'>
          <div className="row mb-36">

            <div className="col-12">
              <div className='mb-12'>
                <p className={`${p_style}`}>{item.l1_1}</p>
                <Input placeholder={item.ph1} className="inline-input m-0"/>
              </div>
            </div>
            <div className="col-6">
              <div className='mb-12'>
                <p className={`${p_style}`}>{item.l1_2}</p>
                <Input placeholder={item.ph2} className="inline-input m-0"/>
              </div>
            </div>
            <div className="col-6">
              <div className='mb-12'>
                <p className={`${p_style}`}>{item.l1_3}</p>
                <Input placeholder={item.ph3} className="inline-input m-0"/>
              </div>
            </div>
            <div className="col-6">
              <div className='mb-12'>
                <p className={`${p_style}`}>{item.l1_4}</p>
                <Input placeholder={item.ph4} className="inline-input m-0"/>
              </div>
            </div>
            <div className="col-6">
              <div className='mb-12'>
                <p className={`${p_style}`}>{item.l1_5}</p>
                <Input placeholder={item.ph5} className="inline-input m-0"/>
              </div>
            </div>
            <div className="col-6">
              <div className='mb-12'>
                <p className={`${p_style}`}>{item.l1_6}</p>
                <Input placeholder={item.ph6} className="inline-input m-0"/>
              </div>
            </div>
            <div className="col-6">
              <div className='mb-12'>
                <p className={`${p_style}`}>{item.l1_7}</p>
                <DatePicker placeholder={item.ph7} className='inline-input m-0' style={{ width: '100%' }} />
              </div>
            </div>
            <div className="col-6">
              <div className='mb-12'>
                <p className={`${p_style}`}>{item.l1_8}</p>
                <Input placeholder={item.ph8} className="inline-input m-0"/>
              </div>
            </div>
            <div className="col-6">
              <div className='mb-12'>
                <p className={`${p_style}`}>{item.l1_9}</p>
                <DatePicker placeholder={item.ph9} className='inline-input m-0' style={{ width: '100%' }} />
              </div>
            </div>
            <div className="col-6">
              <div className='mb-12'>
                <p className={`${p_style}`}>{item.l1_10}</p>
                <Input placeholder={item.ph10} className="inline-input m-0"/>
              </div>
            </div>
            <div className="col-6">
              <div className='mb-12'>
                <p className={`${p_style}`}>{item.l1_11}</p>
                <Input placeholder={item.ph11} className="inline-input m-0"/>
              </div>
            </div>

          </div>

          <div>
            <h6>{item.p1_1}</h6>
            <p className='p-0'>{item.p1_2}</p>

            <div className="row mt-3 mb-36">
              <div className="col-6">
                <span className='me-2 fs-17'>{item.p1_3}</span>
                <DownloadShareholderFormBtn width={255} content={'تنزيل النموذج '} />
              </div>
              <div className="col-6">
                <span className='me-2 fs-17'>{item.p1_4}</span>
                <UploadShareholderFormBtn width={255} content={'رفع النموذج'} />
                <Exclamation className='ms-3' />
              </div>
            </div>

            <div className="staff-form mb-5">
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
                  </div>
                </div>
                <div className="col-4">
                  <div className='input'>
                    <div className="label">{item.l2_5}</div>
                    <Input className="text-input"/>
                  </div>
                </div>
                <div className="col-4">
                  <div className='input'>
                    <div className="label">{item.l2_6}</div>
                    <Input className="text-input"/>
                  </div>
                </div>
              </div>

              <AddNameBtn content={'اضافة اسم جديد'} />

            </div>
          </div>
        </div>

        <div className='p-in'>
          <div>
            <h6>{item.p2_1}</h6>
            <p className='p-0 mb-12'>{item.p2_2}</p>
            <p className='p-0 mb-3'>{item.p2_3}</p>

            <div className="staff-form">
              <div className="row">
                <div className="col-4">
                  <div className='input'>
                    <div className="label">{item.l3_1}</div>
                    <Input className="text-input"/>
                  </div>
                </div>
                <div className="col-4">
                  <div className='input'>
                    <div className="label">{item.l3_2}</div>
                    <Input className="text-input"/>
                  </div>
                </div>
                <div className="col-4">
                  <div className='input'>
                    <div className="label">{item.l3_3}</div>
                    <Input className="text-input"/>
                  </div>
                </div>
                <div className="col-4">
                  <div className='input'>
                    <div className="label">{item.l3_4}</div>
                    <Input className="text-input"/>
                  </div>
                </div>
                <div className="col-4">
                  <div className='input'>
                    <div className="label">{item.l3_5}</div>
                    <Input className="text-input"/>
                  </div>
                </div>
                <div className="col-4">
                  <div className='input'>
                    <div className="label">{item.l3_6}</div>
                    <Input className="text-input"/>
                  </div>
                </div>
                <div className="col-4">
                  <div className='input'>
                    <div className="label">{item.l3_7}</div>
                    <Input className="text-input"/>
                  </div>
                </div>
                <div className="col-4">
                  <div className='input'>
                    <div className="label">{item.l3_8}</div>
                    <Input className="text-input"/>
                  </div>
                </div>
                <div className="col-4">
                  <div className='input'>
                    <div className="label">{item.l3_9}</div>
                    <Input className="text-input"/>
                  </div>
                </div>
              </div>

              <AddNameBtn content={'اضافة اسم جديد'} />

            </div>
          </div>

        </div>
      </div>

      <NavigateItems item={11} />
    </div>
  )
}
