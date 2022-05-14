import React from 'react'
import { useHistory } from 'react-router-dom';
import {ReactComponent as LeftArrow} from '../../../../components/shared-components/svgs/leftArrow.svg';
import InvestmentFundViolationsGraph from '../../../../components/shared-components/Graphs/donut/InvestmentFundViolationsGraph'

export default function InvestmentFundsViolations({ match }) {
  const history = useHistory()

  console.log(match.url)
  return (
    <div className='violations'>
      <div className="main-card">
        <h1>المخالفات على مستوى شركات صناديق الاستثمار</h1>

        <div className="row align-items-center">

          <div className="col-6">
            <div className='item one flex-cvhb cursor-pointer' onClick={() => history.push(`${match.url}/Investment-policy-violations`)}>
              <p>مخالفات نسب الاستثمار</p>
              <LeftArrow className='icon' />
            </div>
            <div className='item two flex-cvhb'>
              <p>مخالفات نظم الرقابة</p>
              <LeftArrow className='icon' />
            </div>
            <div className='item three flex-cvhb'>
              <p>مخالفات الالتزام بالقيود الأستثمارية</p>
              <LeftArrow className='icon' />
            </div>
            <div className='item four flex-cvhb'>
              <p>مخالفات الحوكمة</p>
              <LeftArrow className='icon' />
            </div>
            <div className='item five flex-cvhb'>
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
