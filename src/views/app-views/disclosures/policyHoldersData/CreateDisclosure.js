import React from 'react'
import { useHistory } from 'react-router-dom'
import CreatePolicyHolder from '../../../../components/shared-components/Breadcrumbs/CreatePolicyHolder'
import {ReactComponent as StockFundIcon} from '../../../../components/shared-components/svgs/stockFund.svg';
import { ReactComponent as RightArrow } from '../../../../components/shared-components/svgs/rightArrow.svg'
import MainCreateCard from './components/MainCreateCard';

export default function CreateDisclosure() {
  const history = useHistory()

  return (
    <div className='create-subscription'>
      <CreatePolicyHolder />

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

        <MainCreateCard />
      </div>
    </div>
  )
}
