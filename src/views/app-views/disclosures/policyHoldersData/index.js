import React from 'react'
import Features from './components/Features'
import MainTable from './components/MainTable'

export default function PolicyHoldersData({ match }) {
  return (
    <div className='home'>
      <h2>الافصاحات</h2>
      <Features />
      <MainTable match={match} />
    </div>
  )
}
