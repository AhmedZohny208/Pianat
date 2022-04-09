import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../svgs/accordionArrow.svg'
import { ReactComponent as DownloadGold } from '../svgs/accodionDownloadGold.svg'
import { ReactComponent as DownArrow } from '../svgs/accordionDown.svg'
import { Input, Divider, Select } from 'antd'

const { TextArea } = Input
const { Option } = Select

export default function Violations({ violation }) {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <>
      <div className='full-info'>
        <div className='info'>
          <div className='title'>
            <Arrow />
            <h6>{violation.title}</h6>
          </div>
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
                    <label>مرفقات تلافي المخالفة</label>
                    <button className='btn'>تنزبل</button>
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
                  <Select placeholder='اختر قرار'>
                    <Option value='jack'>Jack</Option>
                  </Select>
                </div>
                <div className='input'>
                  <label>القرار المتخذ</label>
                  <Select placeholder='اختر قرار'>
                    <Option value='jack'>Jack</Option>
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
