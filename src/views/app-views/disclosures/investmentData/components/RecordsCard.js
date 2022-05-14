import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import AddName from '../../../../../components/shared-components/Buttons/AddName'
import DownloadDocGold from '../../../../../components/shared-components/Buttons/DownloadDocGold'
import { APP_PREFIX_PATH } from '../../../../../configs/AppConfig'
import RecordsTable from './RecordsTable'

export default function RecordsCard() {
  const history = useHistory()
  return (
    <div className='records-card'>
      <div className='content'>
        <div className='header'>
          <h5>سجلات افصاح بيانات الاستثمار</h5>
          <div>
            <AddName
              content={'انشاء افصاح'}
              classn='mt-0 px-3 br-14'
              onclick={() =>
                history.push(
                  `${APP_PREFIX_PATH}/disclosures/investment-data/create`
                )
              }
            />
            <DownloadDocGold />
          </div>
        </div>
        <RecordsTable />
      </div>
    </div>
  )
}
