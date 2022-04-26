import React from 'react'
import { Table } from 'antd'
import TableSearch from '../../../../../components/shared-components/Form/TableSearch'
import DownloadDocGoldBtn from '../../../../../components/shared-components/Buttons/DownloadDocGold'
import { ReactComponent as Eye } from '../../../../../components/shared-components/svgs/eyeTable.svg'
import data from '../data/UploadedTableData'
import RightBtn from '../../../../../components/shared-components/Buttons/Right'
import LeftBtn from '../../../../../components/shared-components/Buttons/Left'

export default function SingleRecordCard() {

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
          </div>
        </div>
      )
    },
  ].filter(item => !item.hidden);

  return (
    <div className='records-card'>
      <div className='contributers-table'>
      <div className='gold'>
        <p>اجمالي عدد المساهمين: 28</p>
        <p>اجمالي عدد الاسهم: 54326</p>
      </div>

      <div className='contributers-table-content'>
        <div className='white'>
          <div className='d-flex align-items-center'>
            <div>
              <span className='fs-16 fw-bold me-2'>1#</span>
              <span className='fs-16 me-5'>رقم الافصاح</span>
            </div>
            <div className='mb-1'>
              <RightBtn />
              <LeftBtn />
            </div>
          </div>
          <div className='left-side'>
            <TableSearch placeholder={'ابحث بالاسم او رقم البطاقة'} />
            <DownloadDocGoldBtn />
          </div>
        </div>
        <div className='table large-table mt-3'>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    </div>
    </div>
  )
}
