import React from 'react'
import CreateSubscriptionBreadcrumb from '../../../components/shared-components/Breadcrumbs/CreateSubscription'
import MainProgressBar from '../../../components/shared-components/Progressbar/MainProgressBar'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'


export default function StockFundItem1() {
  return (
    <div className='stock-fund-item'>
      <CreateSubscriptionBreadcrumb />
      <Header title={'1. تعريفات عامة عن النشرة'} />
      <MainProgressBar progress={10} info={'البند الأول'} />

      <div className='items-header'>
        <h4>عناصر البند</h4>
      </div>

      <NavigateItems item={1} />
    </div>
  )
}
