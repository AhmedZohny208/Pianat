import React, { useState } from 'react'
import { Input, DatePicker, Checkbox, Divider, Select } from 'antd'
import DownloadTransparent from '../Buttons/DownloadDoc'
import { ReactComponent as Arrow } from '../svgs/accordionArrow.svg'
import { ReactComponent as DownArrow } from '../svgs/accordionDown.svg'
import { ReactComponent as Timer } from '../svgs/timerGold.svg'
import { ReactComponent as Exclamation } from '../svgs/exclamationBlack.svg'
import SingleOption from '../Form/SingleOption'
import SelectInput from '../Form/SelectInput'
import moment from 'moment'

const { Option } = Select
const dateFormat = 'YYYY/MM/DD'

const decisions = [
  'اغلاق المخالفة',
  'انذار',
  'دعوى',
  'مهلة تنفيذ',
  'غرامة مالية',
  'تحويل للتفتيش',
  'تحويل للازام',
]

export default function ServiceProviderViolation({ violation }) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <>
      <div
        className={`full-info service-provider-violation ${
          showInfo ? 'show-info' : ''
        }`}
      >
        <div
          className={`info cursor-pointer ${
            showInfo && 'd-flex justify-content-between'
          }`}
          onClick={() => setShowInfo(!showInfo)}
        >
          <div className='title'>
            <Arrow />
            <h6>{violation.title}</h6>
          </div>
          {!showInfo && (
            <>
              <p className='fundNo'>
                رقم ترخيص الصندوق: <span>{violation.fundNo}</span>
              </p>
              <p className='late'>
                التأخير: <span>{`${violation.late} يوم`}</span>
              </p>
              <p className='recomendation'>
                التوصية:
                <span>{violation.recommendation}</span>
              </p>
              <p className='action'>
                القرار المتخذ:
                <span>{violation.decision}</span>
              </p>
            </>
          )}
          <DownArrow
            style={{ cursor: 'Pointer' }}
            onClick={() => setShowInfo(!showInfo)}
            className={`arrow ${showInfo && 'show-info'}`}
          />
        </div>

        {showInfo && (
          <div className='details'>
            <div className='input mb-4'>
              <label>اسم صندوق الاستثمار</label>
              <Input
                className='small w-100'
                value={'صندوق إستثمار بنك عودة المتوازن الاسالمى- إزدهار'}
              />
            </div>
            <div className='row'>
              <div className='col-3 mb-4'>
                <div className='input'>
                  <label>رقم ترخيص الصندوق</label>
                  <Input className='small w-100' value={124780} />
                </div>
              </div>
              <div className='col-3 mb-4'>
                <div className='input'>
                  <label>التاريخ الملزم لتقديم التقرير</label>
                  <DatePicker
                    defaultValue={moment('2022/03/15', dateFormat)}
                    format={dateFormat}
                    className='small w-100 mx-0'
                    placeholder=''
                  />
                </div>
              </div>
              <div className='col-3 mb-4'>
                <div className='input'>
                  <label>التاريخ المحدد لتلافي المخالفة</label>
                  <DatePicker
                    defaultValue={moment('2022/04/20', dateFormat)}
                    format={dateFormat}
                    className='small w-100 mx-0'
                    placeholder=''
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'>
                <div className='input mb-4'>
                  <label className='mb-3'>مرفقات تلافي المخالفة</label>
                  <DownloadTransparent />
                </div>
                <div className='gold'>
                  <Timer />
                  <p>
                    تنتهى فترة توفيق الاوضاع
                    <br /> يوم 12 مارس 2022
                  </p>
                </div>
                <div className='check-box'>
                  <Checkbox>تم تلافى المخالفة</Checkbox>
                  <Exclamation />
                </div>
              </div>

              <div className='col-3'>
                <div className='input'>
                  <label>التأخير</label>
                  <Input className='small red w-100' value={'10 ايام'} />
                </div>
              </div>

              <div className='col-6'>
                <div>
                  <label>تعليقات :</label>
                  <div className='comments'>
                    <div className='comments-container'>
                      <div className='comment'>
                        <div className='avatar'>أ</div>
                        <div className='details'>
                          <p className='name'>
                            أحمد عادل
                            <span>(مراقب الهيئة)</span>
                          </p>
                          <p className='from'>منذ يوم</p>
                          <p className='comment-info'>
                            سنحتاج الى اضافة بعض الملفات على المخالفات
                          </p>
                        </div>
                      </div>
                    </div>

                    <Divider />

                    <div className='add-comment'>
                      <div className='avatar'>أ</div>
                      <Input placeholder='أضف تعليقك' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Divider />

            <div className='decision'>
              <div className='col-3'>
                <div className='input'>
                  <label>التوصية الاولى </label>
                  <Input className='small lg-height' value={'اغلاق المخالفة'} />
                </div>
              </div>
              <div className='col-3'>
                <div className='input'>
                  <label>التوصية الثانية </label>
                  <Input className='small lg-height' value={'اغلاق المخالفة'} />
                </div>
              </div>
              <div className='col-3'>
                <div className='input'>
                  <label>القرار المتخذ</label>
                  <Select
                    placeholder='اختر قرار'
                    className='mx-0'
                    dropdownAlign={{ offset: [0, 13] }}
                    dropdownRender={(menu) => (
                      <>
                        {menu}
                        <SelectInput placeholder='اضافة قرار جديد' />
                      </>
                    )}
                  >
                    {decisions.map((decision, i) => (
                      <Option key={i} value={decision}>
                        <SingleOption option={decision} classn='sm' />
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className='col-3 text-end'>
                <button className='btn'>تطبيق</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
