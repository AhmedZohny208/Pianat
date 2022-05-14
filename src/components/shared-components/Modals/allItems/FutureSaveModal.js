import React from 'react'
import { Modal } from 'antd'
import { ReactComponent as Check } from '../../svgs/checkGreenLg.svg'

export default function SendSuccessModal({ visible, onCancel }) {
  return (
    <Modal
      className='sendSuccess-modal'
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
      centered
    >
      <h3>تم حفظ التعديلات</h3>
      <div className='text-center'>
        <Check />
      </div>
    </Modal>
  )
}
