import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Exit } from '../../../components/shared-components/svgs/sidebarExit.svg'
import { ReactComponent as Circle } from '../../../components/shared-components/svgs/sidebarCircle.svg'
import { ReactComponent as Check } from '../../../components/shared-components/svgs/sidebarCheck.svg'
import { ReactComponent as NotCompleted } from '../../../components/shared-components/svgs/SidebarNotCompleted.svg'
import { ReactComponent as Square } from '../../../components/shared-components/svgs/sidebarSquare.svg'
import { APP_PREFIX_PATH } from '../../../configs/AppConfig'

const path = `${APP_PREFIX_PATH}/create-subscription/stock-fund`

export default function SidebarItems({ isSidebarOpen, closeSidebar }) {

  return (
    <aside
      className={`${
        isSidebarOpen ? 'sidebar-items show-sidebar' : 'sidebar-items'
      }`}
    >
      <div className='sidebar-header'>
        <h6>بنود نشرة الإكتتاب</h6>
        <Exit onClick={() => closeSidebar()} />
      </div>

      <ul className='links'>
        <li key={1} className='active'>
          <Circle />
          <Link to={`${path}/1`}>{'1. تعريفات عامة'}</Link>
        </li>
        <li key={2}>
          <Check />
          <Link to={`${path}/2`}>{'2. مقدمة وأحكام عامة'}</Link>
        </li>
        <li key={3}>
          <NotCompleted />
          <Link to={`${path}/3`}>{'3. تعريف وشكل الصندوق'}</Link>
        </li>
        <li key={4}>
          <Square />
          <Link to={`${path}/4`}>{'4. هدف وغرض الصندوق'}</Link>
        </li>
        <li key={5}>
          <Square />
          <Link to={`${path}/5`}>{'5. مصادر أموال الصندوق والوثائق المصدرة منها'}</Link>
        </li>
        <li key={6}>
          <Square />
          <Link to={`${path}/6`}>{'6. الجهات متلقية الاكتتاب والشراء والاسترداد'}</Link>
        </li>
        <li key={7}>
          <Square />
          <Link to={`${path}/7`}>{'7. السياسة الاستثمارية للصندوق'}</Link>
        </li>
        <li key={8}>
          <Square />
          <Link to={`${path}/8`}>{'8. المخاطر'}</Link>
        </li>
        <li key={9}>
          <Square />
          <Link to={`${path}/9`}>{'9. نوعية المستثمر المخاطب بنشرة الاكتتاب'}</Link>
        </li>
        <li key={10}>
          <Square />
          <Link to={`${path}/10`}>{'10. أصول وموجودات الصندوق'}</Link>
        </li>
        <li key={11}>
          <Square />
          <Link to={`${path}/11`}>{'11.  شركة الصندوق'}</Link>
        </li>
        <li key={12}>
          <Square />
          <Link to={`${path}/12`}>
            {'12. قنوات تسويق وثائق الاستثمار التى يصدرها الصندوق'}
          </Link>
        </li>
        <li key={13}>
          <Square />
          <Link to={`${path}/13`}>{'13. مدير الاستثمار'}</Link>
        </li>
        <li key={14}>
          <Square />
          <Link to={`${path}/14`}>{'14. أصول وموجودات الصندوق'}</Link>
        </li>
        <li key={15}>
          <Square />
          <Link to={`${path}/15`}>{'15. مراقبا حسابات الصندوق'}</Link>
        </li>
        <li key={16}>
          <Square />
          <Link to={`${path}/16`}>{'16. أمين الحفظ'}</Link>
        </li>
        <li key={17}>
          <Square />
          <Link to={`${path}/17`}>{'17. جماعة حملة الوثائق'}</Link>
        </li>
        <li key={18}>
          <Square />
          <Link to={`${path}/18`}>{'18. الاكتتاب في الوثائق'}</Link>
        </li>
        <li key={19}>
          <Square />
          <Link to={`${path}/19`}>{'19. شراء / استرداد الوثائق'}</Link>
        </li>
        <li key={20}>
          <Square />
          <Link to={`${path}/20`}>{' 20. تخفيض حجم الصندوق'}</Link>
        </li>
        <li key={21}>
          <Square />
          <Link to={`${path}/21`}>{'21. احتساب قيمة الوثيقة'}</Link>
        </li>
        <li key={22}>
          <Square />
          <Link to={`${path}/22`}>{'22. القوائم المالية والتقييم'}</Link>
        </li>
        <li key={23}>
          <Square />
          <Link to={`${path}/23`}>{'23. وسائل تجنب تعارض المصالح'}</Link>
        </li>
        <li key={24}>
          <Square />
          <Link to={`${path}/24`}>
            {'24. أرباح الصندوق و عائد الوثيقة و توزيعات الأرباح'}
          </Link>
        </li>
        <li key={25}>
          <Square />
          <Link to={`${path}/25`}>{'25. لافصاح الدوري عن المعلومات'}</Link>
        </li>
        <li key={26}>
          <Square />
          <Link to={`${path}/26`}>{'26. إنهاء وتصفية الصندوق'}</Link>
        </li>
        <li key={27}>
          <Square />
          <Link to={`${path}/27`}>{'27. الأعباء المالية'}</Link>
        </li>
        <li key={28}>
          <Square />
          <Link to={`${path}/28`}>{'28. أسماء و عناوين مسؤولي الاتصال'}</Link>
        </li>
        <li key={29}>
          <Square />
          <Link to={`${path}/29`}>{'29. إقرار الشركة ومدير الاستثمار'}</Link>
        </li>
        <li key={30}>
          <Square />
          <Link to={`${path}/30`}>{'30. إقرار مراقبا الحسابات'}</Link>
        </li>
        <li key={31}>
          <Square />
          <Link to={`${path}/31`}>{'31. إقرار المستشار القانوني'}</Link>
        </li>
      </ul>
    </aside>
  )
}
