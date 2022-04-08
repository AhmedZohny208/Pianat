import React from 'react'
import CreateSubscriptionBreadcrumb from '../../../components/shared-components/Breadcrumbs/CreateSubscription'
import {ReactComponent as StockFundIcon} from '../../../components/shared-components/svgs/stockFund.svg';
import {ReactComponent as AvatarIcon} from '../../../components/shared-components/svgs/avatarIconSmall.svg';
import MainProgressBar from '../../../components/shared-components/Progressbar/MainProgressBar';
import AllItems from '../../../components/shared-components/AllItems';
import AllItemsActions from '../../../components/shared-components/AllItemsActions';

export default function StockFund() {
  return (
    <>
      <div className='create-subscription'>
        <CreateSubscriptionBreadcrumb />

        <div className='header'>
          <h1>بنود نشرة الإكتتاب لصندوق استثمار خيري</h1>

          <div className='details d-flex'>
            <h3>
              <StockFundIcon />
              صندوق اوراق مالية
            </h3>
            <p>
              <AvatarIcon />
              (مدير الاستثمار) عبد الرحمن علي
            </p>
          </div>
        </div>

        <MainProgressBar progress={10} info={'إكمال النشرة بالكامل'} />
        <AllItems />
        <AllItemsActions />
      </div>
    </>
  )
}
