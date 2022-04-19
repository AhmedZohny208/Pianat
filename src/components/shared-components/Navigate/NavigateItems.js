import React from 'react'
import { useHistory } from 'react-router-dom'
import { APP_PREFIX_PATH } from '../../../configs/AppConfig'
import { ReactComponent as NavigateLeft } from '../svgs/navigateLeft.svg'
import { ReactComponent as NavigateRight } from '../svgs/navigateRight.svg'

const path = `${APP_PREFIX_PATH}/create-subscription/stock-fund`

export default function NavigateItems({ item }) {
  const history = useHistory()

  return (
    <div className='navigate d-flex justify-content-between'>
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
    </div>
  )
}
