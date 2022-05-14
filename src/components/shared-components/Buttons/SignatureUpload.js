import React from 'react'
import { Upload } from 'antd'
import { ReactComponent as Signed } from '../svgs/signedWhite.svg'

const style = {
  background: '#9A9AB0',
  borderRadius: '5px',
  padding: '9px 12px',
  marginLeft: '4px'
}

export default function SignatureUpload() {
  return (
    <>
    <p className='p-0 mb-1 fw-600'>التوقيع الاليكتروني</p>
    
    <Upload>
      <button className='btn p-0 fs-12'>
        <div className='d-flex'>
          <div style={style}>
            <Signed />
          </div>
          <div className=''>
            <p className='p-0 fs-12 fw-600 lh-23' style={{ color: '#C4C4C4' }}>
              قم برفع التوقيع الاليكتروني
            </p>
            <p className='text-start fw-600 p-0 fs-12 lh-23' style={{ color: '#9A9AB0' }}>
              PDF \ Image
            </p>
          </div>
        </div>
      </button>
    </Upload>
    </>
  )
}
