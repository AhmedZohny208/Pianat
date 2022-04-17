import React, { useState } from 'react'
import { Input, Radio, Select } from 'antd'
import item from '../../../../configs/stockFundItems/Item7'
import { ReactComponent as Percentage } from '../../../../components/shared-components/svgs/percentage.svg'
import AddName from '../../../../components/shared-components/Buttons/AddName'
import ListedInput from '../../../../components/shared-components/Form/ListedInput'

const { Option } = Select

export default function Card() {
  const [target, setTarget] = useState('')
  const [purpose, setPurpose] = useState('')
  const [items, setItems] = useState([])
  const [itemsTwo, setItemsTwo] = useState([])

  return (
    <div className='new-category-card'>

      <div className='header'>
        <div>
          <p>
            {item.p14}{' '}
            <span>{item.p14_1}</span>
          </p>
        </div>
        <div>
          <p>
            {item.p15}{' '}
            <span>{item.p15_1}</span>
          </p>
        </div>
      </div>

      <div className='mb-3'>
        <p className='fs-6 fw-600 p-0 mb-2'>{item.p16}</p>
        <ListedInput
          placeholder={'اكتب هنا'}
          value={target}
          setValue={setTarget}
          items={items}
          setItems={setItems}
          minHeight={85}
        />
      </div>
      <div className='mb-60'>
        <p className='fs-6 fw-600 p-0 mb-2'>{item.p17}</p>
        <ListedInput
          placeholder={'اكتب هنا'}
          value={purpose}
          setValue={setPurpose}
          items={itemsTwo}
          setItems={setItemsTwo}
          minHeight={85}
        />
      </div>

      <div className='select-boxs'>
        <div className='raw'>
          <div className='right'>
            <div className='label'>{item.l1}</div>
            <Select placeholder={item.ph1} style={{ width: '100%' }}>
              <Option value='jack'>Jack</Option>
            </Select>
          </div>
          <div className='left'>
            <div className='label'>{item.l2}</div>
            <Select placeholder={item.ph2} style={{ width: '100%' }}>
              <Option value='jack'>Jack</Option>
            </Select>
          </div>
        </div>

        <div className='raw'>
          <div className='right'>
            <div className='label'>{item.l3}</div>
            <Select placeholder={item.ph3} style={{ width: '100%' }}>
              <Option value='jack'>Jack</Option>
            </Select>
          </div>
          <div className='left'>
            <div className='label'>{item.l4}</div>
            <Select placeholder={item.ph4} style={{ width: '100%' }}>
              <Option value='jack'>Jack</Option>
            </Select>
          </div>
        </div>

        <div className='raw'>
          <div className='right'>
            <div className='label'>{item.l5}</div>
            <Select placeholder={item.ph5} style={{ width: '100%' }}>
              <Option value='jack'>Jack</Option>
            </Select>
          </div>
          <div className='left'>
            <div className='label'>{item.l6}</div>
            <Select placeholder={item.ph6} style={{ width: '100%' }}>
              <Option value='jack'>Jack</Option>
            </Select>
          </div>
        </div>
      </div>

      <div className="radio-boxs">
        <div className="raw">
          <div className="right">
            <div className="label">{item.l7}</div>
            <Radio.Group>
              <Radio value={1}>قابل للتداول</Radio>
              <Radio value={2}>غير قابلة للتداول</Radio>
            </Radio.Group>
          </div>
          <div className="left">
            <div className="label">{item.l8}</div>
            <Radio.Group>
              <Radio value={1}>عائد ثابت</Radio>
              <Radio value={2}>عائد متغير</Radio>
            </Radio.Group>
          </div>
        </div>

        <div className="raw">
          <div className="right">
            <div className="label">{item.l9}</div>
            <Radio.Group>
              <Radio value={1}>محلي</Radio>
              <Radio value={2}>اجنبي</Radio>
            </Radio.Group>
          </div>
          <div className="left d-flex justify-content-between align-items-center">
            <div className="label mb-0">{item.l10}</div>
            <div className='position-relative'>
              {item.l12}
              <Input className='inline-input' style={{ width: '93px' }} />
              <Percentage className='percentage' />
            </div>
            <div className='position-relative'>
              {item.l13}
              <Input className='inline-input' style={{ width: '93px' }} />
              <Percentage className='percentage' />
            </div>
          </div>
        </div>
        <div className="raw">
          <div className="right">
            <div className="label">{item.l11}</div>
            <Radio.Group>
              <Radio value={1}>قابل للتحويل</Radio>
              <Radio value={2}>غير قابل للتحويل</Radio>
            </Radio.Group>
          </div>
        </div>
      </div>

      <hr />

      <AddName content={'اضافة فئة جديدة'} />

    </div>
  )
}
