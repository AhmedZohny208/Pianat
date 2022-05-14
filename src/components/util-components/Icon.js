import React from 'react'

export default function Icon({ type, className }) {
  return (
    <>
      {React.createElement(type, { className: className })}
    </>
  )
}
