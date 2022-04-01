import React from 'react'
import {ReactComponent as ReactLogo} from '../../../components/layout-components/svgs/boxNumber.svg';
import {ReactComponent as CurrentDocNum} from '../../../components/layout-components/svgs/currentDocNum.svg';
import {ReactComponent as Employee} from '../../../components/layout-components/svgs/employee.svg';
import { AiOutlinePlus } from 'react-icons/ai'

export default function HomeFeatures() {
  return (
    <div className="homeFeatures row">

      <div className="col-lg-3">
        <div className="content dark-blue">
          <p>اجمالي عدد الصناديق</p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='number'>120</div>
            <ReactLogo className='logo' />
          </div>        
        </div>
      </div>

      <div className="col-lg-3">
        <div className="content light-blue">
          <p>اجمالي عدد الوثائق الحالية</p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='number'>120,000,000</div>
            <CurrentDocNum className='logo' style={{ height: '47px' }} />
          </div>        
        </div>
      </div>

      <div className="col-lg-3">
        <div className="content dark-blue">
          <p>عدد المستثمرين</p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='number'>120,000,000</div>
            <Employee className='logo' />
          </div>        
        </div>
      </div>

      <div className="col-lg-3">
        <div className="d-flex flex-column">
          <div>
            <button className="w-100 btn dark-blue-btn">
              <AiOutlinePlus className='btn-icon' />
              إنشاء نشرة اكتتاب جديدة
            </button>
          </div>
          <div>
            <button className="w-100 btn light-gold-btn">
              <AiOutlinePlus className='btn-icon' />
              إنشاء نشرة اكتتاب حالية
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
