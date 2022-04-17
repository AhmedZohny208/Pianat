import React from 'react'
import { Input } from 'antd'

export default function ListedInput({ placeholder, ph2, value, setValue, items, setItems, minHeight }) {
  return (
    <div className='listed-input'>
      <div>
        <Input
          placeholder={placeholder}
          name='target'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (value) {
                setItems((item) => {
                  return [...item, value]
                })
                setValue('')
              }
            }
          }}
        />
        <div className='bullet'></div>
        {!value && <div className='hint'>{ph2}</div>}
      </div>
      {minHeight ? (
        <div className='items' style={{ minHeight }}>
          {items.map((ele) => (
            <p>{ele}</p>
          ))}
        </div>
      ) : (
        <>
          {items.length > 0 && (
            <div className='items'>
              {items.map((ele) => (
                <p>{ele}</p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
