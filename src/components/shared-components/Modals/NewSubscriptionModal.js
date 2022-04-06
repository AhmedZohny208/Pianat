import React from 'react'
import { Modal } from 'antd';
import { useHistory } from "react-router-dom";
import {ReactComponent as NewSubModal} from '../svgs/newSubModal.svg';
import { APP_PREFIX_PATH } from '../../../configs/AppConfig';

export default function NewSubscriptionModal({ visible, onCancel }) {
  const history = useHistory();
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
            <button className='btn newSub-btn' onClick={() => history.push(`${APP_PREFIX_PATH}/create-subscription/stock-fund`)}> <NewSubModal className='newSub-btn-svg' />صندوق اوراق مالية</button>
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
