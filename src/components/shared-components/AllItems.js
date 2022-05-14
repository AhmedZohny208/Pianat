import React from 'react'
import SingleItemBtn from './Buttons/SingleItemBtn'
import { APP_PREFIX_PATH } from '../../configs/AppConfig'
import items from '../../views/app-views/createSubscription/ItemsConfig'
import { ReactComponent as Check } from './svgs/sidebarCheck.svg'

const path = `${APP_PREFIX_PATH}/create-subscription/stock-fund`

export default function AllItems({ match }) {
  return (
    <div className='all-items'>
      <div className='row gx-4'>
        {items.map((item) =>
          match.url === '/home/create-subscription/stock-fund/review' ? (
            <SingleItemBtn
              content={`${item.key}. ${item.name}`}
              rightIcon={<Check />}
              leftIcon={item.signature}
              to={`${path}/${item.key}`}
            />
          ) : (
            <SingleItemBtn
              content={`${item.key}. ${item.name}`}
              rightIcon={item.rightIcon}
              leftIcon={item.leftIcon}
              tip={item.tip}
              to={`${path}/${item.key}`}
            />
          )
        )}
      </div>
    </div>
  )
}
