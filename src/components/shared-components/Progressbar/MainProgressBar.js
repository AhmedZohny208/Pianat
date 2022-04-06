import React from 'react'
import { Progress } from 'antd';

export default function MainProgressBar() {
  return (
    <div className='main-progress'>
      <h6>
        <span>أكملت</span>
        <span className='percentage'> 10% </span>
        <span>من إكمال النشرة بالكامل</span>
      </h6>

      <Progress percent={10} showInfo={false} />
    </div>
  )
}
