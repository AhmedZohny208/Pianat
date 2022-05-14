import React from 'react'
import { Input } from 'antd'
import item from '../../../../configs/stockFundItems/Item29'
import SignatureUpload from '../../../../components/shared-components/Buttons/SignatureUpload'

export default function Form() {
  return (
    <>
    <div className='row justify-content-between mb-40'>
      <div className="col-5 mb-3">
        <label className='fw-600 mb-2'>{item.l1}</label>
        <Input className='grey-input' value={item.v1} />
      </div>
      <div className="col-5 mb-3">
        <label className='fw-600 mb-2'>{item.l2}</label>
        <Input className='grey-input' value={item.v2} />
      </div>
      <div className="col-5 mb-3">
        <label className='fw-600 mb-2'>{item.l3}</label>
        <Input className='grey-input' value={item.v3} />
      </div>
      <div className="col-5 mb-3">
        <label className='fw-600 mb-2'>{item.l4}</label>
        <Input className='grey-input' value={item.v4} />
      </div>
      <div className="col-5 mb-3">
        <label className='fw-600 mb-2'>{item.l5}</label>
        <Input className='grey-input' value={item.v5} />
      </div>
      <div className="col-5 mb-3">
        <label className='fw-600 mb-2'>{item.l6}</label>
        <Input className='grey-input' value={item.v6} />
      </div>
    </div>

    <div className='d-flex justify-content-between mb-5'>
      <div>
        <SignatureUpload />
      </div>
      <div>
        <SignatureUpload />
      </div>
    </div>
    </>
  )
}
