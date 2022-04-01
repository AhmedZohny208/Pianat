import React from 'react'
import HomeFeatures from './HomeFeatures'
import HomeTable from './HomeTable'

export default function Home() {
  return (
    <div className='home'>
      <h2>الشاشة الرئيسية</h2>
      <HomeFeatures />
      <HomeTable />
    </div>
  )
}
