import React from 'react'
import CreatePolicyHolder from '../../../../components/shared-components/Breadcrumbs/CreatePolicyHolder'
import {ReactComponent as StockFundIcon} from '../../../../components/shared-components/svgs/stockFund.svg';
import MainCreateCard from './MainCreateCard';

export default function CreateDisclosure() {
  return (
    <div className='create-subscription'>
      <CreatePolicyHolder />

      <div className="header">
        <h1>انشاء افصاح لبيانات حملة الوثائق</h1>

        <div className="details mb-4">
          <h3>
            <StockFundIcon />
            صندوق إستثمار المتوازن - إزدهار - 8732
          </h3>
        </div>

        <MainCreateCard />
      </div>
    </div>
  )
}
