import React from 'react'
import Quarters from '../../../../components/shared-components/DropDowns/Quarters'
import EquityFundTransactionsGraph from '../../../../components/shared-components/Graphs/donut/EquityFundTransactions'
import ActiveCashFlowGraph from '../../../../components/shared-components/Graphs/bar/ActiveCashFlow'
import { MedicalGraph } from '../../../../components/shared-components/Graphs/area/MedicalGraph'
import ForeignInvestmentsAmountGraph from '../../../../components/shared-components/Graphs/bar/ForeignInvestmentsAmount'


export default function MarketSizeIndicators() {
  return (
    <>
    <div className='main-card indications'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className='card-title'>حجم وتعاملات وثائق صناديق الاسهم بالمليون/جنيه</h2>
        <Quarters />
      </div>

      <div className="graph d-flex flex-column align-items-center">
        <EquityFundTransactionsGraph />
      </div>

      <div className='d-flex justify-content-between'>
        <div className="item one">
          <p className='value'>50.2<span>(28%)</span></p>
          <p className='desc'>اسهم البنوك</p>
        </div>
        <div className="item two">
          <p className='value'>75.3<span>(41%)</span></p>
          <p className='desc'>اسهم الشركات المقيدة</p>
        </div>
        <div className="item three">
          <p className='value'>45.4<span>(25%)</span></p>
          <p className='desc'>اسهم شركات القطاع الصحى</p>
        </div>
        <div className="item four">
          <p className='value'>10.5<span>(6%)</span></p>
          <p className='desc'>اسهم الشركات العقارية</p>
        </div>
      </div>

    </div>

    <div className='main-card indications'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className='card-title'>حجم الاستثمار الاجنبى على مستوى القطاعات مليون / دولار</h2>
        <Quarters />
      </div>
      <ForeignInvestmentsAmountGraph />
    </div>

    <div className='main-card indications'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className='card-title'>توقعات التدقفات النقدية النشطة استثمار القطاع الصحى</h2>
        <Quarters />
      </div>
      <MedicalGraph />
    </div>

    <div className='main-card indications'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className='card-title'>توقعات التدقفات النقدية النشطة استثمار القطاع الصحى</h2>
        <Quarters />
      </div>
      <div className='total'>
        <h4>$50.000</h4>
        <p>مجموع التعامل</p>
      </div>
      <ActiveCashFlowGraph />
    </div>
    </>
  )
}
