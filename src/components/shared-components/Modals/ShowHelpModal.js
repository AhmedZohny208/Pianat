import React from 'react'
import { Modal } from 'antd';
import {ReactComponent as Confirm} from '../svgs/confirmModal.svg';
import {ReactComponent as Close} from '../svgs/closeModal.svg';

export default function ShowHelpModal({ visible, onCancel }) {
  return (
    <Modal
      className='help-modal'
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
    >
      <div>
        <h4>عرض مساعدة</h4>
        <div>
          <Confirm />
          <Close />
        </div>
      </div>

    </Modal>
  )
}
