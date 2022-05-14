import { Input, Select } from 'antd'
import React, { useState } from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item, { unorderedList } from '../../../../configs/stockFundItems/Item1'
import { ReactComponent as Close } from '../../../../components/shared-components/svgs/close.svg'
import AddNameBtn from '../../../../components/shared-components/Buttons/AddName'
import SingleOption from '../../../../components/shared-components/Form/SingleOption'
import DynamicSelect from './DynamicSelect'
import Yearly from '../../../../components/shared-components/Calender/yearly'
import Monthly from '../../../../components/shared-components/Calender/monthly'
import Weekly from '../../../../components/shared-components/Calender/weekly'

const { Option } = Select

export default function StockFundItem1({ openSidebar }) {
  const [selectVal1, setSelectVal1] = useState('')

  const [month, setMonth] = useState('')
  const [week, setWeek] = useState('')
  const [day, setDay] = useState('')

  const onSelect1Change = (val) => {
    setSelectVal1(val)
    setMonth('')
    setWeek('')
    setDay('')
  }

  return (
    <div className='stock-fund-item'>
      <Header
        title={'1. تعريفات عامة عن النشرة'}
        progress={10}
        info={'البند الأول'}
        openSidebar={openSidebar}
      />

      <div className='content-rows'>
        <div className='d-flex'>
          <div className='title'>{item.t1}</div>
          <div className='desc'>{item.p1}</div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t2}</div>
          <div className='desc'>
            <div className='content-w-input'>
              {item.p2_1}
              <Input
                className='inline-input'
                placeholder={item.ph1}
                style={{ width: '188px' }}
              />
              {item.p2_2} {item.p2_3}
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t3}</div>
          <div className='desc'>
            <div className='content-w-input'>
              {item.p3_1}
              <Input
                className='inline-input'
                placeholder={item.ph1}
                style={{ width: '188px' }}
              />
              {item.p3_2}{' '}
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t4}</div>
          <div className='desc'>{item.p4}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t5}</div>
          <div className='desc'>{item.p5}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t6}</div>
          <div className='desc'>{item.p6}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t7}</div>
          <div className='desc'>{item.p7}</div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t8}</div>
          <div className='desc'>
            <div className='content-w-input'>
              {item.p8_1}
              <Input
                className='inline-input'
                placeholder={item.ph1}
                style={{ width: '188px' }}
              />
              {item.p2_2}
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t9}</div>
          <div className='desc'>{item.p9}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t10}</div>
          <div className='desc'>{item.p10}</div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t11}</div>
          <div className='desc'>
            <div className='content-w-input'>
              <p className='mb-2'>{item.p11_1}</p>
              {item.p11_2}
              <Input
                className='inline-input'
                placeholder={item.ph2}
                style={{ width: '368px' }}
              />
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t12}</div>
          <div className='desc'>{item.p12}</div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t13}</div>
          <div className='desc'>
            <div className='content-w-input'>
              {item.p13_1}
              <Input
                className='inline-input'
                placeholder={item.ph1}
                style={{ width: '188px' }}
              />
              {item.p13_2}
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t14}</div>
          <div className='desc'>
            <div className='content-w-input'>
              {item.p14_1}
              <Input
                className='inline-input'
                placeholder={item.ph1}
                style={{ width: '188px' }}
              />
              <span className='label'>{item.p14_2}</span>
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t15}</div>
          <div className='desc'>
            <p className='mb-3'>{item.p15_1}</p>
            <div className='row'>
              <div className='col-6 mb-4'>
                {item.p15_2}
                <Select
                  dropdownAlign={{ offset: [1, 3] }}
                  placeholder={item.ph3}
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
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t16}</div>
          <div className='desc'>
            <p className='mb-3'>{item.p16_1}</p>
            <div className='d-flex'>
              <div style={{ width: '15%', lineHeight: '40px' }}>
                <span className='label'>{item.p16_2}</span>
              </div>
              <div style={{ width: '85%' }}>
                <DynamicSelect />
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t17}</div>
          <div className='desc'>{item.p17}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t18}</div>
          <div className='desc'>{item.p18}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t19}</div>
          <div className='desc'>
            {item.p19_1} <br />
            {unorderedList.map((ele) => (
              <>
                <span className='unordered-inline'>{ele} </span>
                <span className='unordered-inline-bullet'></span>
              </>
            ))}
            <br />
            {item.p19_2}
          </div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t20}</div>
          <div className='desc'>{item.p20}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t21}</div>
          <div className='desc'>{item.p21}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t22}</div>
          <div className='desc'>{item.p22}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t23}</div>
          <div className='desc'>{item.p23}</div>
        </div>
        <div className='d-flex'>
          <div className='title'>{item.t24}</div>
          <div className='desc'>{item.p24}</div>
        </div>
      </div>

      <NavigateItems item={1} />
    </div>
  )
}
