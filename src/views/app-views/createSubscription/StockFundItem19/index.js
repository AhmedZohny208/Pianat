import React, { useState } from 'react'
import { Input, DatePicker, Select, Radio, Space } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item19'
import GreenHint from '../../../../components/shared-components/Hints/GreenHint'
import SingleOption from '../../../../components/shared-components/Form/SingleOption'
import Yearly from '../../../../components/shared-components/Calender/yearly'
import Monthly from '../../../../components/shared-components/Calender/monthly'
import Weekly from '../../../../components/shared-components/Calender/weekly'

const { Option } = Select

export default function StockFundItem19({ openSidebar }) {
  const [selectVal1, setSelectVal1] = useState('')
  const [selectVal2, setSelectVal2] = useState('')

  const [month, setMonth] = useState('')
  const [week, setWeek] = useState('')
  const [day, setDay] = useState('')

  const [month2, setMonth2] = useState('')
  const [week2, setWeek2] = useState('')
  const [day2, setDay2] = useState('')

  const onSelect1Change = (val) => {
    setSelectVal1(val)
    setMonth('')
    setWeek('')
    setDay('')
  }
  const onSelect2Change = (val) => {
    setSelectVal2(val)
    setMonth2('')
    setWeek2('')
    setDay2('')
  }

  return (
    <div className='stock-fund-item'>
      <Header
        title={'19. شراء / استرداد الوثائق'}
        progress={10}
        info={'البند التاسع عشر'}
        openSidebar={openSidebar}
      />

      <div className='content-rows'>
        <div className='d-flex align-items-start'>
          <div className='title'>{item.t1}</div>
          <div className='desc'>
            <div className='row'>
              <div className='col-6 mb-4'>
                {item.p1_1}
                <Select
                  dropdownAlign={{ offset: [1, 3] }}
                  placeholder={item.ph1}
                  className='rotating-repeat w-60'
                  dropdownClassName='rotating-dropdown'
                  onChange={onSelect1Change}
                >
                  {item.repeat.map((e) => (
                    <Option value={e}>
                      <SingleOption classn={'sm'} option={e} />
                    </Option>
                  ))}
                </Select>
              </div>
              <div className='col-6'>
                {selectVal1 === 'سنوي' ? (
                  <Yearly
                    month={month}
                    setMonth={setMonth}
                    week={week}
                    setWeek={setWeek}
                    day={day}
                    setDay={setDay}
                  />
                ) : selectVal1 === 'شهري' ? (
                  <Monthly
                    week={week}
                    setWeek={setWeek}
                    day={day}
                    setDay={setDay}
                  />
                ) : selectVal1 === 'اسبوعي' ? (
                  <Weekly day={day} setDay={setDay} />
                ) : (
                  ''
                )}
              </div>
            </div>

            <div className='mb-4'>
              <p>{item.l1}</p>
              <Radio.Group className='black'>
                <Space direction='vertical'>
                  <Radio value={1}>{item.l2}</Radio>
                  <Radio value={2}>{item.l3}</Radio>
                </Space>
              </Radio.Group>
            </div>

            <div>
              <div className='row'>
                <div className='col-4'>
                  <div className='mb-3'>
                    <div className='mb-2'>{item.l1}</div>
                    <Input className='inline-input m-0' />
                  </div>
                  <div className='mb-3'>
                    <div className='mb-2'>{item.l3}</div>
                    <Input className='inline-input m-0' />
                  </div>
                </div>
                <div className='col-4 offset-2'>
                  <div className='mb-3'>
                    <div className='mb-2'>{item.l1}</div>
                    <Input className='inline-input m-0' />
                    <GreenHint content={item.hint} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t2}</div>
          <div className='desc'>
            <p className='mb-1 lh-lg'>
              {item.p2_1}
              {item.p2_2}
            </p>
            <p className='mb-1 lh-lg'>
              {item.p2_3}
              {item.p2_4}
            </p>
            <p className='mb-1 lh-lg'>{item.p2_5}</p>
            <p className='mb-1 lh-lg'>{item.p2_6}</p>
          </div>
        </div>

        <div className='d-flex align-items-start'>
          <div className='title mt-2'>{item.t3}</div>
          <div className='desc p-in'>
            <div className='row'>
              <div className='col-6 mb-4'>
                {item.p3_1}
                <Select
                  dropdownAlign={{ offset: [1, 3] }}
                  placeholder={item.ph1}
                  className='rotating-repeat w-60'
                  dropdownClassName='rotating-dropdown'
                  onChange={onSelect2Change}
                >
                  {item.repeat.map((e) => (
                    <Option value={e}>
                      <SingleOption classn={'sm'} option={e} />
                    </Option>
                  ))}
                </Select>
              </div>
              <div className='col-6 mb-4'>
                {selectVal2 === 'سنوي' ? (
                  <Yearly
                    month={month2}
                    setMonth={setMonth2}
                    week={week2}
                    setWeek={setWeek2}
                    day={day2}
                    setDay={setDay2}
                  />
                ) : selectVal2 === 'شهري' ? (
                  <Monthly
                    week={week2}
                    setWeek={setWeek2}
                    day={day2}
                    setDay={setDay2}
                  />
                ) : selectVal2 === 'اسبوعي' ? (
                  <Weekly day={day2} setDay={setDay2} />
                ) : (
                  ''
                )}
              </div>
            </div>

            <p className='mb-3'>
              {item.p3_3}
              <DatePicker
                placeholder={item.ph2}
                className='inline-input'
                style={{ width: '188px' }}
              />
              {item.p3_4}
            </p>
            <p className='mb-0 lh-lg'>{item.p3_5}</p>
            <p className='mb-0 lh-lg'>{item.p3_6}</p>
            <p className='mb-0 lh-lg'>{item.p3_7}</p>
          </div>
        </div>
      </div>

      <NavigateItems item={19} />
    </div>
  )
}
