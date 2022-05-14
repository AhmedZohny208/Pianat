import React from 'react'
import { Modal, Form, Select, Input } from 'antd'
import { ReactComponent as Close } from '../../svgs/closeModal.svg'
import Send from '../../Buttons/Send'
import UploadFile from '../../Buttons/UploadFile'
import { items } from '../data'
import SingleOption from '../../Form/SingleOption'

const { Option } = Select
const { TextArea } = Input

export default function Help({ visible, onCancel }) {
  const [form] = Form.useForm()
  return (
    <Modal
      className='help-modal'
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
    >
      <h4 className='text-center mb-1'>مساعدة</h4>
      <div className='text-end'>
        <Close style={{ cursor: 'pointer' }} onClick={() => onCancel()} />
      </div>

      <Form form={form} name='help' layout='vertical'>
        <Form.Item
          label='اختر البند المراد مساعدة فيه'
          name='item'
          className='mb-4'
        >
          <Select
            className='mx-0'
            placeholder='اختر اسم البند المراد مساعدة فيه'
            dropdownAlign={{ offset: [1, 8] }}
          >
            {items.map((e) => (
              <Option value={e}>
                <SingleOption classn={'sm'} option={e} />
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label='احتاج مساعدة في' name='getHelpIn'>
          <TextArea
            placeholder='اكتب يالتفصيل في اي جزء تريد المساعدة'
            autoSize={{ minRows: 4, maxRows: 5 }}
          />
        </Form.Item>

        <div className='d-flex justify-content-end mb-4'>
          <UploadFile />
        </div>
      </Form>

      <Send classn='mt-0' />
    </Modal>
  )
}
