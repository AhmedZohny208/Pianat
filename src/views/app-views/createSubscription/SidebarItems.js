import React, { useRef, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { ReactComponent as Exit } from '../../../components/shared-components/svgs/sidebarExit.svg'
import { ReactComponent as Circle } from '../../../components/shared-components/svgs/sidebarCircle.svg'
import { APP_PREFIX_PATH } from '../../../configs/AppConfig'
import items from './ItemsConfig'

const path = `${APP_PREFIX_PATH}/create-subscription/stock-fund`

export default function SidebarItems({ isSidebarOpen, closeSidebar }) {
  const location = useLocation()
  const history = useHistory()
  const myref = useRef(null)

  useEffect(() => {
    console.log('myref..', myref.current)
  })

  useEffect(() => {
    if (
      Number(location.pathname.split('/')[4]) >= 1 &&
      Number(location.pathname.split('/')[4]) < 8
    ) {
      myref.current.scrollTo({
        top: 0,
      })
    } else if (
      Number(location.pathname.split('/')[4]) >= 8 &&
      Number(location.pathname.split('/')[4]) < 15
    ) {
      myref.current.scrollTo({
        top: 497,
      })
    } else if (
      Number(location.pathname.split('/')[4]) >= 15 &&
      Number(location.pathname.split('/')[4]) < 24
    ) {
      myref.current.scrollTo({
        top: 947,
      })
    } else if (
      Number(location.pathname.split('/')[4]) >= 24 &&
      Number(location.pathname.split('/')[4]) < 32
    ) {
      myref.current.scrollTo({
        top: 1404,
      })
    } else {
      myref.current.scrollTo({
        top: 1531,
      })
    }
  })

  return (
    <div className='sidebarItems-container'>
      <aside
        className={`${
          isSidebarOpen ? 'sidebar-items show-sidebar' : 'sidebar-items'
        }`}
        ref={myref}
      >
        <div className='sidebar-header'>
          <h6 className='title'>بنود نشرة الإكتتاب</h6>
          <h6 className='title-sm'>البنود</h6>
          <Exit onClick={() => closeSidebar()} />
        </div>

        <ul className='links'>
          {items.map((item) => (
            <li
              key={item.key}
              className={
                location.pathname === `${path}/${item.key}` ? 'active' : ''
              }
              onClick={() => history.push(`${path}/${item.key}`)}
            >
              <div className='icon'>
                {location.pathname === `${path}/${item.key}` ? (
                  <Circle />
                ) : (
                  item.icon
                )}
              </div>
              <div className='number'>{item.key}</div>
              <Link
                to={`${path}/${item.key}`}
              >{`${item.key}. ${item.name}`}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
