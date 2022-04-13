import { Input } from 'antd'
import React from 'react'
import Header from '../../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../../components/shared-components/Navigate/NavigateItems'
import Item from '../../../../configs/stockFundItems/Item3'

export default function StockFundItem3() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'3. تعريف وشكل الصندوق'}
        progress={50}
        info={'البند الثالث'}
      />

      <div className="content-rows">

        <div className="d-flex">
          <div className="title">
            {Item.t1}
          </div>
          <div className="desc">
            {Item.p1}
            <Input className='inline-input' placeholder={Item.ph1} style={{ width: '677px' }} />
          </div>
        </div>

        <div className="d-flex">
          <div className="title">{Item.t2}</div>
          <div className="desc">
            <p style={{ marginBottom: '13px' }}>{Item.p2_1}</p>

            <div className="d-flex">
              <div>
                <span className='label'>{Item.p2_2}</span>
                <Input className='inline-input' placeholder={Item.ph2} style={{ width: '371px' }} />
              </div>
              <div>
                <span className='label'>{Item.p2_3}</span>
                <Input className='inline-input' placeholder={Item.ph3} style={{ width: '190px' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t3}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t4}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t5}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t6}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t7}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t8}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t9}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t10}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t11}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t12}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t13}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t14}</div>
          <div className="desc"></div>
        </div>
        <div className="d-flex">
          <div className="title">{Item.t15}</div>
          <div className="desc"></div>
        </div>
      </div>

      <NavigateItems item={3} />
    </div>
  )
}
