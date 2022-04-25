import React from 'react'
import { Modal } from 'antd';
import {ReactComponent as Check} from '../svgs/checkGreenLg.svg';

export default function SendSuccessModal({ visible, onCancel }) {
  return (
    <Modal
      className='sendSuccess-modal'
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
    >
      <h3>تم الارسال بنجاح</h3>
      <div>
        <Check />
      </div>
    </Modal>
  )
}
