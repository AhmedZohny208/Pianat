import React from 'react'
import HomeFeatures from '../../../components/shared-components/HomeFeatures'
import HomeTable from '../../../components/shared-components/HomeTable'

export default function Home() {

  return (
    <div className='home'>
      <h2>الشاشة الرئيسية</h2>
      <HomeFeatures />
      <HomeTable />
    </div>
  )
}
