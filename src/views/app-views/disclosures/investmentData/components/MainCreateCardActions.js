import React, { useState } from 'react'
import DeleteDisclosure from '../../../../../components/shared-components/Buttons/DeleteDisclosure'
import FutureSaveDisclosure from '../../../../../components/shared-components/Buttons/FutureSaveDisclosure'
import SendDisclosure from '../../../../../components/shared-components/Buttons/SendDisclosure'
import DeletePopup from '../../../../../components/shared-components/Popups/DeletePopup'
import SuccessSmPopup from '../../../../../components/shared-components/Popups/SuccessSmPopup'

export default function MainCreateCardActions() {
  const [deleteVisible, isDeleteVisible] = useState(false)
  const [successVisible, isSuccessVisible] = useState(false)

  const handleCancelDelete = () => {
    isDeleteVisible(false)
  }
  const handleCancelSuccess = () => {
    isSuccessVisible(false)
  }

  return (
    <>
    <div className='d-flex justify-content-between mt-5'>
      <div>
        <DeleteDisclosure 
          content={'حذف الافصاح'} 
          onclick={() => isDeleteVisible(true)}
        />
        <FutureSaveDisclosure content={'حفظ لوقت لاحق'} classn={'ms-4'} />
      </div>
      <div>
        <SendDisclosure 
          content={'ارسال الافصاح'}
          onclick={() => isSuccessVisible(true)}
        />
      </div>
    </div>
    
    <DeletePopup visible={deleteVisible} onCancel={handleCancelDelete} />
    <SuccessSmPopup visible={successVisible} onCancel={handleCancelSuccess} />
    </>
  )
}
