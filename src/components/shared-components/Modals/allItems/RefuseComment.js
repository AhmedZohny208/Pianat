import React from 'react'
import { Modal, Form, Input } from 'antd'
import { ReactComponent as Close } from '../../svgs/closeModal.svg'
import Send from '../../Buttons/Send'
import UploadFile from '../../Buttons/UploadFile'

const { TextArea } = Input

export default function RefuseComment({ visible, onCancel }) {
  const [form] = Form.useForm()
  return (
    <Modal
      className='help-modal'
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
      centered
    >
      <div className='flex-cvhb mb-2'>
        <h4>سبب الرفض</h4>
        <Close style={{ cursor: 'pointer' }} onClick={() => onCancel()} />
      </div>

      <Form form={form} name='help' layout='vertical'>
        <Form.Item label='برجاء كتابة سبب الرفض' name='getHelpIn'>
          <TextArea
            placeholder='اكتب سبب الرفض'
            autoSize={{ minRows: 4, maxRows: 5 }}
          />
        </Form.Item>

        <div className='d-flex justify-content-end mb-4'>
          <UploadFile />
        </div>
      </Form>

      <Send classn='mt-0 bg-red' />
    </Modal>
  )
}
