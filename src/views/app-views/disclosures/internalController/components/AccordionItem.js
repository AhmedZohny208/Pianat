import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../../../../../components/shared-components/svgs/ArrowupWhite.svg'

export default function AccordionItem({ title, content }) {
  const [showInfo, setShowInfo] = useState(true)

  return (
    <div className='disclosure-accordion'>
      <div 
        className="accordion-header"
        onClick={() => setShowInfo(!showInfo)}
      >
        <h5>{title}</h5>
        <Arrow
          onClick={() => setShowInfo(!showInfo)}
          className={!showInfo && 'show-info'}
        />
      </div>

      {showInfo && (
        <div className="accordion-content">
          {content}
        </div>
      )}
    </div>
  )
}
