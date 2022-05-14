import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { APP_PREFIX_PATH } from '../../../configs/AppConfig'
import CreateSubscriptionBreadcrumb from '../Breadcrumbs/CreateSubscription'
import MainProgressBar from '../Progressbar/MainProgressBar'
import { ReactComponent as Humburger } from '../svgs/humburgerItems.svg'
import { ReactComponent as RightArrow } from '../svgs/rightArrow.svg'

export default function ItemPage({ title, progress, info, openSidebar }) {
  const history = useHistory()

  return (
    <div>
      <CreateSubscriptionBreadcrumb />

      <div className='header d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <Humburger className='icon' onClick={() => openSidebar()} />
          <h2>{title}</h2>
        </div>

        <RightArrow
          onClick={() =>
            history.push(`${APP_PREFIX_PATH}/create-subscription/stock-fund`)
          }
        />
      </div>

      <MainProgressBar progress={progress} info={info} />

      <div className='items-header'>
        <h4>عناصر البند</h4>
      </div>
    </div>
  )
}
