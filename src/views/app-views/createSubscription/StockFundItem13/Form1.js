import React from 'react'
import { Input } from 'antd'
import item from '../../../../configs/stockFundItems/Item13'
import SaveBtn from '../../../../components/shared-components/Buttons/Save'

export default function Form1() {
  return (
    <div className="staff-form mt-2 mb-4">
      <div className="row">

        <div className="col-4">
          <div className='input'>
            <div className="label">{item.l1_1}</div>
            <Input className="text-input"/>
          </div>
        </div>
        <div className="col-4">
          <div className='input'>
            <div className="label">{item.l1_2}</div>
            <Input className="text-input"/>
          </div>
        </div>
        <div className="col-4">
          <div className='input'>
            <div className="label">{item.l1_3}</div>
            <Input className="text-input"/>
          </div>
        </div>
        <div className="col-4">
          <div className='input'>
            <div className="label">{item.l1_4}</div>
            <Input className="text-input"/>
          </div>
        </div>
        <div className="col-4">
          <div className='input'>
            <div className="label">{item.l1_5}</div>
            <Input className="text-input"/>
          </div>
        </div>
        <div className="col-4">
          <div className='input'>
            <div className="label">{item.l1_6}</div>
            <Input className="text-input"/>
          </div>
        </div>

      </div>

      <SaveBtn />
    </div>
  )
}
