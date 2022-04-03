import React, { useState } from 'react'
import { Modal } from 'antd';
import {ReactComponent as NewSubModal} from '../../../components/layout-components/svgs/newSubModal.svg';
import HomeFeatures from './HomeFeatures'
import HomeTable from './HomeTable'

export default function Home() {

  const [newSubscriptionVisible, isNewSubscriptionVisible] = useState(false)

  const showNewSubscriptionModal = (id) => {
    isNewSubscriptionVisible(true)
  }
  const handleOkNewSubscriptionModal = () => {
    isNewSubscriptionVisible(false)
  }
  const handleCancelNewSubscriptionModal = () => {
    isNewSubscriptionVisible(false)
  }

  return (
    <div className='home'>
      <h2>الشاشة الرئيسية</h2>
      <HomeFeatures />
      <HomeTable />

      <Modal
        className='new-subscription-modal'
        title={null}
        visible={newSubscriptionVisible}
        onOk={handleOkNewSubscriptionModal}
        onCancel={handleCancelNewSubscriptionModal}
        footer={null}
      >
        <h4 className='modal-title text-center'>اختر فئة الصندوق</h4>

        <div className='text-center'>
          <div className="row gx-0">
            <div className="col-6">
              <button className='btn newSub-btn'> <NewSubModal className='newSub-btn-svg' />صندوق اوراق مالية</button>
            </div>
            <div className="col-6">
              <button className='btn newSub-btn'> <NewSubModal className='newSub-btn-svg' />صندوق قابض / صندوق صناديق</button>
            </div>
          </div>
          <div className="row gx-0">
            <div className="col-6">
              <button className='btn newSub-btn'> <NewSubModal className='newSub-btn-svg' />صندوق نقد</button>
            </div>
            <div className="col-6">
              <button className='btn newSub-btn'> <NewSubModal className='newSub-btn-svg' />صندوق الاستثمار العقاري</button>
            </div>
          </div>
          <div className="row gx-0">
            <div className="col-6">
              <button className='btn newSub-btn'> <NewSubModal className='newSub-btn-svg' />صندوق ادوات دين</button>
            </div>
            <div className="col-6">
              <button className='btn newSub-btn'> <NewSubModal className='newSub-btn-svg' />صناديق المؤشرات المتداولة ETF</button>
            </div>
          </div>
          <div className="row gx-0">
            <div className="col-6">
              <button className='btn newSub-btn'> <NewSubModal className='newSub-btn-svg' />صندوق ملكية خاصة</button>
            </div>
            <div className="col-6">
              <button className='btn newSub-btn'> <NewSubModal className='newSub-btn-svg' />صندوق الاستثمار الخيري</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className='btn newSub-btn last'>أخرى</button>
            </div>
          </div>
        </div>

      </Modal>
    </div>
  )
}
