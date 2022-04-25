import React from 'react'
import PolicyHoldersRecords from '../../../../components/shared-components/Breadcrumbs/PolicyHoldersRecords'
import {ReactComponent as StockFundIcon} from '../../../../components/shared-components/svgs/stockFund.svg';
import RecordsCard from './components/RecordsCard';

export default function Records() {
  return (
    <div className='create-subscription'>
      <PolicyHoldersRecords />

      <div className="header">
        <h1>سجلات افصاح لبيانات حملة الوثائق</h1>

        <div className="details mb-4">
          <h3>
            <StockFundIcon />
            صندوق إستثمار المتوازن - إزدهار - 8732
          </h3>
        </div>
      </div>

      <RecordsCard />
    </div>
  )
}
