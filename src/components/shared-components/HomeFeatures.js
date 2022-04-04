import React, { useState } from 'react'
import {ReactComponent as ReactLogo} from './svgs/boxNumber.svg';
import {ReactComponent as CurrentDocNum} from './svgs/currentDocNum.svg';
import {ReactComponent as Employee} from './svgs/employee.svg';
import { AiOutlinePlus } from 'react-icons/ai'
import NewSubscriptionModal from './Modals/NewSubscriptionModal';

export default function HomeFeatures() {
  const [newSubscriptionVisible, isNewSubscriptionVisible] = useState(false)

  const showNewSubscriptionModal = () => {
    isNewSubscriptionVisible(true)
  }
  const handleCancelNewSubscriptionModal = () => {
    isNewSubscriptionVisible(false)
  }

  return (
    <>
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
        <div className="content p-0 d-flex flex-column">
          <div>
            <button className="w-100 btn dark-blue-btn" onClick={() => showNewSubscriptionModal()}>
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
    
    <NewSubscriptionModal visible={newSubscriptionVisible} onCancel={handleCancelNewSubscriptionModal} />
    </>
  )
}
