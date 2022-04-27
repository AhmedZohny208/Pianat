import React, { useRef, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { ReactComponent as Exit } from '../../../components/shared-components/svgs/sidebarExit.svg'
import { ReactComponent as Circle } from '../../../components/shared-components/svgs/sidebarCircle.svg'
import { ReactComponent as Check } from '../../../components/shared-components/svgs/sidebarCheck.svg'
import { ReactComponent as NotCompleted } from '../../../components/shared-components/svgs/SidebarNotCompleted.svg'
import { ReactComponent as Square } from '../../../components/shared-components/svgs/sidebarSquare.svg'
import { APP_PREFIX_PATH } from '../../../configs/AppConfig'

const path = `${APP_PREFIX_PATH}/create-subscription/stock-fund`

export default function SidebarItems({ isSidebarOpen, closeSidebar }) {
  const location = useLocation()
  const history = useHistory()
  const myref = useRef(null)

  useEffect(() => {
    console.log("myref..", myref.current);
  });

  useEffect(() => {
    if (Number(location.pathname.split('/')[4]) >= 1 && Number(location.pathname.split('/')[4]) < 8) {
      myref.current.scrollTo({
        top: 0,
      });
    } 
    else if (Number(location.pathname.split('/')[4]) >= 8 && Number(location.pathname.split('/')[4]) < 15) {
      myref.current.scrollTo({
        top: 497,
      });
    }
    else if (Number(location.pathname.split('/')[4]) >= 15 && Number(location.pathname.split('/')[4]) < 24) {
      myref.current.scrollTo({
        top: 947,
      });
    } else if (Number(location.pathname.split('/')[4]) >= 24 && Number(location.pathname.split('/')[4]) < 32) {
      myref.current.scrollTo({
        top: 1404,
      });
    } else {
      myref.current.scrollTo({
        top: 1531,
      });
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
          <li key={1} className={location.pathname === `${path}/1` ? 'active' : ''} onClick={() => history.push(`${path}/1`)}>
            <div className='icon'><Circle /></div>
            <div className="number">1</div>
            <Link to={`${path}/1`}>{'1. تعريفات عامة'}</Link>
          </li>
          <li key={2} className={location.pathname === `${path}/2` ? 'active' : ''} onClick={() => history.push(`${path}/2`)}>
            <div className='icon'><Check /></div>
            <div className="number">2</div>
            <Link to={`${path}/2`}>{'2. مقدمة وأحكام عامة'}</Link>
          </li>
          <li key={3} className={location.pathname === `${path}/3` ? 'active' : ''} onClick={() => history.push(`${path}/3`)}>
            <div className='icon'><NotCompleted /></div>
            <div className="number">3</div>
            <Link to={`${path}/3`}>{'3. تعريف وشكل الصندوق'}</Link>
          </li>
          <li key={4} className={location.pathname === `${path}/4` ? 'active' : ''} onClick={() => history.push(`${path}/4`)}>
            <div className='icon'><Square /></div>
            <div className="number">4</div>
            <Link to={`${path}/4`}>{'4. هدف وغرض الصندوق'}</Link>
          </li>
          <li key={5} className={location.pathname === `${path}/5` ? 'active' : ''} onClick={() => history.push(`${path}/5`)}>
            <div className='icon'><Square /></div>
            <div className="number">5</div>
            <Link to={`${path}/5`}>{'5. مصادر أموال الصندوق والوثائق المصدرة منها'}</Link>
          </li>
          <li key={6} className={location.pathname === `${path}/6` ? 'active' : ''} onClick={() => history.push(`${path}/6`)}>
            <div className='icon'><Square /></div>
            <div className="number">6</div>
            <Link to={`${path}/6`}>{'6. الجهات متلقية الاكتتاب والشراء والاسترداد'}</Link>
          </li>
          <li key={7} className={location.pathname === `${path}/7` ? 'active' : ''} onClick={() => history.push(`${path}/7`)}>
            <div className='icon'><Square /></div>
            <div className="number">7</div>
            <Link to={`${path}/7`}>{'7. السياسة الاستثمارية للصندوق'}</Link>
          </li>
          <li key={8} className={location.pathname === `${path}/8` ? 'active' : ''} onClick={() => history.push(`${path}/8`)}>
            <div className='icon'><Square /></div>
            <div className="number">8</div>
            <Link to={`${path}/8`}>{'8. المخاطر'}</Link>
          </li>
          <li key={9} className={location.pathname === `${path}/9` ? 'active' : ''} onClick={() => history.push(`${path}/9`)}>
            <div className='icon'><Square /></div>
            <div className="number">9</div>
            <Link to={`${path}/9`}>{'9. نوعية المستثمر المخاطب بنشرة الاكتتاب'}</Link>
          </li>
          <li key={10} className={location.pathname === `${path}/10` ? 'active' : ''} onClick={() => history.push(`${path}/10`)}>
            <div className='icon'><Square /></div>
            <div className="number">10</div>
            <Link to={`${path}/10`}>{'10. أصول وموجودات الصندوق'}</Link>
          </li>
          <li key={11} className={location.pathname === `${path}/11` ? 'active' : ''} onClick={() => history.push(`${path}/11`)}>
            <div className='icon'><Square /></div>
            <div className="number">11</div>
            <Link to={`${path}/11`}>{'11.  شركة الصندوق'}</Link>
          </li>
          <li key={12} className={location.pathname === `${path}/12` ? 'active' : ''} onClick={() => history.push(`${path}/12`)}>
            <div className='icon'><Square /></div>
            <div className="number">12</div>
            <Link to={`${path}/12`}>
              {'12. قنوات تسويق وثائق الاستثمار التى يصدرها الصندوق'}
            </Link>
          </li>
          <li key={13} className={location.pathname === `${path}/13` ? 'active' : ''} onClick={() => history.push(`${path}/13`)}>
            <div className='icon'><Square /></div>
            <div className="number">13</div>
            <Link to={`${path}/13`}>{'13. مدير الاستثمار'}</Link>
          </li>
          <li key={14} className={location.pathname === `${path}/14` ? 'active' : ''} onClick={() => history.push(`${path}/14`)}>
            <div className='icon'><Square /></div>
            <div className="number">14</div>
            <Link to={`${path}/14`}>{'14. أصول وموجودات الصندوق'}</Link>
          </li>
          <li key={15} className={location.pathname === `${path}/15` ? 'active' : ''} onClick={() => history.push(`${path}/15`)}>
            <div className='icon'><Square /></div>
            <div className="number">15</div>
            <Link to={`${path}/15`}>{'15. مراقبا حسابات الصندوق'}</Link>
          </li>
          <li key={16} className={location.pathname === `${path}/16` ? 'active' : ''} onClick={() => history.push(`${path}/16`)}>
            <div className='icon'><Square /></div>
            <div className="number">16</div>
            <Link to={`${path}/16`}>{'16. أمين الحفظ'}</Link>
          </li>
          <li key={17} className={location.pathname === `${path}/17` ? 'active' : ''} onClick={() => history.push(`${path}/17`)}>
            <div className='icon'><Square /></div>
            <div className="number">17</div>
            <Link to={`${path}/17`}>{'17. جماعة حملة الوثائق'}</Link>
          </li>
          <li key={18} className={location.pathname === `${path}/18` ? 'active' : ''} onClick={() => history.push(`${path}/18`)}>
            <div className='icon'><Square /></div>
            <div className="number">18</div>
            <Link to={`${path}/18`}>{'18. الاكتتاب في الوثائق'}</Link>
          </li>
          <li key={19} className={location.pathname === `${path}/19` ? 'active' : ''} onClick={() => history.push(`${path}/19`)}>
            <div className='icon'><Square /></div>
            <div className="number">19</div>
            <Link to={`${path}/19`}>{'19. شراء / استرداد الوثائق'}</Link>
          </li>
          <li key={20} className={location.pathname === `${path}/20` ? 'active' : ''} onClick={() => history.push(`${path}/20`)}>
            <div className='icon'><Square /></div>
            <div className="number">20</div>
            <Link to={`${path}/20`}>{' 20. تخفيض حجم الصندوق'}</Link>
          </li>
          <li key={21} className={location.pathname === `${path}/21` ? 'active' : ''} onClick={() => history.push(`${path}/21`)}>
            <div className='icon'><Square /></div>
            <div className="number">21</div>
            <Link to={`${path}/21`}>{'21. احتساب قيمة الوثيقة'}</Link>
          </li>
          <li key={22} className={location.pathname === `${path}/22` ? 'active' : ''} onClick={() => history.push(`${path}/22`)}>
            <div className='icon'><Square /></div>
            <div className="number">22</div>
            <Link to={`${path}/22`}>{'22. القوائم المالية والتقييم'}</Link>
          </li>
          <li key={23} className={location.pathname === `${path}/23` ? 'active' : ''} onClick={() => history.push(`${path}/23`)}>
            <div className='icon'><Square /></div>
            <div className="number">23</div>
            <Link to={`${path}/23`}>{'23. وسائل تجنب تعارض المصالح'}</Link>
          </li>
          <li key={24} className={location.pathname === `${path}/24` ? 'active' : ''} onClick={() => history.push(`${path}/24`)}>
            <div className='icon'><Square /></div>
            <div className="number">24</div>
            <Link to={`${path}/24`}>
              {'24. أرباح الصندوق و عائد الوثيقة و توزيعات الأرباح'}
            </Link>
          </li>
          <li key={25} className={location.pathname === `${path}/25` ? 'active' : ''} onClick={() => history.push(`${path}/25`)}>
            <div className='icon'><Square /></div>
            <div className="number">25</div>
            <Link to={`${path}/25`}>{'25. لافصاح الدوري عن المعلومات'}</Link>
          </li>
          <li key={26} className={location.pathname === `${path}/26` ? 'active' : ''} onClick={() => history.push(`${path}/26`)}>
            <div className='icon'><Square /></div>
            <div className="number">26</div>
            <Link to={`${path}/26`}>{'26. إنهاء وتصفية الصندوق'}</Link>
          </li>
          <li key={27} className={location.pathname === `${path}/27` ? 'active' : ''} onClick={() => history.push(`${path}/27`)}>
            <div className='icon'><Square /></div>
            <div className="number">27</div>
            <Link to={`${path}/27`}>{'27. الأعباء المالية'}</Link>
          </li>
          <li key={28} className={location.pathname === `${path}/28` ? 'active' : ''} onClick={() => history.push(`${path}/28`)}>
            <div className='icon'><Square /></div>
            <div className="number">28</div>
            <Link to={`${path}/28`}>{'28. أسماء و عناوين مسؤولي الاتصال'}</Link>
          </li>
          <li key={29} className={location.pathname === `${path}/29` ? 'active' : ''} onClick={() => history.push(`${path}/29`)}>
            <div className='icon'><Square /></div>
            <div className="number">29</div>
            <Link to={`${path}/29`}>{'29. إقرار الشركة ومدير الاستثمار'}</Link>
          </li>
          <li key={30} className={location.pathname === `${path}/30` ? 'active' : ''} onClick={() => history.push(`${path}/30`)}>
            <div className='icon'><Square /></div>
            <div className="number">30</div>
            <Link to={`${path}/30`}>{'30. إقرار مراقبا الحسابات'}</Link>
          </li>
          <li key={31} className={location.pathname === `${path}/31` ? 'active' : ''} onClick={() => history.push(`${path}/31`)}>
            <div className='icon'><Square /></div>
            <div className="number">31</div>
            <Link to={`${path}/31`}>{'31. إقرار المستشار القانوني'}</Link>
          </li>
          <li key={32} className={location.pathname === `${path}/32` ? 'active' : ''} onClick={() => history.push(`${path}/32`)}>
            <div className='icon'><Square /></div>
            <div className="number">32</div>
            <Link to={`${path}/32`}>{'32. إقرار شركة خدمات الادارة'}</Link>
          </li>
          <li key={33} className={location.pathname === `${path}/33` ? 'active' : ''} onClick={() => history.push(`${path}/33`)}>
            <div className='icon'><Square /></div>
            <div className="number">33</div>
            <Link to={`${path}/33`}>{'33. إقرار أمين الحفظ'}</Link>
          </li>
          <li key={34} className={location.pathname === `${path}/34` ? 'active' : ''} onClick={() => history.push(`${path}/34`)}>
            <div className='icon'><Square /></div>
            <div className="number">34</div>
            <Link to={`${path}/34`}>{'34. إقرار لجنة الرقابة الشرعية'}</Link>
          </li>
        </ul>
      </aside>

      <div className="arrow"></div>
    </div>
  )
}
