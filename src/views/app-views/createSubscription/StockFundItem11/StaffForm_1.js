import React, { useState } from 'react'
import { Input } from 'antd'
import item from '../../../../configs/stockFundItems/Item11'
import AddNameBtn from '../../../../components/shared-components/Buttons/AddName'
import data from './data1'
import SingleName from './SingleName'

export default function StaffForm_1() {
  const [newName, setNewName] = useState({
    name: '',
    sharesNum: '',
    value: '',
    currency: '',
    shareVal: '',
    numOfDoc: '',
  })
  const [names, setNames] = useState(data)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setNewName({ ...newName, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newObj = { ...newName, key: new Date().getTime().toString() }
    setNames([...names, newObj])
  }

  const removeName = (key) => {
    const newNames = names.filter((name) => name.key !== key)
    setNames(newNames)
  }

  return (
    <>
      <div className={`staff-form-data ${names.length > 0 && 'names-exist'}`}>
        <div className={`data-header ${names.length > 0 && 'names-exist'}`}>
          <p>
            اجمالى عدد المساهمين: <span>28</span>
          </p>
          <p>
            اجمال عدد الاسهم: <span>54326</span>
          </p>
        </div>

        {names.map((e, i) => (
          <SingleName
            key={e.key}
            docNum={e.key}
            name={e.name}
            sharesNum={e.sharesNum}
            value={e.value}
            currency={e.currency}
            shareVal={e.shareVal}
            numOfDoc={e.numOfDoc}
            removeName={removeName}
            handleChange={handleChange}
            newName={newName}
            setNewName={setNewName}
          />
        ))}
      </div>

      <div className={`staff-form mb-5 ${names.length > 0 && 'names-exist'}`}>
        <div className='row'>
          <div className='col-4'>
            <div className='input'>
              <div className='label'>{item.l2_1}</div>
              <Input
                className='text-input'
                id='name'
                name='name'
                value={newName.name}
                onChange={handleChange}
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
                value={newName.sharesNum}
                onChange={handleChange}
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
                value={newName.value}
                onChange={handleChange}
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
                value={newName.currency}
                onChange={handleChange}
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
                value={newName.shareVal}
                onChange={handleChange}
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
                value={newName.numOfDoc}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <AddNameBtn content={'اضافة اسم جديد'} onclick={handleSubmit} />
      </div>
    </>
  )
}
