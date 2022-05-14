import React from 'react'
import { Modal } from 'antd'
import { ReactComponent as Signature } from '../../svgs/signatureGold.svg'

export default function SignatureSent({ visible, onCancel }) {
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
        <h3>تم الارسال </h3>
        <Signature />
        <p>تم ارسال النشرة للاشخاص المعنيين للتوقيع </p>
      </div>
    </Modal>
  )
}
