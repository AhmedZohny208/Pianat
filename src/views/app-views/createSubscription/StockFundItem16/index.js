import React from 'react'
import AddName from '../../../../components/shared-components/Buttons/AddName'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import item from '../../../../configs/stockFundItems/Item16'
import Form1 from '../StockFundItem16/Form1'
import Form2 from '../StockFundItem16/Form2'
import Form3 from '../StockFundItem16/Form3'
import Form4 from '../StockFundItem16/Form4'

export default function index({openSidebar}) {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'16. أمين الحفظ'}
        progress={10}
        info={'البند السادس عشر'}
        openSidebar={openSidebar}
      />

      <div className="content">
        <div className="p-in-first">
          <Form1 />
          <Form2 />
        </div>

        <div className="p-in">
          <Form3 />
        </div>

        <div className="p-in-first">
          <Form4 />

          <p className='p-0 text-darkblue fw-bold'>{item.p13}</p>
          <AddName content={item.p14} classn={'mb-4'} />
          <h6 className='fw-600 mb-12 text-black'>{item.p15}</h6>

          {item.unordered.map(ele => (
            <p className='p-0 mb-1 text-lightblue'>{ele}</p>
          ))}
        </div>
      </div>

      <NavigateItems item={16} />
    </div>
  )
}
