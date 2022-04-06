import React from 'react'
import { Modal } from 'antd';

export default function ShowCommentModal({ visible, onCancel }) {
  return (
    <Modal
      className='new-subscription-modal'
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
    >
      <h1>Show comment Modal</h1>
    </Modal>
  )
}
