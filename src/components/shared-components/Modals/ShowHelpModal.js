import React, { useEffect } from 'react'
import { Modal, Form, Select, Input } from 'antd';
import {ReactComponent as Confirm} from '../svgs/confirmModal.svg';
import {ReactComponent as Close} from '../svgs/closeModal.svg';
import Send from '../Buttons/Send';
import DownloadDoc from '../Buttons/DownloadDoc';
import UploadFile from '../Buttons/UploadFile';
import { items } from './data'
import SingleOption from '../Form/SingleOption'

const { Option } = Select;
const { TextArea } = Input;

export default function ShowHelpModal({ visible, onCancel }) {
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({
      getHelpIn: 'لا اعرف كيفية تحديد قنوات التسويق و كيفية ادارتها و ما هي مصادر الصندوق',
      item: '21. قنوات تسويق وثائق الاستثمار التى يصدرها الصندوق'
    })
  }, [form])
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
      <div className='header d-flex justify-content-between align-items-center'>
        <h4>عرض مساعدة</h4>
        <div>
          <Confirm style={{ cursor: 'pointer' }} />
          <Close
            style={{ marginRight: '23px', cursor: 'pointer' }}
            onClick={() => onCancel()}
          />
        </div>
      </div>

      <Form form={form} name='help' layout='vertical'>
        <Form.Item label='البند المراد مساعدة فيه' name='item'>
          <Select
            className='mx-0 mb-4'
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
          <TextArea autoSize={{ minRows: 4, maxRows: 5 }} />
        </Form.Item>

        <Form.Item className='solution-text' name='solution'>
          <TextArea placeholder='اكتب هنا' rows={4} />
        </Form.Item>

        <div
          style={{ marginBottom: '50px' }}
          className='d-flex justify-content-between'
        >
          <DownloadDoc />
          <UploadFile />
        </div>
      </Form>

      <Send />
    </Modal>
  )
}
