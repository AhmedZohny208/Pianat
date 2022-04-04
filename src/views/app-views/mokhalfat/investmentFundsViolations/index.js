import React from 'react'
import {ReactComponent as LeftArrow} from '../../../../components/shared-components/svgs/leftArrow.svg';
import InvestmentFundViolationsGraph from '../../../../components/shared-components/Graphs/InvestmentFundViolationsGraph'

export default function InvestmentFundsViolations() {
  return (
    <div className='violations'>
      <div className="main-card">
        <h1>المخالفات على مستوى شركات صناديق الاستثمار</h1>

        <div className="row align-items-center">

          <div className="col-6">
            <div className='item one d-flex justify-content-between align-items-center'>
              <p>مخالفات نسب الاستثمار</p>
              <LeftArrow className='icon' />
            </div>
            <div className='item two d-flex justify-content-between align-items-center'>
              <p>مخالفات نظم الرقابة</p>
              <LeftArrow className='icon' />
            </div>
            <div className='item three d-flex justify-content-between align-items-center'>
              <p>مخالفات الالتزام بالقيود الأستثمارية</p>
              <LeftArrow className='icon' />
            </div>
            <div className='item four d-flex justify-content-between align-items-center'>
              <p>مخالفات الحوكمة</p>
              <LeftArrow className='icon' />
            </div>
            <div className='item five d-flex justify-content-between align-items-center'>
              <p>مخالفات عرض القوائم المالية</p>
              <LeftArrow className='icon' />
            </div>
          </div>

          <div className="col-6">
            <InvestmentFundViolationsGraph />
          </div>
        </div>
      </div>
    </div>
  )
}
