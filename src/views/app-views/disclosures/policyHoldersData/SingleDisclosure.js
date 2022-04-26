import React from 'react'
import PolicyHolderSingleRecord from '../../../../components/shared-components/Breadcrumbs/PolicyHolderSingleRecord'
import {ReactComponent as StockFundIcon} from '../../../../components/shared-components/svgs/stockFund.svg';
import SingleRecordCard from './components/SingleRecordCard';

export default function SingleDisclosure() {
  return (
    <div className='create-subscription'>
      <PolicyHolderSingleRecord />

      <div className="header">
        <h1>سجلات افصاح لبيانات حملة الوثائق</h1>

        <div className="details mb-4">
          <h3>
            <StockFundIcon />
            صندوق إستثمار المتوازن - إزدهار - 8732
          </h3>
        </div>
      </div>

      <SingleRecordCard />
    </div>
  )
}
