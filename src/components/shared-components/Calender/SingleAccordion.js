import React, { useState } from 'react'

export default function SingleAccordion({
  Arrow,
  content,
  title,
  value,
  setValue,
}) {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div className='accordion'>
      <div className='header' onClick={() => setShowInfo(!showInfo)}>
        <Arrow className={`arrow ${showInfo && 'show-info'}`} />
        {title} <span>{value}</span>
      </div>

      {showInfo && (
        <>
          <div className='content'>
            {content.map((ele, i) => (
              <div
                key={i}
                className={ele === value && 'active'}
                onClick={() => setValue(ele)}
              >
                {title === 'الاسبوع' ? `الاسبوع ${ele}` : ele}
              </div>
            ))}
          </div>
          <div className='clearfix'></div>
        </>
      )}
    </div>
  )
}
