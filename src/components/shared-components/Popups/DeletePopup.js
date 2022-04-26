import React, { useState } from 'react'
import { Modal } from 'antd';
import {ReactComponent as Delete} from '../svgs/deletePopup.svg';
import ConfirmDeletion from './ConfirmDeletion';

export default function DeletePopup({ visible, onCancel }) {
  const [confirmDeleteVisible, isConfirmDeleteVisible] = useState(false)

  const handleCancelConfirmDelete = () => {
    isConfirmDeleteVisible(false)
  }

  return (
    <>
      <Modal
        className='delete-popup'
        title={null}
        visible={visible}
        onCancel={onCancel}
        footer={null}
        closable={false}
      >
        <div className='text-center'>
          <h3>الحذف</h3>
          <div>
            <Delete />
          </div>
          <p>هل حقاً تريد الحذف</p>

          <div className='d-flex justify-content-between'>
            <button 
              className='btn yes'
              onClick={() => {
                isConfirmDeleteVisible(true)
                onCancel()
              }}
            >
              نعم
            </button>
            <button 
              className='btn no'
              onClick={onCancel}
            >
              لا
            </button>
          </div>
        </div>
      </Modal>
    
      <ConfirmDeletion 
        visible={confirmDeleteVisible} 
        onCancel={handleCancelConfirmDelete} 
      />
    </>
  )
}
