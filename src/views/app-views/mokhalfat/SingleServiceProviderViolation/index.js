import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import SingleServiceProviderGraph from '../../../../components/shared-components/Graphs/donut/SingleServiceProviderGraph'
import { ReactComponent as Arrow } from '../../../../components/shared-components/svgs/rightArrow.svg'
import { ReactComponent as Download } from '../../../../components/shared-components/svgs/download.svg'
import { ReactComponent as Filter } from '../../../../components/shared-components/svgs/filter.svg'
import SingleViolation from '../../../../components/shared-components/Accordions/ServiceProviderViolation'
import { APP_PREFIX_PATH } from '../../../../configs/AppConfig'
import { violations } from './data'

export default function SingleServiceProviderViolation() {
  const history = useHistory()
  const [violationVal, setViolationVal] = useState(violations[0].companyName)
  return (
    <>
      <div className='violations investment-policy single-service-Provider'>
        <div className='main-card'>
          <div className='flex-cvhb'>
            <h1>
              تجاوزات عدم تقديم التقارير المطلوبة على مستوى شركة خدمات الادارة
            </h1>
            <Arrow
              className='me-3 cursor-pointer'
              onClick={() =>
                history.push(
                  `${APP_PREFIX_PATH}/mokhlfat/service-provider-violations`
                )
              }
            />
          </div>

          <div className='d-flex flex-column justify-content-center align-items-center'>
            <div style={{ padding: '31px' }}>
              <SingleServiceProviderGraph />
            </div>
            <div className='d-flex justify-content-around w-100'>
              {violations.map((violation) => (
                <div
                  className={`item ${violation.class} ${
                    violation.companyName === violationVal && 'active'
                  }`}
                  onClick={() => setViolationVal(violation.companyName)}
                >
                  <p>{violation.companyName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {violations.map(
        (violation) =>
          violation.companyName === violationVal && (
            <div className='accordion violations'>
              <div className='header'>
                <h5>مخالفات {violation.companyName}</h5>
                <div>
                  <button className='btn'>
                    <Download />
                    تنزيل
                  </button>
                  <button className='btn last'>
                    <Filter />
                    تصفية
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
    </>
  )
}
