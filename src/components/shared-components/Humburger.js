import React from 'react'

export default function Humburger() {
  return (
    <span role="img" aria-label="menu-unfold" tabindex="-1" className='humburger trigger anticon anticon-menu'>
      <div className='line'></div>
      <div className='line middle'></div>
      <div className='line'></div>
    </span>
  )
}