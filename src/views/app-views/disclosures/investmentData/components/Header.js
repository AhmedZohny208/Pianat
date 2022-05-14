import React from 'react'
import { useHistory } from 'react-router-dom'
import { ReactComponent as Records } from '../../../../../components/shared-components/svgs/logIntoRecords.svg'
import { ReactComponent as Download } from '../../../../../components/shared-components/svgs/download.svg'

export default function Header() {
  const history = useHistory()
  return (
    <div className="header">
      <div className='right'>
        <h5>افصاح بيانات الاستثمار</h5>
      </div>

      <div className="left">
        <button className='btn login-records' onClick={() => history.push('/home/disclosures/investment-data/records')}>
          <Records />
          الولوج لسجلات الافصاح
        </button>
        <button className="btn download">
          <Download />
          تنزيل
        </button>
      </div>
    </div>
  )
}
