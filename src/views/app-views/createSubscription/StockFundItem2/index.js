import React from 'react'
import { Input } from 'antd'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item2'

const style = { width: '188px' }

export default function StockFundItem2({openSidebar}) {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'2. مقدمة وأحكام عامة'}
        progress={40}
        info={'البند التاني'}
        openSidebar={openSidebar}
      />

      <div className='content'>
        <div className='content-w-input p-in-first'>
          {item.p1_1}
          <Input className='inline-input' placeholder={item.ph1} style={style} />
          {item.p1_2}
        </div>

        <div className='p-in'>{item.p2}</div>
        <div className='p-in-first'>{item.p3}</div>
        <div className='p-in'>{item.p4}</div>
        <div className='p-in-first'>{item.p5}</div>

        <div className='content-w-input p-in'>
          {item.p6_1}
          <Input className='inline-input' placeholder={item.ph1} style={style} />
          {item.p6_2}
          <Input className='inline-input' placeholder={item.ph1} style={style} />
          {item.p6_3}
        </div>

        <div className='content-w-input p-in-first'>
          {item.p7_1}
          <Input className='inline-input' placeholder={item.ph1} style={style} />
          {item.p7_2}
          <Input className='inline-input' placeholder={item.ph1} style={style} />
          {item.p7_3}
          <p>{item.p7_4}</p>
          <p>
            {item.p7_5}
            {' '}
            {item.p7_6}
          </p>
        </div>
      </div>

      <NavigateItems item={2} />
    </div>
  )
}
