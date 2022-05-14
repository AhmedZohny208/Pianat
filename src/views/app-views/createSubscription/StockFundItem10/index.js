import React, { useState } from 'react'
import { Radio, Select, Input } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item10'
import ListedInput from '../../../../components/shared-components/Form/ListedInput'
import SelectInput from '../../../../components/shared-components/Form/SelectInput'
import SingleOption from '../../../../components/shared-components/Form/SingleOption'

const { Option } = Select

const style = { width: '31px', display: 'inline-block' }

export default function StockFundItem10({ openSidebar }) {
  const [target, setTarget] = useState('')
  const [target1, setTarget1] = useState('')
  const [target2, setTarget2] = useState('')
  const [target3, setTarget3] = useState('')
  const [items, setItems] = useState([])
  const [items1, setItems1] = useState([])
  const [items2, setItems2] = useState([])
  const [items3, setItems3] = useState([])

  const [options, setOptions] = useState(['بنك مصر', 'بنك CIB'])
  const [newOption, setNewOption] = useState('')

  const addItem = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (newOption) {
        setOptions([...options, newOption])
        setNewOption('')
      }
    }
  }

  return (
    <div className='stock-fund-item'>
      <Header
        title={'10. أصول وموجودات الصندوق'}
        progress={50}
        info={'البند العاشر'}
        openSidebar={openSidebar}
      />

      <div className='content-rows'>
        <div className='d-flex'>
          <div className='title'>{item.t1}</div>
          <div className='desc'>
            <div className='blue mb-3'>
              <Radio.Group>
                <Radio value={1}>{item.p1_1}</Radio>
                <Radio value={2}>{item.p1_2}</Radio>
              </Radio.Group>
            </div>
            <div>
              <p className='text-grey mb-2'>{item.p1_3}</p>
              <ListedInput
                placeholder={item.ph1}
                ph2={'اضغط enter للادخال'}
                value={target}
                setValue={setTarget}
                items={items}
                setItems={setItems}
              />
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'>{item.t2}</div>
          <div className='desc'>{item.p2}</div>
        </div>

        <div className='d-flex py-2'>
          <div className='title'></div>
          <div className='desc'>
            <h6 className='mb-3 fw-600'>{item.p3_1}</h6>
            <p className='lh-26 mb-0'>{item.p3_2}</p>
          </div>
        </div>

        <div className='d-flex'>
          <div className='title'></div>
          <div className='desc'>
            <h6 className='mb-3 fw-600'>{item.p4_1}</h6>
            <p className='lh-26 mb-3'>{item.p4_2}</p>

            <div>
              <ul className='mb-4'>
                <li className='mb-4'>
                  <div className='mb-1'>
                    <span className='label' style={style}>
                      {item.p4_3}
                    </span>
                    <Select
                      className='mx-3 w-45'
                      placeholder={item.ph1}
                      dropdownRender={(menu) => (
                        <>
                          {menu}
                          <SelectInput
                            value={newOption}
                            onChange={(e) => setNewOption(e.target.value)}
                            onKeyDown={addItem}
                            placeholder='اضافة بنك جديد'
                          />
                        </>
                      )}
                      dropdownAlign={{ offset: [0, 8] }}
                    >
                      {options.map((option) => (
                        <Option value={option}>
                          <SingleOption classn='sm' option={option} />
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div>{item.p4_6}</div>
                </li>
                <li className='mb-4'>
                  <div className='mb-1'>
                    <span className='label' style={style}>
                      {item.p4_4}
                    </span>
                    <Select
                      className='mx-3 w-45'
                      placeholder={item.ph1}
                      dropdownRender={(menu) => (
                        <>
                          {menu}
                          <SelectInput
                            value={newOption}
                            onChange={(e) => setNewOption(e.target.value)}
                            onKeyDown={addItem}
                            placeholder='اضافة بنك جديد'
                          />
                        </>
                      )}
                      dropdownAlign={{ offset: [0, 8] }}
                    >
                      {options.map((option) => (
                        <Option value={option}>
                          <SingleOption classn='sm' option={option} />
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div>{item.p4_7}</div>
                </li>
                <li className='mb-4'>
                  <div className='mb-1'>
                    <span className='label' style={style}>
                      {item.p4_5}
                    </span>
                    <Select
                      className='mx-3 w-45'
                      placeholder={item.ph1}
                      dropdownRender={(menu) => (
                        <>
                          {menu}
                          <SelectInput
                            placeholder='اضافة بنك جديد'
                            value={newOption}
                            onChange={(e) => setNewOption(e.target.value)}
                            onKeyDown={addItem}
                          />
                        </>
                      )}
                      dropdownAlign={{ offset: [0, 8] }}
                    >
                      {options.map((option) => (
                        <Option value={option}>
                          <SingleOption classn='sm' option={option} />
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div>{item.p4_8}</div>
                </li>
                <li className='mb-4'>
                  <div className='mb-1'>
                    <span className='label' style={style}>
                      {item.p4_5}
                    </span>
                    <Select
                      className='mx-3 w-45'
                      placeholder={item.ph1}
                      dropdownRender={(menu) => (
                        <>
                          {menu}
                          <SelectInput
                            placeholder='اضافة بنك جديد'
                            value={newOption}
                            onChange={(e) => setNewOption(e.target.value)}
                            onKeyDown={addItem}
                          />
                        </>
                      )}
                      dropdownAlign={{ offset: [0, 8] }}
                    >
                      {options.map((option) => (
                        <Option value={option}>
                          <SingleOption classn='sm' option={option} />
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div>{item.p4_9}</div>
                </li>

                <li className='mb-3'>{item.p4_10}</li>
                <li>{item.p4_11}</li>
              </ul>
            </div>

            <div>
              <div className='mb-4'>
                <p className='fw-bold mb-3'>{item.p4_12}</p>
                <ListedInput
                  placeholder={'اكتب هنا'}
                  value={target1}
                  setValue={setTarget1}
                  items={items1}
                  setItems={setItems1}
                  minHeight={60}
                />
              </div>
              <div className='mb-4'>
                <p className='fw-bold mb-3'>{item.p4_13}</p>
                <ListedInput
                  placeholder={'اكتب هنا'}
                  value={target2}
                  setValue={setTarget2}
                  items={items2}
                  setItems={setItems2}
                  minHeight={60}
                />
              </div>
              <div className='mb-4'>
                <p className='fw-bold mb-3'>{item.p4_14}</p>
                <ListedInput
                  placeholder={'اكتب هنا'}
                  value={target3}
                  setValue={setTarget3}
                  items={items3}
                  setItems={setItems3}
                  minHeight={60}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavigateItems item={10} />
    </div>
  )
}
