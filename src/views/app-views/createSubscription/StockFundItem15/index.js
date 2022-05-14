import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item15'
import Form1 from './Form1'
import Form2 from './Form2'

export default function index({openSidebar}) {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'15. مراقبا حسابات الصندوق'}
        progress={10}
        info={'البند الخامس عشر'}
        openSidebar={openSidebar}
      />

      <div className="content">
        <div className="p-in-first">
          <div className='mb-36'>
            <p className='p-0 mb-2'>{item.p1}</p>
            <p className='p-0'>{item.p2}</p>
          </div>

          <Form1 />
        </div>

        <div className="p-in">
          <Form2 />
        </div>

        <div className="p-in">
          <p>
            {item.p5} <br />
            {item.p6}
          </p>

          {item.orderedList.map(ele => (
            <p>{ele}</p>
          ))}

        </div>
      </div>

      <NavigateItems item={15} />
    </div>
  )
}
