import React, { useState } from 'react'
import CreateCard from './CreateCard'
import Header from './Header'
import DownloadShareholderFormBtn from '../../../../components/shared-components/Buttons/DownloadShareholderForm'
import UploadShareholderFormBtn from '../../../../components/shared-components/Buttons/UploadShareholderForm'
import { ReactComponent as Exclamation } from '../../../../components/shared-components/svgs/exclamationBlue.svg'
import AddName from '../../../../components/shared-components/Buttons/AddName'
import UploadedTable from './UploadedTable'

export default function MainCreateCard() {
  const [createCard, showCreateCard] = useState(true)
  const [uploadedTable, showUploadedTable] = useState(false)

  const onUpload = () => {
    showCreateCard(!createCard)
    showUploadedTable(!uploadedTable)
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
                <AddName content={'اضافة حامل وثيقة جديد'} classn={'mt-0'} />
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
      </div>
    </div>
  )
}
