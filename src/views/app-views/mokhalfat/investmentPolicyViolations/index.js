import React from 'react'
import InvestmentPolicyViolationsGraph from '../../../../components/shared-components/Graphs/donut/InvestmentPolicyViolationsGraph'
import { ReactComponent as Download } from '../../../../components/shared-components/svgs/download.svg'
import { ReactComponent as OtherFund } from '../../../../components/shared-components/svgs/otherFund.svg'
import { ReactComponent as Arrow } from '../../../../components/shared-components/svgs/accordionArrow.svg'
import { ReactComponent as DownloadGold } from '../../../../components/shared-components/svgs/accodionDownloadGold.svg'
import { ReactComponent as DownArrow } from '../../../../components/shared-components/svgs/accordionDown.svg'

export default function InvestmentPolicyViolations() {
  return (
    <>
      <div className='violations investment-policy'>
        <div className='main-card'>
          <h1>مخالفات السياسات الاستثمارية على مستوى الصناديق</h1>

          <div className='d-flex flex-column justify-content-center align-items-center'>
            <div style={{ padding: '31px' }}>
              <InvestmentPolicyViolationsGraph />
            </div>
            <div className='d-flex justify-content-around w-100'>
              <div className='item one'>
                <p>صندوق نماء</p>
              </div>
              <div className='item two'>
                <p>صندوق ثراء</p>
              </div>
              <div className='item three'>
                <p>صندوق الخير</p>
              </div>
              <div className='item four'>
                <p>صندوق الحكمة</p>
              </div>
              <div className='item five'>
                <p>صندوق سندى</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='accordion violations'>
        <div className='header'>
          <h5>مخالفات صندوق نماء</h5>
          <div>
            <button className='btn'>
              <Download />
              تنزيل
            </button>
            <button className='btn last'>
              <OtherFund />
              اختيار صندوق اخر
            </button>
          </div>
        </div>

        <div className='violations-container'>
          <div className='info'>
            <div className='title'>
              <Arrow />
              <h6>اذون خزانة البنك المركزي المصري</h6>
            </div>
            <p className='number'>
              العمليات المخالفه:<span>1200</span>
            </p>
            <button className='btn download'>
              <DownloadGold />
              تنزيل المرفقات
            </button>
            <p className='recomendation'>
              التوصية:
              <span>اغلاق المخالفة</span>
            </p>
            <p className='action'>
              القرار المتخذ:
              <span>اغلاق المخالفة</span>
            </p>
            <DownArrow />
          </div>
          <div className='info'>
            <div className='title'>
              <Arrow />
              <h6>اذون خزانة البنك المركزي المصري</h6>
            </div>
            <p className='number'>
              العمليات المخالفه:<span>1200</span>
            </p>
            <button className='btn download'>
              <DownloadGold />
              تنزيل المرفقات
            </button>
            <p className='recomendation'>
              التوصية:
              <span>اغلاق المخالفة</span>
            </p>
            <p className='action'>
              القرار المتخذ:
              <span>اغلاق المخالفة</span>
            </p>
            <DownArrow />
          </div>
          <div className='info'>
            <div className='title'>
              <Arrow />
              <h6>اذون خزانة البنك المركزي المصري</h6>
            </div>
            <p className='number'>
              العمليات المخالفه:<span>1200</span>
            </p>
            <button className='btn download'>
              <DownloadGold />
              تنزيل المرفقات
            </button>
            <p className='recomendation'>
              التوصية:
              <span>اغلاق المخالفة</span>
            </p>
            <p className='action'>
              القرار المتخذ:
              <span>اغلاق المخالفة</span>
            </p>
            <DownArrow />
          </div>
        </div>
      </div>
    </>
  )
}
