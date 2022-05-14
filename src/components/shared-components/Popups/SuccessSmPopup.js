import React from 'react'
import { Modal } from 'antd'
import { ReactComponent as Check } from '../svgs/checkGreenLg.svg'

export default function SuccessSmPopup({ visible, onCancel }) {
  return (
    <Modal
      className='success-sm'
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
      centered
    >
      <div className='text-center'>
        <h3>تم الارسال بنجاح</h3>
        <div className='icons'>
          <Check className='check' />
        </div>
      </div>
    </Modal>
  )
}
