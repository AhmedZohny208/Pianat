import React, { useState } from 'react'
import CreateCard from './CreateCard'
import Header from './Header'
import DownloadShareholderFormBtn from '../../../../components/shared-components/Buttons/DownloadShareholderForm'
import UploadShareholderFormBtn from '../../../../components/shared-components/Buttons/UploadShareholderForm'
import { ReactComponent as Exclamation } from '../../../../components/shared-components/svgs/exclamationBlue.svg'
import AddName from '../../../../components/shared-components/Buttons/AddName'
import UploadedTable from './UploadedTable'
import DeleteDisclosure from '../../../../components/shared-components/Buttons/DeleteDisclosure'
import FutureSaveDisclosure from '../../../../components/shared-components/Buttons/FutureSaveDisclosure'
import SendDisclosure from '../../../../components/shared-components/Buttons/SendDisclosure'
import NewDocHolderModal from '../../../../components/shared-components/Modals/NewDocHolderModal'

export default function MainCreateCard() {
  const [createCard, showCreateCard] = useState(true)
  const [uploadedTable, showUploadedTable] = useState(false)

  const [newDocVisible, isNewDocVisible] = useState(false)

  const onUpload = () => {
    showCreateCard(!createCard)
    showUploadedTable(!uploadedTable)
  }

  const showCreateNewDoc = () => {
    isNewDocVisible(true)
  }
  const handleCancelCreateNewDoc = () => {
    isNewDocVisible(false)
  }

  return (
    <div className='main-create-card'>
      <Header />

      <div className="main">
        <div className="main-header mb-32">
          <p>(اختياري) قم بتنزيل نموذج الافصاح لملئ بياناته ومن ثم قم برفع النموذج مرة اخرى وسيتم تغيير المدخلات تلقائياً في الافصاح</p>

          <div className="row align-items-center mb-3">
            <div className="col-4">
              <span className='me-2 fs-17'>1. تنزيل</span>
              <DownloadShareholderFormBtn content={'تنزيل نموذج الافصاح'} />
            </div>
            <div className="col-4">
              <span className='me-2 fs-17'>2. رفع</span>
              <UploadShareholderFormBtn 
                content={'رفع نموذج الافصاح'}
                onclick={onUpload}
              />
              <Exclamation className='ms-3' />
            </div>
            <div className="col-4">
              <div className='float-end'>
                <AddName content={'اضافة حامل وثيقة جديد'} classn={'mt-0'} onclick={() => isNewDocVisible(true)} />
              </div>
            </div>
          </div>
        </div>

        {createCard && (
          <CreateCard />
        )}

        {uploadedTable && (
          <UploadedTable />
        )}

        <div className='d-flex justify-content-between mt-80'>
          <div>
            <DeleteDisclosure content={'حذف الافصاح'} />
            <FutureSaveDisclosure content={'حفظ لوقت لاحق'} classn={'ms-4'} />
          </div>
          <div>
            <SendDisclosure content={'ارسال الافصاح'} />
          </div>
        </div>
        
      </div>

      <NewDocHolderModal visible={newDocVisible} onCancel={handleCancelCreateNewDoc} />
    </div>
  )
}
