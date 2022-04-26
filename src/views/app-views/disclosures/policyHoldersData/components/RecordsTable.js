import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import data from '../data/RecordsData'
import DisplayDisclosure from '../../../../../components/shared-components/Buttons/DisplayDisclosure'

export default function RecordsTable() {
  const history = useHistory()
  const [alreadySelectedRows, setAlreadySelectedRows] = useState([])

  useEffect(() => {
    console.log(alreadySelectedRows)
  }, [alreadySelectedRows])

  const columns = [
    {
      title: 'رقم الافصاح',
      dataIndex: 'key',
      key: 'رقم الافصاح',
      render: (text) => <span>{`${text}#`}</span>
    },
    {
      title: 'تم ارسال الافصاح في تاريخ',
      dataIndex: 'sentAt',
      key: 'تم ارسال الافصاح في تاريخ'
    },
    {
      title: 'عدد حملة الوثائق',
      dataIndex: 'docHolderNum',
      key: 'عدد حملة الوثائق'
    },
    {
      title: 'اجرائات',
      key: 'اجرائات',
      width: '30%',
      render: () => <DisplayDisclosure width={250} content={'عرض الافصاح'} onclick={() => history.push('/home/disclosures/policy-holders/records/1')} />
    }
  ]

  return (
    <div>
      <Table
        columns={columns} 
        dataSource={data} 
        pagination={false} 
        className='small-table'
        rowSelection={{
          selectedRowKeys: alreadySelectedRows,
          onChange: (keys) => {
            setAlreadySelectedRows(keys)
          },
          onSelect: (record) => {
            console.log({record})
          },
          hideSelectAll: true
        }}
      />
    </div>
  )
}
