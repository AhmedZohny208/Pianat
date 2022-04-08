import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import CreateSubscriptionBreadcrumb from '../Breadcrumbs/CreateSubscription'
import MainProgressBar from '../Progressbar/MainProgressBar'
import { ReactComponent as Humburger } from '../svgs/humburger.svg'
import { ReactComponent as RightArrow } from '../svgs/rightArrow.svg'

export default function ItemPage({title, progress, info}) {
  const history = useHistory()
  return (
    <div>
      <CreateSubscriptionBreadcrumb />

      <div className='header d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <Humburger className='icon' />
          <h2>{title}</h2>
        </div>

        <RightArrow onClick={history.goBack} />
      </div>

      <MainProgressBar progress={progress} info={info} />

      <div className='items-header'>
        <h4>عناصر البند</h4>
      </div>
    </div>
  )
}
