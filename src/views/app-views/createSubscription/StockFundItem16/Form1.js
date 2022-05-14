import React from 'react'
import item from '../../../../configs/stockFundItems/Item16'
import Form11 from './Form1_1'
import Form12 from './Form1_2'

export default function Form1() {
  return (
    <div>
      <Form11 />

      <div className='mb-4'>
        <p className='p-0 mb-3'>
          {item.p4} <br />
          {item.p5}
        </p>

        <Form12 />
      </div>
    </div>
  )
}
