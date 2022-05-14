import React from 'react'
import { Input } from 'antd'
import { ReactComponent as Close } from '../../../../components/shared-components/svgs/close.svg'

const { TextArea } = Input

export default function ChoosenItem({
  title,
  selectedRisks,
  setSelectedRisks,
}) {
  const removeItem = (title) => {
    const newArr = selectedRisks.filter((ele) => ele !== title)
    setSelectedRisks(newArr)
    console.log(newArr)
  }
  return (
    <>
      <div className='row choosen-item'>
        <div className='col-4'>
          <div className='row p-0'>
            <div className='col-10'>
              <p>{title}</p>
            </div>
            <div className='col-2'>
              <Close
                className='cursor-pointer'
                onClick={() => removeItem(title)}
              />
            </div>
          </div>
        </div>
        <div className='col-8'>
          <label className='fw-600 mb-6'>
            الاستراتيجية الموثقة فى النشرة من جانب مدير الاستثمار لمواجهة الخطر
          </label>
          <TextArea autoSize />

          <label className='fw-600 mb-6'>
            القوانين او التشريعات او القرارات الملزمة لمدير الاستثمار لمواجهة
            الخطر ( لا يوجد قوانين ملزمة ولكنه قرار استثماريى لمواجهة المخاطر )
          </label>
          <TextArea autoSize />
        </div>
      </div>
    </>
  )
}
