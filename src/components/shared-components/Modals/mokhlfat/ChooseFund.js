import React from 'react'
import { Modal, Form, Select } from 'antd'
import { ReactComponent as Close } from '../../svgs/closeModal.svg'
import Send from '../../Buttons/Send'
import SingleOption from '../../Form/SingleOption'

const { Option } = Select

export default function ChooseFund({ visible, onCancel, violations }) {
  const [form] = Form.useForm()
  return (
    <Modal
      className='help-modal chooseFund-modal'
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
      centered
    >
      <div className='flex-cvhb mb-2'>
        <h4>اختيار صندوق اخر</h4>
        <Close style={{ cursor: 'pointer' }} onClick={() => onCancel()} />
      </div>

      <Form form={form} name='help' layout='vertical'>
        <Form.Item label='اختر اسم الصندوق' name='item' className='mb-4'>
          <Select
            className='mx-0'
            placeholder='اختر صندوق'
            dropdownAlign={{ offset: [1, 8] }}
          >
            {violations.map((e) => (
              <Option value={e.fundName}>
                <SingleOption classn={'sm'} option={e.fundName} />
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>

      <Send classn='mt-0' content='تطبيق' />
    </Modal>
  )
}
