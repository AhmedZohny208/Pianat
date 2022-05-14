import React from 'react'
import { Modal } from 'antd'
import { ReactComponent as Check } from '../../svgs/checkGreenLg.svg'

export default function SaveAndSentToSign({ visible, onCancel }) {
  return (
    <Modal
      className='signatureSent-modal'
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
      centered={true}
    >
      <div className='d-flex flex-column align-items-center justify-content-between'>
        <h3>تم حفظ التعديلات</h3>
        <Check />
        <p className='small'>
          تم حفظ التعديلات و اشعار ذوى العلاقة للامضاء على الاقرارات
        </p>
      </div>
    </Modal>
  )
}
