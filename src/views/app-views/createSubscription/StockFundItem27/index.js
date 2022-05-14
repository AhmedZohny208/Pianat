import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import Row1To5 from './Row1_5'
import Row6To10 from './Row6_10'
import Row11To20 from './Rows11_20'
import Row21To30 from './Rows21_30'

export default function StockFundItem27({openSidebar}) {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'27. الأعباء المالية'}
        progress={10}
        info={'البند السابع و العشرون'}
        openSidebar={openSidebar}
      />

      <div className="content-rows">
        <Row1To5 />
        <Row6To10 />
        <Row11To20 />
        <Row21To30 />
      </div>

      <NavigateItems item={27} />
    </div>
  )
}
