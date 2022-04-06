import React from 'react'
import AddComment from './Buttons/AddComment'
import Approval from './Buttons/Approval'
import RejectAddComment from './Buttons/RejectAddComment'


export default function AllItemsActions() {
  return (
    <div className='d-flex justify-content-between' style={{ marginBottom: '125px' }}>
      <div>
        <RejectAddComment />
        <AddComment />
      </div>
      <div>
        <Approval />
      </div>
    </div>
  )
}
