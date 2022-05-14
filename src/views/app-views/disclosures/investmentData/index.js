import React from 'react'
import Features from './components/Features'
import MainTable from './components/MainTable'

export default function InvestmentData({ match }) {
  return (
    <div className='home'>
      <h2>افصاحات بيانات الاستثمار</h2>
      <Features />
      <MainTable match={match} />
    </div>
  )
}
