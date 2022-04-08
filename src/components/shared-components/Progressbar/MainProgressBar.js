import React from 'react'
import { Progress } from 'antd';

export default function MainProgressBar({ progress, info }) {
  return (
    <div className='main-progress'>
      <h6>
        <span>أكملت</span>
        <span className='percentage'> {progress}% </span>
        <span>من إكمال {info}</span>
      </h6>

      <Progress percent={progress} showInfo={false} />
    </div>
  )
}
