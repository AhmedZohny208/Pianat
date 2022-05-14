import React from 'react'
import { useHistory } from 'react-router-dom'
import Breadcrumb from '../../../../components/shared-components/Breadcrumbs/InvestmentDataRecords'
import {ReactComponent as StockFundIcon} from '../../../../components/shared-components/svgs/stockFund.svg';
import { ReactComponent as RightArrow } from '../../../../components/shared-components/svgs/rightArrow.svg'
import RecordsCard from './components/RecordsCard';

export default function InvestmentDataRecords() {
  const history = useHistory()

  return (
    <div className='create-subscription'>
      <Breadcrumb />

      <div className="header">
        <div className="flex-cvhb">
          <h1>سجلات افصاح بيانات الاستثمار</h1>
          <RightArrow onClick={history.goBack} className='cursor-pointer' />
        </div>

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
