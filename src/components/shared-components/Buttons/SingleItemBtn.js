import React, { useState } from 'react'
import ShowHelpModal from '../Modals/ShowHelpModal'
import ShowCommentModal from '../Modals/ShowCommentModal'

export default function SingleItemBtn({ content, rightIcon, leftIcon, tip }) {
  const [helpVisible, isHelpVisible] = useState(false)
  const [commentVisible, isCommentVisible] = useState(false)

  const showHelpModal = () => {
    isHelpVisible(true)
  }
  const handleCancelHelpModal = () => {
    isHelpVisible(false)
  }

  const showCommentModal = () => {
    isCommentVisible(true)
  }
  const handleCancelCommentModal = () => {
    isCommentVisible(false)
  }

  return (
    <>
    <div className="col-4">
      <button style={{ fontSize: content.length > 49 ? '13px' : '14px' }} className='btn single-item'>
        <span className='right-icon'>{rightIcon && rightIcon}</span>
        {content}
        <span 
          className='left-icon' 
          onClick={() => {
            if (tip === 'comment') {
              showCommentModal()
            } else {
              showHelpModal()
            }
          }}
        >
          {leftIcon && leftIcon}
        </span>
      </button>
    </div>
    
    <ShowHelpModal visible={helpVisible} onCancel={handleCancelHelpModal} />
    <ShowCommentModal visible={commentVisible} onCancel={handleCancelCommentModal} />
    </>
  )
}
