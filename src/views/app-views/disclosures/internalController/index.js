import React from 'react'
import Features from './components/Features'
import MainTable from './components/MainTable'

export default function InternalController({ match }) {
  return (
    <div className='home'>
      <h2>افصاحات المراقب الداخلي</h2>
      <Features />
      <MainTable match={match} />
    </div>
  )
}
