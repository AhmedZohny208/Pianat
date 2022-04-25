import React from 'react'
import { Modal } from 'antd';
import {ReactComponent as Close} from '../svgs/closeBlue.svg';

export default function NewDocHolderModal({ visible, onCancel }) {
  return (
    <Modal
      className='newDocHolder-modal'
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
    >

      <div className="header">
        <h4>اضافة حامل وثيقة جديد</h4>
        <div>
          <Close 
            style={{ marginRight: '23px', cursor: 'pointer' }} 
            onClick={() => onCancel()} 
          />
        </div>
      </div>

    </Modal>
  )
}
