import React from 'react'
import { Input } from 'antd'
import { ReactComponent as Add } from '../svgs/addSelect.svg'

export default function SelectInput({
  value,
  onChange,
  onKeyDown,
  placeholder,
  clickable,
  onClick,
}) {
  return clickable ? (
    <div className='add-select-input' onClick={onClick}>
      <Add />
      <p>{placeholder}</p>
    </div>
  ) : (
    <div className='add-select-input'>
      <Add />
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}
