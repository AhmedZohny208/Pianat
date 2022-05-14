import React, { useEffect, useState } from 'react'
import item from '../../../../configs/stockFundItems/Item11'
import { Input } from 'antd'

export default function SingleName({
  docNum,
  name,
  sharesNum,
  value,
  currency,
  shareVal,
  numOfDoc,
  removeName,
  handleChange,
  newName,
  setNewName,
}) {
  const [modify, isModify] = useState(false)
  const [modifyName, setModifyName] = useState({
    name: '',
    sharesNum: '',
    value: '',
    currency: '',
    shareVal: '',
    numOfDoc: '',
  })

  useEffect(() => {
    if (modify) {
      setModifyName({
        name,
        sharesNum,
        value,
        currency,
        shareVal,
        numOfDoc,
      })
    }
  }, [modify])

  const handleUpdate = (e) => {
    const name = e.target.name
    const value = e.target.value
    setModifyName({ ...modifyName, [name]: value })
  }

  return (
    <>
      {modify ? (
        <div className='staff-form m-3'>
          <div className='row'>
            <div className='col-4'>
              <div className='input'>
                <div className='label'>{item.l2_1}</div>
                <Input
                  className='text-input'
                  id='name'
                  name='name'
                  value={modifyName.name}
                  onChange={handleUpdate}
                />
              </div>
            </div>
            <div className='col-4'>
              <div className='input'>
                <div className='label'>{item.l2_2}</div>
                <Input
                  className='text-input'
                  id='sharesNum'
                  name='sharesNum'
                  value={modifyName.sharesNum}
                  onChange={handleUpdate}
                />
              </div>
            </div>
            <div className='col-4'>
              <div className='input'>
                <div className='label'>{item.l2_3}</div>
                <Input
                  className='text-input'
                  id='value'
                  name='value'
                  value={modifyName.value}
                  onChange={handleUpdate}
                />
              </div>
            </div>
            <div className='col-4'>
              <div className='input'>
                <div className='label'>{item.l2_4}</div>
                <Input
                  className='text-input'
                  id='currency'
                  name='currency'
                  value={modifyName.currency}
                  onChange={handleUpdate}
                />
              </div>
            </div>
            <div className='col-4'>
              <div className='input'>
                <div className='label'>{item.l2_5}</div>
                <Input
                  className='text-input'
                  id='shareVal'
                  name='shareVal'
                  value={modifyName.shareVal}
                  onChange={handleUpdate}
                />
              </div>
            </div>
            <div className='col-4'>
              <div className='input'>
                <div className='label'>{item.l2_6}</div>
                <Input
                  className='text-input'
                  id='numOfDoc'
                  name='numOfDoc'
                  value={modifyName.numOfDoc}
                  onChange={handleUpdate}
                />
              </div>
            </div>

            <div className='mt-2'>
              <button
                className='btn save-changes'
                onClick={() => isModify(false)}
              >
                حفظ التعديل
              </button>
              <button
                className='btn delete-lg'
                onClick={() => removeName(docNum)}
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='single-name'>
          <div className='head'>
            <div className='number'>{docNum}#</div>
            <div>
              <button
                className='btn staff-form-modify'
                onClick={() => isModify(true)}
              >
                تعديل
              </button>
              <button
                className='btn staff-form-delete'
                onClick={() => removeName(docNum)}
              >
                حذف
              </button>
            </div>
          </div>
          <div className='content'>
            <div className='row'>
              <div className='col-4 mb-3'>
                <div className='label'>الاسم</div>
                <div className='value'>{name}</div>
              </div>
              <div className='col-4 mb-3'>
                <div className='label'>عدد الاسهم:</div>
                <div className='value'>{sharesNum}</div>
              </div>
              <div className='col-4 mb-3'>
                <div className='label'>القيمة الاسمية بالجنية</div>
                <div className='value'>{value}</div>
              </div>
              <div className='col-4 mb-3'>
                <div className='label'>عملة الوفاء</div>
                <div className='value'>{currency}</div>
              </div>
              <div className='col-4 mb-3'>
                <div className='label'>نسبة المساهمة</div>
                <div className='value'>{shareVal}</div>
              </div>
              <div className='col-4 mb-3'>
                <div className='label'>
                  عدد الوثائق مقابل راس مال شركة الصندوق
                </div>
                <div className='value'>{numOfDoc}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
