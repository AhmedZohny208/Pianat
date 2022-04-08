import React from 'react'
import SingleItemBtn from './Buttons/SingleItemBtn'
import { ReactComponent as Check } from './svgs/check.svg'
import { ReactComponent as NotCompleted } from './svgs/notCompleted.svg'
import { ReactComponent as Help } from './svgs/help.svg'
import { ReactComponent as Comment } from './svgs/comment.svg'
import { APP_PREFIX_PATH } from '../../configs/AppConfig'

const path = `${APP_PREFIX_PATH}/create-subscription/stock-fund`

export default function AllItems() {
  return (
    <div className='all-items'>
      <div className='row gx-4'>
        <SingleItemBtn
          content={'1. تعريفات عامة'}
          rightIcon={<Check />}
          to={`${path}/1`}
        />
        <SingleItemBtn
          content={'2. مقدمة وأحكام عامة'}
          rightIcon={<Check />}
          to={`${path}/2`}
        />
        <SingleItemBtn
          content={'3. تعريف وشكل الصندوق'}
          rightIcon={<NotCompleted />}
          to={`${path}/3`}
        />
        <SingleItemBtn content={'4. هدف وغرض الصندوق'} to={`${path}/4`} />
        <SingleItemBtn
          content={'5. مصادر أموال الصندوق والوثائق المصدرة منها'}
          to={`${path}/5`}
        />
        <SingleItemBtn
          content={'6. الجهات متلقية الاكتتاب والشراء والاسترداد'}
          to={`${path}/6`}
        />
        <SingleItemBtn
          content={'7. السياسة الاستثمارية للصندوق'}
          to={`${path}/7`}
        />
        <SingleItemBtn content={'8. المخاطر'} to={`${path}/8`} />
        <SingleItemBtn
          content={'9. نوعية المستثمر المخاطب بنشرة الاكتتاب'}
          to={`${path}/9`}
        />
        <SingleItemBtn
          content={'10. أصول وموجودات الصندوق'}
          to={`${path}/10`}
        />
        <SingleItemBtn content={'11.  شركة الصندوق'} to={`${path}/11`} />
        <SingleItemBtn
          content={'12. قنوات تسويق وثائق الاستثمار التى يصدرها الصندوق'}
          to={`${path}/12`}
        />
        <SingleItemBtn content={'13. مدير الاستثمار'} to={`${path}/13`} />
        <SingleItemBtn
          content={'14. أصول وموجودات الصندوق'}
          to={`${path}/14`}
        />
        <SingleItemBtn
          content={'15. مراقبا حسابات الصندوق'}
          to={`${path}/15`}
        />
        <SingleItemBtn content={'16. أمين الحفظ'} to={`${path}/16`} />
        <SingleItemBtn content={'17. جماعة حملة الوثائق'} to={`${path}/17`} />
        <SingleItemBtn content={'18. الاكتتاب في الوثائق'} to={`${path}/18`} />
        <SingleItemBtn
          content={'19. شراء / استرداد الوثائق'}
          to={`${path}/19`}
        />
        <SingleItemBtn content={' 20. تخفيض حجم الصندوق'} to={`${path}/20`} />
        <SingleItemBtn content={'21. احتساب قيمة الوثيقة'} to={`${path}/21`} />
        <SingleItemBtn
          content={'22. القوائم المالية والتقييم'}
          to={`${path}/22`}
        />
        <SingleItemBtn
          content={'23. وسائل تجنب تعارض المصالح'}
          to={`${path}/23`}
        />
        <SingleItemBtn
          content={'24. أرباح الصندوق و عائد الوثيقة و توزيعات الأرباح'}
          to={`${path}/24`}
        />
        <SingleItemBtn
          content={'25. لافصاح الدوري عن المعلومات'}
          to={`${path}/25`}
        />
        <SingleItemBtn
          content={'26. إنهاء وتصفية الصندوق'}
          to={`${path}/26`}
        />
        <SingleItemBtn content={'27. الأعباء المالية'} to={`${path}/27`} />
        <SingleItemBtn
          content={'28. أسماء و عناوين مسؤولي الاتصال'}
          leftIcon={<Help />}
          tip={'help'}
          to={`${path}/28`}
        />
        <SingleItemBtn
          content={'29. إقرار الشركة ومدير الاستثمار'}
          to={`${path}/29`}
        />
        <SingleItemBtn
          content={'30. إقرار مراقبا الحسابات'}
          to={`${path}/30`}
        />
        <SingleItemBtn
          content={'31. إقرار المستشار القانوني'}
          leftIcon={<Comment />}
          tip={'comment'}
          to={`${path}/31`}
        />
      </div>
    </div>
  )
}
