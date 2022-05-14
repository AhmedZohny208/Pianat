import React, { useState } from 'react'
import AddName from '../../../../components/shared-components/Buttons/AddName'
import { ReactComponent as DownArrow } from '../../../../components/shared-components/svgs/accordionDown.svg'
import ChoosenItem from './ChoosenItem'
import RisksContent from './RisksContent'

export default function Risks() {
  const [showContent, isShowContent] = useState(false)
  const [selectedRisks, setSelectedRisks] = useState([])

  return (
    <>
      <div className='risks'>
        <div
          className={`select-header ${showContent && 'expanded'}`}
          onClick={() => isShowContent(!showContent)}
        >
          <h6>تصنيف المخاطر</h6>
          <DownArrow />
        </div>
        {showContent && (
          <RisksContent
            selectedRisks={selectedRisks}
            setSelectedRisks={setSelectedRisks}
          />
        )}
      </div>

      {selectedRisks.length > 0 && (
        <div className='added-risks'>
          {/* <AddName content={'اضف مخاطر جديدة'} classn='mb-2' /> */}
          {selectedRisks.map((e, i) => (
            <>
              {i !== 0 && <hr />}
              <ChoosenItem
                title={e}
                selectedRisks={selectedRisks}
                setSelectedRisks={setSelectedRisks}
              />
            </>
          ))}
        </div>
      )}
    </>
  )
}
