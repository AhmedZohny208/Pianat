import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { APP_PREFIX_PATH } from '../../../configs/AppConfig'
import SignatureSent from '../Modals/singleItemModals/SignatureSent'
import { ReactComponent as NavigateLeft } from '../svgs/navigateLeft.svg'
import { ReactComponent as NavigateRight } from '../svgs/navigateRight.svg'
import { ReactComponent as Signature } from '../svgs/signatureWhite.svg'

const path = `${APP_PREFIX_PATH}/create-subscription/stock-fund`

export default function NavigateItems({ item }) {
  const history = useHistory()
  const [signatureSentVisible, isSignatureSentVisible] = useState(false)

  const showSignatureSentModal = () => {
    isSignatureSentVisible(true)
  }
  const handleCancelSignatureSentModal = () => {
    isSignatureSentVisible(false)
  }

  return (
    <div className='navigate d-flex justify-content-between mb-60'>
      <button
        className='btn prev'
        style={{ visibility: item === 1 ? 'hidden' : 'visible' }}
        onClick={() => history.push(`${path}/${item - 1}`)}
      >
        <NavigateRight />
        السابق: بند {item - 1}
      </button>
      <button
        className='btn next'
        style={{ visibility: item === 34 ? 'hidden' : 'visible' }}
        onClick={() => history.push(`${path}/${item + 1}`)}
      >
        التالى: بند {item + 1}
        <NavigateLeft />
      </button>

      <button
        className='btn send-signature'
        style={{ display: item === 34 ? 'block' : 'none' }}
        onClick={() => showSignatureSentModal()}
      >
        <Signature />
        إرسال للإمضاء
      </button>

      <SignatureSent
        visible={signatureSentVisible}
        onCancel={handleCancelSignatureSentModal}
      />
    </div>
  )
}
