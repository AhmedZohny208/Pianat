import { ReactComponent as Check } from '../../../components/shared-components/svgs/sidebarCheck.svg'
import { ReactComponent as NotCompleted } from '../../../components/shared-components/svgs/SidebarNotCompleted.svg'
import { ReactComponent as Square } from '../../../components/shared-components/svgs/sidebarSquare.svg'
import { ReactComponent as Help } from '../../../components/shared-components/svgs/help.svg'
import { ReactComponent as Comment } from '../../../components/shared-components/svgs/comment.svg'
import { ReactComponent as Signature } from '../../../components/shared-components/svgs/signatureBlue.svg'

const configItems = [
  {
    key: 1,
    name: 'تعريفات عامة',
    icon: <Square />,
    rightIcon: <Check />,
  },
  {
    key: 2,
    name: 'مقدمة وأحكام عامة',
    icon: <Square />,
    rightIcon: <Check />,
  },
  {
    key: 3,
    name: 'تعريف وشكل الصندوق',
    icon: <NotCompleted />,
    rightIcon: <NotCompleted />,
  },
  {
    key: 4,
    name: 'هدف وغرض الصندوق',
    icon: <NotCompleted />,
  },
  {
    key: 5,
    name: 'مصادر أموال الصندوق والوثائق المصدرة منها',
    icon: <Check />,
  },
  {
    key: 6,
    name: 'الجهات متلقية الاكتتاب والشراء والاسترداد',
    icon: <Square />,
  },
  {
    key: 7,
    name: 'السياسة الاستثمارية للصندوق',
    icon: <Square />,
  },
  {
    key: 8,
    name: 'المخاطر',
    icon: <NotCompleted />,
  },
  {
    key: 9,
    name: 'نوعية المستثمر المخاطب بنشرة الاكتتاب',
    icon: <NotCompleted />,
  },
  {
    key: 10,
    name: 'أصول وموجودات الصندوق',
    icon: <NotCompleted />,
  },
  {
    key: 11,
    name: 'شركة الصندوق',
    icon: <Square />,
  },
  {
    key: 12,
    name: 'قنوات تسويق وثائق الاستثمار التى يصدرها الصندوق',
    icon: <Check />,
  },
  {
    key: 13,
    name: 'مدير الاستثمار',
    icon: <Check />,
  },
  {
    key: 14,
    name: 'أصول وموجودات الصندوق',
    icon: <Square />,
  },
  {
    key: 15,
    name: 'مراقبا حسابات الصندوق',
    icon: <Square />,
  },
  {
    key: 16,
    name: 'أمين الحفظ',
    icon: <Square />,
  },
  {
    key: 17,
    name: 'جماعة حملة الوثائق',
    icon: <Check />,
  },
  {
    key: 18,
    name: 'الاكتتاب في الوثائق',
    icon: <Square />,
  },
  {
    key: 19,
    name: 'شراء / استرداد الوثائق',
    icon: <Square />,
  },
  {
    key: 20,
    name: 'تخفيض حجم الصندوق',
    icon: <Square />,
  },
  {
    key: 21,
    name: 'احتساب قيمة الوثيقة',
    icon: <Square />,
  },
  {
    key: 22,
    name: 'القوائم المالية والتقييم',
    icon: <Square />,
  },
  {
    key: 23,
    name: 'وسائل تجنب تعارض المصالح',
    icon: <Square />,
  },
  {
    key: 24,
    name: 'أرباح الصندوق و عائد الوثيقة و توزيعات الأرباح',
    icon: <Square />,
  },
  {
    key: 25,
    name: 'الافصاح الدوري عن المعلومات',
    icon: <Check />,
  },
  {
    key: 26,
    name: 'إنهاء وتصفية الصندوق',
    icon: <Square />,
  },
  {
    key: 27,
    name: 'الأعباء المالية',
    icon: <Square />,
  },
  {
    key: 28,
    name: 'أسماء و عناوين مسؤولي الاتصال',
    icon: <Square />,
    leftIcon: <Help />,
    tip: 'help',
  },
  {
    key: 29,
    name: 'إقرار الشركة ومدير الاستثمار',
    icon: <Square />,
    signature: <Signature />,
  },
  {
    key: 30,
    name: 'إقرار مراقبا الحسابات',
    icon: <Check />,
    signature: <Signature />,
  },
  {
    key: 31,
    name: 'إقرار المستشار القانوني',
    icon: <Square />,
    leftIcon: <Comment />,
    tip: 'comment',
    signature: <Signature />,
  },
  {
    key: 32,
    name: 'إقرار شركة خدمات الادارة',
    icon: <Square />,
  },
  {
    key: 33,
    name: 'إقرار أمين الحفظ',
    icon: <Square />,
  },
  {
    key: 34,
    name: 'إقرار لجنة الرقابة الشرعية',
    icon: <Square />,
  },
]

export default configItems
