import React from 'react'
import { Modal } from 'antd';
import {ReactComponent as NewSubModal} from '../svgs/newSubModal.svg';

export default function NewSubscriptionModal({ visible, onCancel }) {
  return (
    <Modal
        className='new-subscription-modal'
        title={null}
        visible={visible}
        onCancel={onCancel}
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
  )
}
