import { ArrowLeftOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'اسم الصندوق',
    dataIndex: 'fundName',
    key: 'fundName',
    render: (text) => <span className='fs-16'>{text}</span>,
  },
  {
    title: 'شركة الصندوق المالكة',
    dataIndex: 'ownerFundCompany',
    key: 'ownerFundCompany',
    render: (text) => <span className='text-blue-2'>{text}</span>,
  },
  {
    title: 'رقم الصندوق',
    dataIndex: 'fundNumber',
    key: 'fundNumber',
    render: (text) => <span className='fs-12 fw-600 text-blue-2'>{text}</span>,
  },
  {
    title: 'تاريخ البدء',
    dataIndex: 'startDate',
    key: 'startDate',
    render: (text) => <span className='text-blue-2'>{text}</span>,
  },
  {
    title: 'الحالة',
    dataIndex: 'status',
    key: 'status',
    render: (text, record) => (
      <div
        className={`text-center fw-bold ${
          record.review === true && 'text-danger'
        }`}
        style={{ fontSize: '12px' }}
      >
        {text}
      </div>
    ),
  },
  {
    title: 'الحالة',
    dataIndex: 'review',
    hidden: true,
    key: 'review',
  },
  {
    title: 'إجراءات',
    key: 'action',
    render: (text, record) => (
      <div className='d-flex'>
        <div className='home-table-action'>
          <button className='btn home-table-btn'>
            مراجعة النشرة <ArrowLeftOutlined className='ms-2' />
          </button>
          <div
            className={`home-table-btn-review ${
              record.review === false && 'd-none'
            }`}
          ></div>
        </div>
      </div>
    ),
  },
].filter((item) => !item.hidden)

export default columns
