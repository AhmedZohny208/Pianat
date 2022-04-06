import React from 'react'
import SingleItemBtn from './Buttons/SingleItemBtn'
import {ReactComponent as Check} from './svgs/check.svg';
import {ReactComponent as NotCompleted} from './svgs/notCompleted.svg';
import {ReactComponent as Help} from './svgs/help.svg';
import {ReactComponent as Comment} from './svgs/comment.svg';

export default function AllItems() {
  return (
    <div className="all-items">
      <div className="row gx-4">
        <SingleItemBtn content={'1. تعريفات عامة'} rightIcon={<Check />} />
        <SingleItemBtn content={'2. مقدمة وأحكام عامة'} rightIcon={<Check />} />
        <SingleItemBtn content={'3. تعريف وشكل الصندوق'} rightIcon={<NotCompleted />} />
        <SingleItemBtn content={'4. هدف وغرض الصندوق'} />
        <SingleItemBtn content={'5. مصادر أموال الصندوق والوثائق المصدرة منها'} />
        <SingleItemBtn content={'6. الجهات متلقية الاكتتاب والشراء والاسترداد'} />
        <SingleItemBtn content={'7. السياسة الاستثمارية للصندوق'} />
        <SingleItemBtn content={'8. المخاطر'} />
        <SingleItemBtn content={'9. نوعية المستثمر المخاطب بنشرة الاكتتاب'} />
        <SingleItemBtn content={'10. أصول وموجودات الصندوق'} />
        <SingleItemBtn content={'11.  شركة الصندوق'} />
        <SingleItemBtn content={'12. قنوات تسويق وثائق الاستثمار التى يصدرها الصندوق'} />
        <SingleItemBtn content={'13. مدير الاستثمار'} />
        <SingleItemBtn content={'14. أصول وموجودات الصندوق'} />
        <SingleItemBtn content={'15. مراقبا حسابات الصندوق'} />
        <SingleItemBtn content={'16. أمين الحفظ'} />
        <SingleItemBtn content={'17. جماعة حملة الوثائق'} />
        <SingleItemBtn content={'18. الاكتتاب في الوثائق'} />
        <SingleItemBtn content={'19. شراء / استرداد الوثائق'} />
        <SingleItemBtn content={' 20. تخفيض حجم الصندوق'} />
        <SingleItemBtn content={'21. احتساب قيمة الوثيقة'} />
        <SingleItemBtn content={'22. القوائم المالية والتقييم'} />
        <SingleItemBtn content={'23. وسائل تجنب تعارض المصالح'} />
        <SingleItemBtn content={'24. أرباح الصندوق و عائد الوثيقة و توزيعات الأرباح'} />
        <SingleItemBtn content={'25. لافصاح الدوري عن المعلومات'} />
        <SingleItemBtn content={'22. القوائم المالية والتقييم'} />
        <SingleItemBtn content={'27. الأعباء المالية'} />
        <SingleItemBtn content={'28. أسماء و عناوين مسؤولي الاتصال'} leftIcon={<Help />} />
        <SingleItemBtn content={'29. إقرار الشركة ومدير الاستثمار'} />
        <SingleItemBtn content={'30. إقرار مراقبا الحسابات'} />
        <SingleItemBtn content={'31. إقرار المستشار القانوني'} leftIcon={<Comment />} />
      </div>
    </div>
  )
}
