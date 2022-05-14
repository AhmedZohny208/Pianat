import React from 'react'
import { Table } from 'antd'
import { ReactComponent as Eye } from '../../../../components/shared-components/svgs/eyeTable.svg'
import { ReactComponent as Edit } from '../../../../components/shared-components/svgs/editTable.svg'
import { ReactComponent as EditRed } from '../../../../components/shared-components/svgs/editTableRed.svg'
import { ReactComponent as Delete } from '../../../../components/shared-components/svgs/deleteTable.svg'
import data from './uploadedTableData'

export default function ItemTable() {

  const columns = [
    {
      title: 'الاسم',
      dataIndex: 'name',
      key: 'الاسم',
    },
    {
      title: 'الجنسية',
      dataIndex: 'nationality',
      key: 'الجنسية',
    },
    {
      title: 'رقم البطاقة',
      dataIndex: 'nationalId',
      key: 'رقم البطاقة',
    },
    {
      title: 'عدد الاسهم',
      dataIndex: 'registerationNum',
      key: 'عدد الاسهم',
    },
    {
      title: '% المساهمه',
      dataIndex: 'docOwnership',
      key: '% ملكية الوثائق بعد الشراء ',
    },
    {
      title: 'Error',
      dataIndex: 'error',
      hidden: true,
      key: 'error',
    },
    {
      title: 'عدد الوثائق المصدرة مقابل مال شركة',
      dataIndex: 'docNum',
      key: 'عدد الوثائق المصدرة مقابل مال شركة',
      render: (text, record) => (
        <div className='d-flex justify-content-between align-items-center'>
          <div>{text}</div>
          <div className='action-icons'>
            <Eye />
            {record.error === true ? (
              <EditRed className='mx-2 red' />
            ) : (
              <Edit className='mx-2' />
            )}
            <Delete />
          </div>
        </div>
      ),
    },
  ].filter((item) => !item.hidden)

  return (
    <div className='table large-table mt-3'>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}
