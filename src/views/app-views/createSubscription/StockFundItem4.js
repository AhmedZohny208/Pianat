import React, { useState } from 'react'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../configs/stockFundItems/Item4'
import ListedInput from '../../../components/shared-components/Form/ListedInput'

export default function StockFundItem4() {
  const [target, setTarget] = useState('')
  const [purpose, setPurpose] = useState('')
  const [items, setItems] = useState([])
  const [itemsTwo, setItemsTwo] = useState([])

  return (
    <div className='stock-fund-item'>
      <Header
        title={'4. هدف وغرض الصندوق'}
        progress={10}
        info={'البند الرابع'}
      />

      <div className='content-rows'>
        <div className='d-flex'>
          <div className='title'>{item.t1}</div>
          <div className='desc'>
            <p style={{ marginBottom: '13px' }}>{item.p1_1}</p>

            <div className='inline-input d-flex align-items-start'>
              <p
                style={{ marginLeft: '8px', marginTop: '5px', width: '109px' }}
              >
                {item.p1_2}
              </p>
              <ListedInput
                placeholder={item.ph1}
                ph2={item.ph2}
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
          <div className='desc'>
            <p style={{ marginBottom: '13px' }}>{item.p2_1}</p>
            <div className='inline-input d-flex align-items-start'>
              <p
                style={{ marginLeft: '8px', marginTop: '5px', width: '109px' }}
              >
                {item.p2_2}
              </p>
              <ListedInput
                placeholder={item.ph1}
                ph2={item.ph2}
                value={purpose}
                setValue={setPurpose}
                items={itemsTwo}
                setItems={setItemsTwo}
              />
            </div>
          </div>
        </div>
      </div>

      <NavigateItems item={4} />
    </div>
  )
}
