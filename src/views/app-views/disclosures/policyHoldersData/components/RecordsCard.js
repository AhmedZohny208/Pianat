import React from 'react'
import AddName from '../../../../../components/shared-components/Buttons/AddName'
import DownloadDocGold from '../../../../../components/shared-components/Buttons/DownloadDocGold'
import RecordsTable from './RecordsTable'

export default function RecordsCard() {
  return (
    <div className='records-card'>
      <div className="content">
        <div className="header">
          <h5>سجلات افصاح بيانات الاستثمار</h5>
          <div>
            <AddName content={'انشاء افصاح'} classn='mt-0 px-3 br-14' />
            <DownloadDocGold />
          </div>
        </div>
        <RecordsTable />
      </div>
    </div>
  )
}
