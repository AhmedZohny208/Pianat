import React from 'react'
import { useHistory } from 'react-router-dom'
import PolicyHolderSingleRecord from '../../../../components/shared-components/Breadcrumbs/PolicyHolderSingleRecord'
import {ReactComponent as StockFundIcon} from '../../../../components/shared-components/svgs/stockFund.svg';
import { ReactComponent as RightArrow } from '../../../../components/shared-components/svgs/rightArrow.svg'
import SingleRecordCard from './components/SingleRecordCard';

export default function SingleDisclosure() {
  const history = useHistory()

  return (
    <div className='create-subscription'>
      <PolicyHolderSingleRecord />

      <div className="header">
        <div className="flex-cvhb">
          <h1>انشاء افصاح لبيانات حملة الوثائق</h1>
          <RightArrow onClick={history.goBack} className='cursor-pointer' />
        </div>

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
