import React, { useState } from 'react'
import item from '../../../../configs/stockFundItems/Item14'
import ListedInput from '../../../../components/shared-components/Form/ListedInput'

export default function Form2_3() {
  const [purpose, setPurpose] = useState('')
  const [itemsTwo, setItemsTwo] = useState([])
  return (
    <div>
      <h6 className='fw-bold mb-3'>{item.p10}</h6>
      <ListedInput
        ph2={item.ph3}
        value={purpose}
        setValue={setPurpose}
        items={itemsTwo}
        setItems={setItemsTwo}
      />
    </div>
  )
}
