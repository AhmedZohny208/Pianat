import React from 'react'
import { Modal } from 'antd';
import {ReactComponent as Delete} from '../svgs/deletePopup.svg';
import {ReactComponent as Check} from '../svgs/checkRed.svg';

export default function ConfirmDeletion({ visible, onCancel }) {
  return (
    <Modal
      className='confirm-delete'
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
    >
      <div className='text-center'>
        <h3>تم الحذف بنجاح</h3>
        <div className='icons'>
          <Delete />
          <Check className='check' />
        </div>
      </div>
    </Modal>
  )
}
