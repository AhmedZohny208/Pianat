import { Input } from 'antd'
import React from 'react'
import AddDocHolderBtn from '../../../components/shared-components/Buttons/AddDocHolder'
import DownloadDocGoldBtn from '../../../components/shared-components/Buttons/DownloadDocGold'
import DownloadShareholderFormBtn from '../../../components/shared-components/Buttons/DownloadShareholderForm'
import UploadShareholderFormBtn from '../../../components/shared-components/Buttons/UploadShareholderForm'
import TableSearch from '../../../components/shared-components/Form/TableSearch'
import Header from '../../../components/shared-components/Headers/ItemPage'
import NavigateItems from '../../../components/shared-components/Navigate/NavigateItems'
import { ReactComponent as Exclamation } from '../../../components/shared-components/svgs/exclamationGreen.svg'
import { ReactComponent as Plus } from '../../../components/shared-components/svgs/plusWhite.svg'

export default function StockFundItem3() {
  return (
    <div className='stock-fund-item'>
      <Header
        title={'3. تعريف وشكل الصندوق'}
        progress={50}
        info={'البند الثالث'}
      />

      <div className='p-5'>
        <div className='contributers-table'>
          <div className='gold'>
            <p>اجمالي عدد المساهمين: 28</p>
            <p>اجمالي عدد الاسهم: 54326</p>
          </div>

          <div className='contributers-table-content'>
            <div className='white'>
              <AddDocHolderBtn />
              <div className='left-side'>
                <p className='red'>عرض جميع الأخطاء: 13</p>
                <TableSearch placeholder={'ابحث بالاسم او رقم البطاقة'} />
                <DownloadDocGoldBtn />
              </div>
            </div>
            <div className='table'></div>
          </div>
        </div>

        <div className='mt-5'>
          <DownloadShareholderFormBtn />
          <UploadShareholderFormBtn />
        </div>

        <div className="mt-5">
          <div className="staff-form-header">
            <h6>يتكون مجلس إدارة شركة الصندوق من الأعضاء التالي أسماؤهم:</h6>
          </div>
          <div className="staff-form">
            <div className="row">
              <div className="col-4">
                <div className='input'>
                  <div className="label">الاسم</div>
                  <Input className="text-input"/>
                </div>
              </div>
              <div className="col-4">
                <div className='input'>
                  <div className="label">المنصب</div>
                  <Input className="text-input"/>
                </div>
              </div>
              <div className="col-4">
                <div className='input'>
                  <div className="label">الجنسية</div>
                  <Input className="text-input"/>
                </div>
              </div>
              <div className="col-4">
                <div className='input'>
                  <div className="label">رقم الباسبور</div>
                  <Input className="text-input"/>
                  <div className='hint'>
                    <Exclamation />
                    لن ينشر رقم الباسبور مع العامة.
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className='input'>
                  <div className="label">رقم البطاقة</div>
                  <Input className="text-input"/>
                  <div className='hint'>
                    <Exclamation />
                    لن ينشر رقم البطاقة مع العامة.
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className='input'>
                  <div className="label">عدد الاسهم</div>
                  <Input className="text-input"/>
                </div>
              </div>
              <div className="col-4">
                <div className='input'>
                  <div className="label">القيمة الاسمية (جم)</div>
                  <Input className="text-input"/>
                </div>
              </div>
              <div className="col-8">
                <div className='input'>
                  <div className="label">نسبة المساهمة</div>
                  <Input className="text-input"/>
                </div>
              </div>
            </div>

            <div>
              <button className='btn add-name'>
                <Plus />
                اضافة اسم جديد
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="staff-form-header">
            <h6>أسماء كبار العاملين شركة الصندوق او بالبنك مؤسس الصندوق</h6>
          </div>
          <div className="staff-form">
            <div className="row">
              <div className="col-4">
                <div className='input'>
                  <div className="label">الاسم</div>
                  <Input className="text-input"/>
                </div>
              </div>
              <div className="col-4">
                <div className='input'>
                  <div className="label">المنصب</div>
                  <Input className="text-input"/>
                </div>
              </div>
              <div className="col-4">
                <div className='input'>
                  <div className="label">الجنسية</div>
                  <Input className="text-input"/>
                </div>
              </div>
              <div className="col-4">
                <div className='input'>
                  <div className="label">رقم الباسبور</div>
                  <Input className="text-input"/>
                  <div className='hint'>
                    <Exclamation />
                    لن ينشر رقم الباسبور مع العامة.
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className='input'>
                  <div className="label">رقم البطاقة</div>
                  <Input className="text-input"/>
                  <div className='hint'>
                    <Exclamation />
                    لن ينشر رقم البطاقة مع العامة.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className='btn add-name'>
                <Plus />
                اضافة اسم جديد
              </button>
            </div>
          </div>
        </div>
      </div>

      <NavigateItems item={3} />
    </div>
  )
}
