import React from 'react'
import AddDocHolderBtn from '../../../../components/shared-components/Buttons/AddDocHolder'
import TableSearch from '../../../../components/shared-components/Form/TableSearch'
import DownloadDocGoldBtn from '../../../../components/shared-components/Buttons/DownloadDocGold'
import { ReactComponent as Eye } from '../../../../components/shared-components/svgs/eyeTable.svg'
import { ReactComponent as Edit } from '../../../../components/shared-components/svgs/editTable.svg'
import { ReactComponent as EditRed } from '../../../../components/shared-components/svgs/editTableRed.svg'
import { ReactComponent as Delete } from '../../../../components/shared-components/svgs/deleteTable.svg'
import data from './data/UploadedTableData'
import { Table } from 'antd'

export default function UploadedTable() {

  const columns = [
    {
      title: 'الاسم',
      dataIndex: 'name',
      key: 'الاسم'
    },
    {
      title: 'نوع المستثمر',
      dataIndex: 'investorType',
      key: 'نوع المستثمر'
    },
    {
      title: 'الجنسية',
      dataIndex: 'nationality',
      key: 'الجنسية'
    },
    {
      title: 'رقم البطاقة',
      dataIndex: 'nationalId',
      key: 'رقم البطاقة'
    },
    {
      title: 'رقم السجل التجاري',
      dataIndex: 'registerationNum',
      key: 'رقم السجل التجاري'
    },
    {
      title: 'عدد الوثائق المشتراه او المستردة',
      dataIndex: 'docNum',
      key: 'عدد الوثائق المشتراه او المستردة'
    },
    {
      title: 'Error',
      dataIndex: 'error',
      hidden: true,
      key: 'error'
    },
    {
      title: '% ملكية الوثائق بعد الشراء ',
      dataIndex: 'docOwnership',
      key: '% ملكية الوثائق بعد الشراء ',
      render: (text, record) => (
        <div className='d-flex justify-content-between align-items-center'>
          <div>{text}</div>
          <div className='action-icons'>
            <Eye />
            {record.error === true ? <EditRed className='mx-2 red' /> : <Edit className='mx-2' />}
            <Delete />
          </div>
        </div>
      )
    },
  ].filter(item => !item.hidden);

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
        <div className='table large-table mt-3'>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    </div>
  )
}
