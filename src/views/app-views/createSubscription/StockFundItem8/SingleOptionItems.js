import React from 'react'
import { Checkbox } from 'antd'
import { ReactComponent as Arrow } from '../../../../components/shared-components/svgs/leftArrowBlue.svg'
import itemsData from './itemsOptions'

export default function SingleOptionItems({
  goback,
  onChange,
  itemOptions,
  selectedRisks,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item16,
  item17,
  item18,
  item19,
  item20,
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
      {item1 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem1)}
          >
            <h6>المخاطر المنتظمة</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem1)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item1.map((e) => (
              <div>
                <Checkbox
                  defaultChecked={selectedRisks && selectedRisks.includes(e)}
                  value={e}
                  onChange={onChange}
                >
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item2 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem2)}
          >
            <h6>مخاطر المعلومات</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem2)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item2.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item3 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem3)}
          >
            <h6>مخاطر تقلبات / تغير قيمة / اسعار العملة</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem3)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item3.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item4 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem4)}
          >
            <h6>المخاطر الغير منتظمة</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem4)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item4.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item5 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem5)}
          >
            <h6>مخاطر عدم التنوع</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem5)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item5.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item6 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem6)}
          >
            <h6>مخاطر عدم التنويع و التركيز</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem6)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item6.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item7 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem7)}
          >
            <h6>مخاطر السوق</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem7)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item7.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item8 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem8)}
          >
            <h6>مخاطر تغيير اللوائح و القوانين</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem8)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item8.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item9 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem9)}
          >
            <h6>مخاطر الارتباط</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem9)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item9.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item10 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem10)}
          >
            <h6>مخاطر الظروف القاهرة</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem10)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item10.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item11 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem11)}
          >
            <h6>مخاطر التضخم</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem11)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item11.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item12 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem12)}
          >
            <h6>مخاطر العمليات</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem12)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item12.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item13 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem13)}
          >
            <h6>مخاطر ائتمانية / الائتمانية ( عدم السداد )</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem13)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item13.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item16 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem16)}
          >
            <h6>مخاطر تغير سغر الفائدة</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem16)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item16.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item17 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem17)}
          >
            <h6>مخاطر السيولة و التقييم</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem17)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item17.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item18 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem18)}
          >
            <h6>مخاطر التقييم</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem18)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item18.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item19 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem19)}
          >
            <h6>مخاطر الاستدعاء او السداد المعجل</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem19)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item19.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
      {item20 && (
        <div className='single-option-items'>
          <div
            className='single-option-items-header'
            onClick={() => goback(showItem20)}
          >
            <h6>مخاطر الممارسات الاستثمارية التى تواجه الصندوق</h6>
            <Arrow
              className='right-arrow'
              onClick={() => itemOptions(showItem20)}
            />
          </div>
          <div className='single-option-items-content'>
            {itemsData.item20.map((e) => (
              <div>
                <Checkbox value={e} onChange={onChange}>
                  {e}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
