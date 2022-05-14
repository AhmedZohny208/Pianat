import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Table, Card } from 'antd';
import UnderConstruction from '../../../../../components/shared-components/Dropdown/UnderConstruction'
import DisplayDisclosure from '../../../../../components/shared-components/Buttons/DisplayDisclosure'
import data from '../data/RecordsData'

export default function MainTable({ match }) {
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
      title: 'اجرائات',
      key: 'اجرائات',
      width: '30%',
      render: () => <DisplayDisclosure width={250} content={'عرض الافصاح'} onclick={() => history.push('/home/disclosures/internal-controller/records/1')} />
    }
  ]

  return (
    <Card title="جميع الصناديق" extra={<UnderConstruction />} bordered={false} style={{ marginBottom: '480px' }}>
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
    </Card>
  )
}
