import React, { useState, useEffect } from 'react'
import { Input, Select } from 'antd'
import item from '../../../../configs/stockFundItems/Item16'
// import { ReactComponent as Edit } from '../../../../components/shared-components/svgs/editBlack.svg'
import SingleOption from '../../../../components/shared-components/Form/SingleOption'
import data from './data'

const { Option } = Select

export default function Form1_1() {
  const [selectVal, setSelectVal] = useState('')
  const [board, setBoard] = useState('')

  useEffect(() => {
    if (selectVal) {
      let value = ''
      selectVal.boardMembers.forEach((ele) => {
        console.log(ele)
        const element = `(${ele.name} - ${ele.id}) . `
        value += element
      })
      setBoard(value)
    }
  }, [selectVal])

  useEffect(() => {
    console.log(board)
  }, [board])

  const handleSelect = (val) => {
    setSelectVal(JSON.parse(val))
    console.log(val)
  }

  return (
    <>
      <p>{item.p1}</p>
      <div className='mb-3'>
        {item.p2}
        <Select
          placeholder='شركة أمين الحفظ'
          style={{ width: '72.5%' }}
          dropdownAlign={{ offset: [0, 8] }}
          onChange={handleSelect}
        >
          {data.map((option) => (
            <Option value={JSON.stringify(option)}>
              <SingleOption
                classn='sm'
                option={`${option.companyName} - ${option.idNum}`}
              />
            </Option>
          ))}
        </Select>
      </div>

      {selectVal && (
        <div className='row mb-36'>
          <div className='col-5'>
            <div className='mb-3'>
              <div className='mb-2 flex-cvhb'>
                <div>{item.l1_1}</div>
                {/* <Edit /> */}
              </div>
              <Input value={selectVal.address} className='grey-input' />
            </div>
          </div>

          <div className='col-5 offset-1'>
            <div className='mb-3'>
              <div className='mb-2 flex-cvhb'>
                <div>{item.l1_2}</div>
                {/* <Edit /> */}
              </div>
              <Input
                value={`${selectVal.ceo.name} - ${selectVal.ceo.id}`}
                className='grey-input'
              />
            </div>
          </div>
          <div className='col-5'>
            <div>
              <div className='mb-2 flex-cvhb'>
                <div>{item.l1_3}</div>
                {/* <Edit /> */}
              </div>
              <Input value={board} className='grey-input' />
            </div>
          </div>
          <div className='col-5 offset-1'>
            <div>
              <div className='mb-2 flex-cvhb'>
                <div>{item.l1_4}</div>
                {/* <Edit /> */}
              </div>
              <Input
                value={`${selectVal.chiefExcutive.name} - ${selectVal.chiefExcutive.id}`}
                className='grey-input'
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
