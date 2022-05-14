import React from 'react'
import { Avatar } from 'antd';

export default function NavProfile() {
  return (
    <div className="avatar d-flex align-items-center">
      <Avatar 
        alt="avatar"
        src="/img/avatar/Sally.png"
        style={{ width: 48, height: 48 }} 
      />
      <p className='mb-0'>سالي جورج</p>
    </div>
  )
}
