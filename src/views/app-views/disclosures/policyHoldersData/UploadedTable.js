import React from 'react'
import AddDocHolderBtn from '../../../../components/shared-components/Buttons/AddDocHolder'
import TableSearch from '../../../../components/shared-components/Form/TableSearch'
import DownloadDocGoldBtn from '../../../../components/shared-components/Buttons/DownloadDocGold'

export default function UploadedTable() {
  return (
    <div className='contributers-table'>
      <div className='gold'>
        <p>اجمالي عدد المساهمين: 28</p>
        <p>اجمالي عدد الاسهم: 54326</p>
      </div>

      <div className='contributers-table-content'>
        <div className='white'>
          <AddDocHolderBtn />
          <div className='left-side'>
            <p className='red'>عرض جميع الأخطاء: 13</p>
            <TableSearch placeholder={'ابحث بالاسم او رقم البطاقة'} />
            <DownloadDocGoldBtn />
          </div>
        </div>
        <div className='table'></div>
      </div>
    </div>
  )
}
