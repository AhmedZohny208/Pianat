import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import InvestmentPolicyViolationsGraph from '../../../../components/shared-components/Graphs/donut/InvestmentPolicyViolationsGraph'
import { ReactComponent as Download } from '../../../../components/shared-components/svgs/download.svg'
import { ReactComponent as OtherFund } from '../../../../components/shared-components/svgs/otherFund.svg'
import { ReactComponent as Arrow } from '../../../../components/shared-components/svgs/rightArrow.svg'
import { violations } from './data'
import SingleViolation from '../../../../components/shared-components/Accordions/Violation'
import InvestmentPolicyViolationBreadCrumb from '../../../../components/shared-components/Breadcrumbs/InvestmentPolicyViolation'
import { APP_PREFIX_PATH } from '../../../../configs/AppConfig'
import ChooseFund from '../../../../components/shared-components/Modals/mokhlfat/ChooseFund'

export default function InvestmentPolicyViolations() {
  const history = useHistory()

  const [violationVal, setViolationVal] = useState(violations[0].fundName)
  const [chooseFundVisible, isChooseFundVisible] = useState(false)

  return (
    <>
      <div className='violations investment-policy'>
        <InvestmentPolicyViolationBreadCrumb />
        <div className='main-card'>
          <div className='flex-cvhb'>
            <h1>مخالفات السياسات الاستثمارية على مستوى الصناديق</h1>
            <Arrow
              className='me-3 cursor-pointer'
              onClick={() =>
                history.push(
                  `${APP_PREFIX_PATH}/mokhlfat/investment-funds-violations`
                )
              }
            />
          </div>

          <div className='d-flex flex-column justify-content-center align-items-center'>
            <div style={{ padding: '31px' }}>
              <InvestmentPolicyViolationsGraph />
            </div>
            <div className='d-flex justify-content-around w-100'>
              {violations.map((violation) => (
                <div
                  className={`item ${violation.class} ${
                    violation.fundName === violationVal && 'active'
                  }`}
                  onClick={() => setViolationVal(violation.fundName)}
                >
                  <p>{violation.fundName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {violations.map(
        (violation) =>
          violation.fundName === violationVal && (
            <div className='accordion violations'>
              <div className='header'>
                <h5>مخالفات {violation.fundName}</h5>
                <div>
                  <button className='btn'>
                    <Download />
                    تنزيل
                  </button>
                  <button
                    className='btn last'
                    onClick={() => isChooseFundVisible(true)}
                  >
                    <OtherFund />
                    اختيار صندوق اخر
                  </button>
                </div>
              </div>

              <div className='violations-container'>
                {violation.violations.map((violation, i) => {
                  return <SingleViolation key={i} violation={violation} />
                })}
              </div>
            </div>
          )
      )}

      <ChooseFund
        visible={chooseFundVisible}
        onCancel={() => isChooseFundVisible(false)}
        violations={violations}
      />
    </>
  )
}
