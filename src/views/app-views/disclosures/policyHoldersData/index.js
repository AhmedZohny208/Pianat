import React from 'react'
import Features from './Features'
import MainTable from './MainTable'

export default function PolicyHoldersData({ match }) {
  return (
    <div className='home'>
      <h2>الافصاحات</h2>
      <Features />
      <MainTable match={match} />
    </div>
  )
}
