import React from 'react'
import { Progress } from 'antd'

export default function MainProgressBar({ progress, info }) {
  console.log(progress)
  return (
    <div className='main-progress'>
      <h6>
        <span>أكملت</span>
        <span className='percentage position-static fs-16'> {progress}% </span>
        <span>{info}</span>
      </h6>

      <Progress percent={progress} showInfo={false} />
    </div>
  )
}
