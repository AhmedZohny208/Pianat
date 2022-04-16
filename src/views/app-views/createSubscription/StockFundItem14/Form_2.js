import React from 'react'
import AddNameLight from '../../../../components/shared-components/Buttons/AddNameLight'
import Form21 from './Form2_1'
import Form22 from './Form2_2'
import Form23 from './Form2_3'
import Form24 from './Form2_4'

export default function Form_2() {
  return (
    <div className='mb-60'>
      <div className='staff-form'>
        <Form21 />
        <hr className='my-4' />
        <Form22 />
        <hr className='my-4' />
        <Form23 />
        <hr className='my-4' />
        <Form24 />
      </div>
      
      <AddNameLight classn={'mt-4 mx-3'} content={'اضافة شركة خدمات ادارة جديدة'} />
    </div>
  )
}
