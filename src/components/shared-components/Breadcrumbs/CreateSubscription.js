import React, { useState } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { APP_PREFIX_PATH } from '../../../configs/AppConfig'
import { ReactComponent as Question } from '../svgs/questionBlack.svg'
import Help from '../Modals/singleItemModals/Help'

export default function CreateSubscription() {
  const [helpVisible, isHelpVisible] = useState(false)

  const showHelpModal = () => {
    isHelpVisible(true)
  }
  const handleCancelHelpModal = () => {
    isHelpVisible(false)
  }

  return (
    <div className='d-flex justify-content-between align-items-center'>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={`${APP_PREFIX_PATH}`}>الرئيسية</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>انشاء نشرة اكتتاب</Breadcrumb.Item>
      </Breadcrumb>

      <Question className='cursor-pointer' onClick={showHelpModal} />

      <Help visible={helpVisible} onCancel={handleCancelHelpModal} />
    </div>
  )
}
