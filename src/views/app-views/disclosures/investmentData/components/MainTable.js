import React from 'react'
import { useHistory } from 'react-router-dom'
import { Table, Card } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai'
import data from '../data/MainTableData'
import UnderConstruction from '../../../../../components/shared-components/Dropdown/UnderConstruction'

export default function MainTable({ match }) {
  const history = useHistory()

  const columns = [
    {
      title: 'اسم الصندوق',
      dataIndex: 'fundName',
      key: 'fundName',
      render: text => <span style={{ color: '#002044', fontSize: '16px' }}>{text}</span>
    },
    {
      title: 'رقم الصندوق',
      dataIndex: 'fundNumber',
      key: 'fundNumber',
      render: text => <span style={{ fontSize: '12px', fontWeight: '600' }}>{text}</span>
    },
    {
      title: 'تاريخ اخر افصاح تم تقديمه',
      dataIndex: 'lastDisclosureDate',
      key: 'lastDisclosureDate',
    },
    {
      title: 'تاريخ الافصاح القادم',
      dataIndex: 'nextDisclosureDate',
      key: 'nextDisclosureDate',
      render: (text, record) => (
        <span className={`${record.late === true && 'text-red'}`}>{text}</span>
      )
    },
    {
      title: 'الحالة',
      dataIndex: 'late',
      hidden: true,
      key: 'late',
    },
    {
      title: 'إجراءات',
      key: 'action',
      render: (text, record) => (
        <div className='d-flex'>
          <div className='home-table-action'>
            <button className='btn home-table-btn' onClick={() => history.push(`${match.url}/create`)}>
              <AiOutlinePlus className='me-2' />
              انشاء افصاح جديد 
            </button>
          </div>
        </div>
      )
    },
  ].filter(item => !item.hidden);

  return (
    <Card title="جميع الصناديق" extra={<UnderConstruction />} bordered={false} style={{ marginBottom: '480px' }}>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  )
}
