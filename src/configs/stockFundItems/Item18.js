const item = {
  t1: '18-1 نوع الاكتتاب',
  t2: '18-2 مدة الطرح',
  t3: '18-3 البنك متلقي الاكتتاب',
  t4: '18-4 القيمة الاسمية للوثيقة والقدر المطلوب سداده',
  t5: '18-5 الحد الأدني والأقصى للاكتتاب في الصندوق',
  t6: '18-6 طبيعة الوثيقة من حيث الإصدار',
  t7: '18-7 سند الاكتتاب في الصندوق',
  t8: '18-8 تغطية الاكتتاب',

  p2_1: 'يتم فتح باب الاكتتاب في وثائق الصندوق اعتبارا من',
  p2_2: 'ولمدة شهرين تنتهي في',
  p2_3: 'ويجوز غلق باب الإكتتاب بعد مرور خمسة أيام من تاريخ فتح باب الإكتتاب فى حالة تغطية جميع الوثائق المطروحة.',
  p2_4: 'إذا لم يكتتب في جميع الوثائق المطروحة خلال تلك المدة جاز بموافقة رئيس الهيئة مد فترة الإكتتاب مدة لا تزيد على شهرين آخرين .',
  p2_5: 'ويسقط قرار الهيئة باعتماد نشرة الاكتتاب إذا لم يتم فتح باب الإكتتاب فى الوثائق خلال شهرين من تاريخ صدور الموافقة ما لم تقرر الهيئة مد تلك الفترة لمدة أو مدد أخرى.',

  p3: 'يتم الاكتتاب فى الوثائق من خلال',

  p4_1: 'تبلغ القيمة الاسمية للوثيقة',
  p4_2: 'جم',
  p4_3: 'وتسدد قيمة الوثيقة المكتتب فيها نقداً',

  p5_1: 'الحد الأدني',
  p5_2: 'جم',
  p5_3: 'الحد الأقصى',
  p5_4: 'جم',

  p6: 'تحمل الوثائق لحامليها حقوقاً متساوية ويشارك حملة الوثائق في الأرباح والخسائر الناتجة عن استثمارات الصندوق كل بنسبة ما يمتلكه من وثائق.',

  p7: 'يتم الاكتتاب بموجب مستخرج الكتروني لشهادة اكتتاب مختومة بختم البنك وموقع عليها من المختص بالبنك الذي تلقي قيمة الاكتتاب متضمنة:',
  unordered1: [
    '- اسم الصندوق مصدر الوثيقة.',
    '- رقم وتاريخ الترخيص بمزاولة النشاط.',
    '- اسم البنك الذي تلقي قيمة الاكتتاب.',
    '- اسم المكتب وعنوانه وجنسيته وتاريخ الاكتتاب.',
    '- إجمالي قيمة الوثائق المطروحة للاكتتاب.',
    '- قيمة وعدد الوثائق المكتتب فيها بالأرقام والحروف.',
    '- مدى رغبة المكتتب/ المشتري في الاشتراك في جماعة حملة الوثائق',
    '- إقرار أن المستثمر (مكتتب / مشتري ) اطلع على النظام الأساسي ونشرة الاكتتاب / مذكرة المعلومات الخاصة بالصندوق وعلى علم بأن الصندوق الخيري توجه كافة الأرباح والعوائد الناتجة عن استثماراته حتى انفضائه للانفاق على الأغراض الاجتماعية أو الخيرية المحددة بالنشرة/ مذكرة المعلومات وأن أصول الصندوق عند انقضائه او تصفيته تؤول الى الجهات المحددة بنشرة الاكتتاب أو مذكرة المعلومات',
    '- مدى رغبة المكتتب / المشتري في التنازل عن حق الاسترداد ( جوازي لشركة الصندوق )',
  ],

  unordered2: [
    '- فى حالة إنتهاء المدة المحددة للاكتتاب دون تغطية الوثائق المطروحة بالكامل جاز لمجلس الإدارة على الصندوق أن يقرر الاكتفاء بما تم تغطيته علي ألا يقل عن 50% من مجموع الوثائق المطروحة ويشترط إخطار الهيئة والإفصاح للمكتتبين في الوثائق وإلا اعتبر الاكتتاب لاغياً ويلتزم البنك متلقي الاكتتاب باخطار شركة الصندوق بالرد الفوري لمبالغ الاكتتابات.							',
    '- وإذا زادت طلبات الاكتتاب في اجمالي قيمة الاصدار عن عدد الوثائق المطروحة جاز تعديل قيمة الأموال المراد استثمارها بما يستوعب طلبات الاكتتاب الزائدة بشرط إخطار الهيئة والإفصاح للمكتتبين ومراعاة النسبة بين رأس مال الجهة المؤسسة والأموال المستثمرة فيه بحيث ألا تزيد عن 50 مثل رأس مال الصندوق.',
    '- فإذا ترتب على هذا التعديل تجاوز الحد الأقصى للأموال المراد إستثمارها فى الصندوق والبالغ  50 مثل رأسمال الجهة المؤسسة، يتم تخصيص الوثائق المطروحة على المكتتبين بنسبة ما اكتتب به كل منهم مع جبر الكسور التى تنشأ عن عملية التخصيص لصالح صغار المكتتبين.',
    '- في جميع الاحوال يتم الإفصاح عن الوثائق المكتتب فيها وعدد المكتتبين لكل من الهيئة وحملة الوثائق',
  ],

  ph1: 'اختر التاريخ',
  ph2: 'اكتب اسم البنك متلقي الاكتتاب'
}

export default item