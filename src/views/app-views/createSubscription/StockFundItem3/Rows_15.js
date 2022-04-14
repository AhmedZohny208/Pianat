import React from 'react'
import Item from '../../../../configs/stockFundItems/Item3'
import { orderedList, unorderedList } from '../../../../configs/stockFundItems/Item3'

export default function Rows_15() {
  return (
    <div className="d-flex">
      <div className="title">{Item.t15}</div>
      <div className="desc">
        <p>{Item.p15_1}</p>
        <p className='mb-2'>{Item.p15_2}</p>
        <div className="ordered-list">
          <ol>
            {orderedList.map(ele => (
              <li>{ele}</li>
            ))}
          </ol>
        </div>
        <p className='mb-2'>{Item.p15_3}</p>
        <div className="unordered-list">
          <ul>
            {unorderedList.map(ele => (
              <li>{ele}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
