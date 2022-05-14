import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import ServiceProviderViolationsGraph from '../../../../components/shared-components/Graphs/donut/ServiceProviderViolationsGraph'
import { APP_PREFIX_PATH } from '../../../../configs/AppConfig'

export default function ServiceProviderViolations() {
  const history = useHistory()
  return (
    <div className='violations service-Provider'>
      <div className='main-card'>
        <h1>
          مخالفات عدم تقديم التقارير المطلوبة على مستوى الاطراف ذوى العالقة
        </h1>

        <div className='d-flex flex-column justify-content-center align-items-center'>
          <div style={{ padding: '31px' }}>
            <ServiceProviderViolationsGraph />
          </div>
          <div className='d-flex justify-content-between w-100'>
            <div
              className='item one'
              onClick={() =>
                history.push(
                  `${APP_PREFIX_PATH}/mokhlfat/service-provider-violations/violation`
                )
              }
            >
              <p>تقارير مراقب الحسابات</p>
            </div>
            <div className='item two'>
              <p>تقارير خدمات الادارة</p>
            </div>
            <div className='item three'>
              <p>تقارير المراقب الداخلى لمدير الاستثمار</p>
            </div>
            <div className='item four'>
              <p>تقارير امناء الحفظ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
