import React from 'react'
import InvestmentPolicyViolationsGraph from '../../../../components/shared-components/Graphs/InvestmentPolicyViolationsGraph'

export default function InvestmentPolicyViolations() {
  return (
    <div className='violations investment-policy'>
      <div className="main-card">
        <h1>مخالفات السياسات الاستثمارية على مستوى الصناديق</h1>

        <div className='d-flex flex-column justify-content-center align-items-center'>
          <div style={{ padding: '31px' }}>
            <InvestmentPolicyViolationsGraph />
          </div>
          <div className='d-flex justify-content-around w-100'>
            <div className='item one'>
              <p>صندوق نماء</p>
            </div>
            <div className='item two'>
              <p>صندوق ثراء</p>
            </div>
            <div className='item three'>
              <p>صندوق الخير</p>
            </div>
            <div className='item four'>
              <p>صندوق الحكمة</p>
            </div>
            <div className='item five'>
              <p>صندوق سندى</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
