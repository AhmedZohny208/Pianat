import React, { useState } from 'react'
import ShowHelpModal from '../Modals/ShowHelpModal'
import ShowCommentModal from '../Modals/ShowCommentModal'
import { useHistory } from 'react-router-dom'

export default function SingleItemBtn({ content, rightIcon, leftIcon, tip, to }) {
  const history = useHistory()
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
      <button 
        style={{ fontSize: content.length > 49 ? '13px' : '14px' }} 
        className='btn single-item'
        onClick={() => history.push(to)}
      >
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
