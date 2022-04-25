import React from 'react'
import {ReactComponent as Spider} from '../../../../../components/shared-components/svgs/spider-lg.svg';
import {ReactComponent as Calender} from '../../../../../components/shared-components/svgs/calender.svg';
import {ReactComponent as Employee} from '../../../../../components/shared-components/svgs/employee.svg';

export default function Features() {
  return (
    <div className='homeFeatures row'>

      <div className="col-4">
        <div className="content dark-blue">
          <p>تاريخ الافصاح الدوري</p>
          <div className="d-flex justify-content-between align-items-end">
            <div className="number">22 مارس 2022</div>
            <Calender className='logo' />
          </div>
        </div>
      </div>

      <div className="col-4">
        <div className="content light-blue">
          <p>اجمالي عدد الافصاحات لهذا الشهر</p>
          <div className="d-flex justify-content-between align-items-end">
            <div className="number">
              120{' '}
              <span className='fw-normal text-green'>(41%)</span>
            </div>
            <Spider className='logo' />
          </div>
        </div>
      </div>

      <div className="col-4">
        <div className="content dark-blue">
          <p>عدد المستثمرين</p>
          <div className="d-flex justify-content-between align-items-end">
            <div className="number">120,000,000</div>
            <Employee className='logo' />
          </div>
        </div>
      </div>

    </div>
  )
}
