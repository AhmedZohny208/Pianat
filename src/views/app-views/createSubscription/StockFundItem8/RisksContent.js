import React, { useState, useEffect } from 'react'
import ChoosenItem from './ChoosenItem'
import GeneralOptions from './GeneralOptions'
import SingleOptionItems from './SingleOptionItems'

export default function RisksContent({ selectedRisks, setSelectedRisks }) {
  const [generalOptions, showGeneralOptions] = useState(true)

  const [item1, showItem1] = useState(false)
  const [item2, showItem2] = useState(false)
  const [item3, showItem3] = useState(false)
  const [item4, showItem4] = useState(false)
  const [item5, showItem5] = useState(false)
  const [item6, showItem6] = useState(false)
  const [item7, showItem7] = useState(false)
  const [item8, showItem8] = useState(false)
  const [item9, showItem9] = useState(false)
  const [item10, showItem10] = useState(false)
  const [item11, showItem11] = useState(false)
  const [item12, showItem12] = useState(false)
  const [item13, showItem13] = useState(false)
  const [item16, showItem16] = useState(false)
  const [item17, showItem17] = useState(false)
  const [item18, showItem18] = useState(false)
  const [item19, showItem19] = useState(false)
  const [item20, showItem20] = useState(false)

  useEffect(() => {
    console.log(selectedRisks)
  }, [selectedRisks])

  const itemOptions = (func) => {
    func(true)
    showGeneralOptions(false)
  }
  const goback = (func) => {
    func(false)
    showGeneralOptions(true)
  }

  function onChange(e) {
    if (e.target.checked === true) {
      setSelectedRisks([...selectedRisks, e.target.value])
    }

    if (e.target.checked === false) {
      const newArr = selectedRisks.filter((ele) => ele !== e.target.value)
      setSelectedRisks(newArr)
    }
  }

  return (
    <div className='risks-content'>
      {generalOptions && (
        <GeneralOptions
          onChange={onChange}
          itemOptions={itemOptions}
          selectedRisks={selectedRisks}
          showItem1={showItem1}
          showItem2={showItem2}
          showItem3={showItem3}
          showItem4={showItem4}
          showItem5={showItem5}
          showItem6={showItem6}
          showItem7={showItem7}
          showItem8={showItem8}
          showItem9={showItem9}
          showItem10={showItem10}
          showItem11={showItem11}
          showItem12={showItem12}
          showItem13={showItem13}
          showItem16={showItem16}
          showItem17={showItem17}
          showItem18={showItem18}
          showItem19={showItem19}
          showItem20={showItem20}
        />
      )}

      <SingleOptionItems
        goback={goback}
        onChange={onChange}
        itemOptions={itemOptions}
        selectedRisks={selectedRisks}
        item1={item1}
        item2={item2}
        item3={item3}
        item4={item4}
        item5={item5}
        item6={item6}
        item7={item7}
        item8={item8}
        item9={item9}
        item10={item10}
        item11={item11}
        item12={item12}
        item13={item13}
        item16={item16}
        item17={item17}
        item18={item18}
        item19={item19}
        item20={item20}
        showItem1={showItem1}
        showItem2={showItem2}
        showItem3={showItem3}
        showItem4={showItem4}
        showItem5={showItem5}
        showItem6={showItem6}
        showItem7={showItem7}
        showItem8={showItem8}
        showItem9={showItem9}
        showItem10={showItem10}
        showItem11={showItem11}
        showItem12={showItem12}
        showItem13={showItem13}
        showItem16={showItem16}
        showItem17={showItem17}
        showItem18={showItem18}
        showItem19={showItem19}
        showItem20={showItem20}
      />
    </div>
  )
}
