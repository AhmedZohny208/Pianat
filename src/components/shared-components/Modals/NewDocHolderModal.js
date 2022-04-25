import React from 'react'
import { Modal, Input, Select, DatePicker } from 'antd';
import { Country }  from 'country-state-city';
import {ReactComponent as Close} from '../svgs/closeBlue.svg';
import { ReactComponent as Percentage } from '../svgs/percentageGold.svg'
import SingleOption from '../Form/SingleOption';
import Add from '../Buttons/Add';

const { Option } = Select

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
        <h6>اضافة حامل وثيقة جديد</h6>
        <div>
          <Close 
            style={{ marginRight: '23px', cursor: 'pointer' }} 
            onClick={() => onCancel()} 
          />
        </div>
      </div>

      <div className="body">
        <div className="row mb-4">
          <div className="col-3 mb-4">
            <label className='mb-2'>نوع المستثمر / حامل الوثيقة</label>
            <Select className='mx-0 w-100' defaultValue={'مؤسسة'}>
              <Option value='مؤسسة'>
                <SingleOption option={'مؤسسة'} />
              </Option>
              <Option value='فرد'>
                <SingleOption option={'فرد'} />
              </Option>
              <Option value='صندوق'>
                <SingleOption option={'صندوق'} />
              </Option>
            </Select>
          </div>
          <div className="col-3 mb-4">
            <label className='mb-2'>اسم المستثمر / الشركة او الصندوق</label>
            <Input className='inline-input mx-0' value={'ﻋﺒﺎس اﺑﺮاﻫﻴﻢ ﺗﻬﺎﻣﻲ ﻋﻠﻰ'} />
          </div>
          <div className="col-3 mb-4">
            <label className='mb-2'>الجنسية</label>
            <Select className='mx-0 w-100' value={'Egypt'}>
              {Country && Country.getAllCountries().map(e => (
                <Option value='jack'>{e.name}</Option>
              ))}
            </Select>
          </div>
          <div className="col-3 mb-4">
            <label className='mb-2'>رقم البطاقة</label>
            <Input className='inline-input mx-0' value={'12345678912345'} />
          </div>
          <div className="col-3 mb-4">
            <label className='mb-2'>رقم الباسبور</label>
            <Input className='inline-input mx-0' value={'134121'} />
          </div>
          <div className="col-3 mb-4">
            <label className='mb-2 fs-13'>رقم السجل التجارى / رقم ترخيص الصندوق</label>
            <Input className='inline-input mx-0' value={'134121'} />
          </div>
          <div className="col-3 mb-4">
            <label className='mb-2'>عدد الوثائق المشتراه او المسترده</label>
            <Input className='inline-input mx-0' value={'134121'} />
          </div>
          <div className="col-3 mb-4">
            <label className='mb-2'>الملكية الوثائق بعد الشراء او الاسترداد</label>
            <div className='position-relative'>
              <Input className='inline-input mx-0' value={'3%'} />
              <Percentage className='percentage-gold' />
            </div>
          </div>
          <div className="col-6 mb-4">
            <label className='mb-2'>تاريخ عملية الشراء</label>
            <DatePicker 
              className='inline-input w-100 mx-0' 
              placeholder=' ' 
            />
          </div>
          <div className="col-6 mb-4">
            <label className='mb-2'>تاريخ عملية الاسترداد</label>
            <DatePicker 
              className='inline-input w-100 mx-0' 
              placeholder=' ' 
            />
          </div>
        </div>
        
        <div className='text-end'>
          <Add />
        </div>
      </div>

    </Modal>
  )
}
