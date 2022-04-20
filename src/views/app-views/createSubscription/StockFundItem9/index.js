import React, { useState } from 'react'
import ListedInput from '../../../../components/shared-components/Form/ListedInput'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item9'

export default function StockFundItem9({openSidebar}) {
  const [target, setTarget] = useState('')
  const [items, setItems] = useState(['تتبع إدارة الصندوق سياسة استثمارية تستهدف تحقيق عائد على استثمارات الصندوق بما يتناسب مع'])
  return (
    <div className='stock-fund-item'>
      <Header
        title={'9. نوعية المستثمر المخاطب بنشرة الاكتتاب'}
        progress={10}
        info={'البند التاسع'}
        openSidebar={openSidebar}
      />

      <div className="content">
        <div className='inline-input d-flex align-items-start p-in-first'>
          <p
            style={{ marginLeft: '8px', marginTop: '5px', width: '109px' }}
            className='p-0'
          >
            {item.p1}
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

      <NavigateItems item={9} />
    </div>
  )
}
