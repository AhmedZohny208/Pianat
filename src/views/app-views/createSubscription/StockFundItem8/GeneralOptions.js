import React from 'react'
import SingleGeneralOptions from './SingleGeneralOptions'

export default function GeneralOptions({
  onChange,
  itemOptions,
  selectedRisks,
  showItem1,
  showItem2,
  showItem3,
  showItem4,
  showItem5,
  showItem6,
  showItem7,
  showItem8,
  showItem9,
  showItem10,
  showItem11,
  showItem12,
  showItem13,
  showItem16,
  showItem17,
  showItem18,
  showItem19,
  showItem20,
}) {
  return (
    <>
      <SingleGeneralOptions
        onchange={onChange}
        value={'المخاطر المنتظمة'}
        itemOptions={itemOptions}
        showItem={showItem1}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر المعلومات'}
        itemOptions={itemOptions}
        showItem={showItem2}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر تقلبات / تغير قيمة / اسعار العملة'}
        itemOptions={itemOptions}
        showItem={showItem3}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'المخاطر الغير منتظمة'}
        itemOptions={itemOptions}
        showItem={showItem4}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر عدم التنوع'}
        itemOptions={itemOptions}
        showItem={showItem5}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر عدم التنويع و التركيز '}
        itemOptions={itemOptions}
        showItem={showItem6}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر السوق'}
        itemOptions={itemOptions}
        showItem={showItem7}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر تغيير اللوائح و القوانين'}
        itemOptions={itemOptions}
        showItem={showItem8}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر الارتباط'}
        itemOptions={itemOptions}
        showItem={showItem9}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر الظروف القاهرة'}
        itemOptions={itemOptions}
        showItem={showItem10}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر التضخم'}
        itemOptions={itemOptions}
        showItem={showItem11}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر العمليات'}
        itemOptions={itemOptions}
        showItem={showItem12}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر ائتمانية / الائتمانية ( عدم السداد )'}
        itemOptions={itemOptions}
        showItem={showItem13}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={
          'مخاطر تحول نشاط احد الجهات المستثمر فيها الى نشاط غير متفق و الضوابط الشرعية'
        }
        itemOptions={itemOptions}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر التوقيت'}
        itemOptions={itemOptions}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر تغير سعر الفائدة'}
        itemOptions={itemOptions}
        showItem={showItem16}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر السيولة و التقييم'}
        itemOptions={itemOptions}
        showItem={showItem17}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر التقييم'}
        itemOptions={itemOptions}
        showItem={showItem18}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر الاستدعاء او السداد المعجل'}
        itemOptions={itemOptions}
        showItem={showItem19}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر الممارسات الاستثمارية التى تواجه الصندوق '}
        itemOptions={itemOptions}
        showItem={showItem20}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر عدم التنويع, التركيز و الارتباط'}
        itemOptions={itemOptions}
        risks={selectedRisks}
      />
      <SingleGeneralOptions
        onchange={onChange}
        value={'مخاطر المعلومات و السوق '}
        itemOptions={itemOptions}
        risks={selectedRisks}
      />
    </>
  )
}
