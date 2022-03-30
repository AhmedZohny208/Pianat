import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { BiSearch, BiBell } from 'react-icons/bi'
import { Avatar } from 'antd'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link class="navbar-brand" href="#">
          <img src="/img/brand.png" alt="brand" width={217} height={61} />
        </Link>
        
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

          <div className='right-side d-flex align-items-center'>
            <FiMenu />
            <form className="search d-flex position-relative">
              <input className="form-control me-2" type="search" placeholder="بحث" aria-label="Search" />
              <button className="btn position-absolute" type="submit">
                <BiSearch />
              </button>
            </form>
          </div>

          <div className='left-side d-flex align-items-center'>
            <div className='notification'>
              <BiBell />
              <div className="circle"></div>
            </div>
            <div className="avatar d-flex align-items-center">
              <Avatar 
                alt="avatar"
                src="/img/avatar/Sally.png"
                style={{ width: 48, height: 48 }} 
              />
              <p className='mb-0'>سالي جورج</p>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}
