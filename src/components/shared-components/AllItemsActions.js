import React, { useState } from 'react'
import AddComment from './Buttons/AddComment'
import Approval from './Buttons/Approval'
import ApprovalAndUpdate from './Buttons/ApproveAndUpdate'
import FundModification from './Buttons/FundModification'
import FutureSaveDisclosure from './Buttons/FutureSaveDisclosure'
import RejectAddComment from './Buttons/RejectAddComment'
import PauseFund from './Buttons/PauseFund'
import AddCommentModal from './Modals/allItems/AddCommentModal'
import ModifyFundModal from './Modals/allItems/ModifyFundModal'
import RefuseComment from './Modals/allItems/RefuseComment'
import FutureSaveModal from './Modals/allItems/FutureSaveModal'
import SaveAndSentToSign from './Modals/allItems/SaveAndSentToSign'

import { ReactComponent as Loading } from './svgs/waitingSignatures.svg'

export default function AllItemsActions({ match }) {
  const [addCommentVisible, isAddCommentVisible] = useState(false)
  const [refuseCommentVisible, isRefuseCommentVisible] = useState(false)
  const [modifyFundVisible, isModifyFundVisible] = useState(false)
  const [futureSaveVisible, isFutureSaveVisible] = useState(false)
  const [saveAndSentToSignVisible, isSaveAndSentToSignVisible] = useState(false)

  return (
    <>
      {match.url === '/home/create-subscription/stock-fund/review' && (
        <div className='flex-cvhb' style={{ marginBottom: '125px' }}>
          <div>
            <PauseFund classn='me-3' />
            <FundModification onclick={() => isModifyFundVisible(true)} />
          </div>
          <div className='d-flex align-items-center'>
            <p className='me-3 mb-0'>تم الاعتماد في: 18 سبتمبر 2021</p>
            <Approval classn='grey' content={'اعتماد'} />
          </div>
        </div>
      )}

      {match.url === '/home/create-subscription/stock-fund/review' && (
        <div className='flex-cvhb' style={{ marginBottom: '125px' }}>
          <FundModification onclick={() => isModifyFundVisible(true)} />

          <div className='wait-signature'>
            <div className='title'>
              <Loading />
              <h6>بانتظار الامضائات</h6>
            </div>
            <p>
              ستتمكن من اعتماد وتحديث النشرة
              <br /> بعد استيفاء جميع الامضائات
            </p>
          </div>

          <div className='last'>
            <p>اخر اعتماد في: 18 سبتمبر 2021</p>
            <ApprovalAndUpdate />
          </div>
        </div>
      )}

      {match.url === '/home/create-subscription/stock-fund/review' && (
        <div
          className='d-flex justify-content-between'
          style={{ marginBottom: '125px' }}
        >
          <div className='d-flex align-items-center'>
            <FutureSaveDisclosure
              content={'حفظ التعديلات لوقت لاحق'}
              onclick={() => isFutureSaveVisible(true)}
            />
            <p className='mb-0 ms-3'>اخر حفظ في: 18 سبتمبر 2021</p>
          </div>
          <div>
            <Approval
              style={{
                width: 'unset',
                height: 'unset',
                padding: '8px 20px',
                fontSize: '16px',
                fontWeight: '400',
              }}
              content={'حفظ التعديلات والارسال للامضاء'}
              onclick={() => isSaveAndSentToSignVisible(true)}
            />
          </div>
        </div>
      )}

      {match.url === '/home/create-subscription/stock-fund' && (
        <>
          <div
            className='d-flex justify-content-between'
            style={{ marginBottom: '125px' }}
          >
            <div>
              <RejectAddComment
                classn='grey'
                onclick={() => isRefuseCommentVisible(true)}
              />
              <AddComment onclick={() => isAddCommentVisible(true)} />
            </div>
            <div>
              <Approval classn='grey' content={'اعتماد'} />
            </div>
          </div>

          <div
            className='d-flex justify-content-between'
            style={{ marginBottom: '125px' }}
          >
            <div>
              <RejectAddComment onclick={() => isRefuseCommentVisible(true)} />
              <AddComment onclick={() => isAddCommentVisible(true)} />
            </div>
            <div>
              <Approval content={'اعتماد'} />
            </div>
          </div>
        </>
      )}

      <AddCommentModal
        visible={addCommentVisible}
        onCancel={() => isAddCommentVisible(false)}
      />
      <RefuseComment
        visible={refuseCommentVisible}
        onCancel={() => isRefuseCommentVisible(false)}
      />
      <ModifyFundModal
        visible={modifyFundVisible}
        onCancel={() => isModifyFundVisible(false)}
      />
      <FutureSaveModal
        visible={futureSaveVisible}
        onCancel={() => isFutureSaveVisible(false)}
      />
      <SaveAndSentToSign
        visible={saveAndSentToSignVisible}
        onCancel={() => isSaveAndSentToSignVisible(false)}
      />
    </>
  )
}
