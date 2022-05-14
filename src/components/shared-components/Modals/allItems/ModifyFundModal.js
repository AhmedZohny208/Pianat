import React, { useState, useEffect } from 'react'
import { Modal, Form, Select, Checkbox } from 'antd'
import { ReactComponent as Close } from '../../svgs/closeModal.svg'
import { records } from '../data'
import UploadTransparent from '../../Buttons/UploadTransparent'
import SendFW from '../../Buttons/SendFW'

const { Option } = Select

export default function ModifyFundModal({ visible, onCancel }) {
  const [form] = Form.useForm()

  const [selectedRecords, setSelectedRecords] = useState([
    'محضر تعيين مدير استثمار',
  ])

  const onChange = (e) => {
    if (e.target.checked === true) {
      setSelectedRecords([...selectedRecords, e.target.value])
    }

    if (e.target.checked === false) {
      const newArr = selectedRecords.filter((ele) => ele !== e.target.value)
      setSelectedRecords(newArr)
    }
  }

  useEffect(() => {
    console.log(selectedRecords)
  }, [selectedRecords])

  return (
    <Modal
      className='help-modal modify-fund-modal'
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
      centered
    >
      <div className='content'>
        <div className='flex-cvhb mb-2'>
          <h4>طلب تعديل نشرة</h4>
          <Close style={{ cursor: 'pointer' }} onClick={() => onCancel()} />
        </div>
        <p>
          لكي يتيح لك التعديل في النشرة برجاء رفع محضر يثبت التغيير. وانت المسؤل
          في حالة رفع ملف غير صحيح.
        </p>
        <Form form={form} name='help' layout='vertical'>
          <Form.Item label='اختر نوع المحضر' name='item' className='mb-4'>
            <Select
              className='mx-0'
              placeholder='اختر نوع المحضر'
              dropdownAlign={{ offset: [1, 8] }}
              optionLabelProp='label'
              dropdownClassName='modify-fund-dropdown'
              listHeight={160}
            >
              {records.map((e, i) => (
                <Option key={i} value={e} label={e}>
                  <div>
                    <Checkbox
                      defaultChecked={
                        selectedRecords && selectedRecords.includes(e)
                      }
                      value={e}
                      onChange={onChange}
                    >
                      {e}
                    </Checkbox>
                  </div>
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>

        {selectedRecords.map((record, i) => (
          <div key={i} className='record-upload'>
            <p>{record}</p>
            <UploadTransparent content={'رفع المحضر'} />
          </div>
        ))}
        <SendFW />
      </div>
    </Modal>
  )
}
