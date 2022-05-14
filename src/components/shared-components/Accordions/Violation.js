import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../svgs/accordionArrow.svg'
import { ReactComponent as DownloadGold } from '../svgs/accodionDownloadGold.svg'
import { ReactComponent as DownArrow } from '../svgs/accordionDown.svg'
import { ReactComponent as Timer } from '../svgs/timerGold.svg'
import { ReactComponent as Exclamation } from '../svgs/exclamationBlack.svg'
import { Input, Divider, Select, Checkbox } from 'antd'
import DownloadTransparent from '../Buttons/DownloadDoc'
import SingleOption from '../Form/SingleOption'
import SelectInput from '../Form/SelectInput'

const decisions = [
  'اغلاق المخالفة',
  'انذار',
  'دعوى',
  'مهلة تنفيذ',
  'غرامة مالية',
  'تحويل للتفتيش',
  'تحويل للازام',
]

const { TextArea } = Input
const { Option } = Select

export default function Violations({ violation }) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <>
      <div className={`full-info ${showInfo ? 'show-info' : ''}`}>
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
              <p className='number'>
                العمليات المخالفه:<span>{violation.number}</span>
              </p>
              <button className='btn download'>
                <DownloadGold />
                تنزيل المرفقات
              </button>
              <p className='recomendation'>
                التوصية:
                <span>{violation.recommendation}</span>
              </p>
              <p className='action'>
                القرار المتخذ:
                <span>{violation.action}</span>
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
            <div className='d-flex'>
              <div className='right d-flex'>
                <div style={{ width: '50%' }}>
                  <div className='input'>
                    <label>محددات نشرات الاكتتاب</label>
                    <Input className='small' value={1000} />
                  </div>
                  <div className='input'>
                    <label>المسؤل</label>
                    <Input className='small' value={'مدير الاستثمار'} />
                  </div>
                  <div className='input'>
                    <label className='mb-3'>مرفقات تلافي المخالفة</label>
                    <DownloadTransparent />
                  </div>
                </div>

                <div style={{ width: '50%' }}>
                  <div className='input'>
                    <label>العمليات المخالفة</label>
                    <Input className='small' value={1200} />
                  </div>
                  <div className='input'>
                    <label>تاريخ تلافي المخالفة</label>
                    <Input className='small' value={'22 فبراير 2022'} />
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
              </div>

              <div className='left'>
                <div>
                  <label>خطط العمل لتلافى المخالفة</label>
                  <TextArea
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    value={
                      'سيتم خفض العدد لكي يطابق النشرة وما الى ذالك من البنود في اقرب وقت ممكن'
                    }
                  />
                </div>
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
              <div className='d-flex'>
                <div className='input'>
                  <label>التوصية</label>
                  <Select
                    placeholder='اختر قرار'
                    className='mx-0'
                    dropdownAlign={{ offset: [0, 13] }}
                    dropdownRender={(menu) => (
                      <>
                        {menu}
                        <SelectInput placeholder='اضافة بنك جديد' />
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
              <button className='btn'>تطبيق</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
