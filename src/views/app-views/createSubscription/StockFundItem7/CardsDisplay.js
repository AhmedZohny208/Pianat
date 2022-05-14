import React from 'react'
import { Input, Radio } from 'antd'
import { ReactComponent as Percentage } from '../../../../components/shared-components/svgs/percentage.svg'
import { ReactComponent as Edit } from '../../../../components/shared-components/svgs/editWhite.svg'
import { ReactComponent as Delete } from '../../../../components/shared-components/svgs/deleteWhite.svg'

export default function CardsDisplay({ data, item }) {
  return (
    <>
      <div className='new-category-card'>
        <div className='header'>
          <div>
            <p>
              {item.p14} <span>{data.fundCategory}</span>
            </p>
          </div>
          <div>
            <p>
              {item.p15} <span>{data.fundType}</span>
            </p>
          </div>
        </div>

        <div className='mb-4'>
          <p className='fs-6 fw-600 p-0 mb-2'>{item.p16}</p>
          <ul>
            {data.investmentPolicy.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </div>

        <div className='mb-4'>
          <p className='fs-6 fw-600 p-0 mb-2'>{item.p17}</p>
          <ul>
            {data.investmentObjectives.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </div>

        <div className='select-boxs'>
          <div className='raw'>
            <div className='right'>
              <div className='label'>{item.l1}</div>
              <Input
                className='darkGrey-input'
                value={data.finanialClass}
                disabled
              />
            </div>
            <div className='left'>
              <div className='label'>{item.l2}</div>
              <Input
                className='darkGrey-input'
                value={data.finanialInstrument}
                disabled
              />
            </div>
          </div>
          <div className='raw'>
            <div className='right'>
              <div className='label'>{item.l3}</div>
              <Input
                className='darkGrey-input'
                value={data.finanialType}
                disabled
              />
            </div>
            <div className='left'>
              <div className='label'>{item.l4}</div>
              <Input
                className='darkGrey-input'
                value={data.finanialName}
                disabled
              />
            </div>
          </div>
          <div className='raw'>
            <div className='right'>
              <div className='label'>{item.l5}</div>
              <Input
                className='darkGrey-input'
                value={data.exportingInstitution}
                disabled
              />
            </div>
            <div className='left'>
              <div className='label'>{item.l6}</div>
              <Input
                className='darkGrey-input'
                value={data.instrumentCurrency}
                disabled
              />
            </div>
          </div>
        </div>

        <div className='radio-boxs'>
          <div className='raw'>
            <div className='right'>
              <div className='label'>{item.l7}</div>
              <Radio.Group value={data.tradability}>
                <Radio value={'قابل للتداول'}>قابل للتداول</Radio>
                <Radio value={'غير قابلة للتداول'}>غير قابلة للتداول</Radio>
              </Radio.Group>
            </div>
            <div className='left'>
              <div className='label'>{item.l8}</div>
              <Radio.Group value={data.returnType}>
                <Radio value={'عائد ثابت'}>عائد ثابت</Radio>
                <Radio value={'عائد متغير'}>عائد متغير</Radio>
              </Radio.Group>
            </div>
          </div>

          <div className='raw'>
            <div className='right'>
              <div className='label'>{item.l9}</div>
              <Radio.Group value={data.investmentType}>
                <Radio value={'محلي'}>محلي</Radio>
                <Radio value={'اجنبي'}>اجنبي</Radio>
              </Radio.Group>
            </div>
            <div className='left d-flex justify-content-between align-items-center'>
              <div className='label mb-0'>{item.l10}</div>
              <div className='position-relative'>
                {item.l12}
                <Input
                  value={data.investmentRatios.from}
                  className='inline-input'
                  style={{ width: '93px' }}
                />
                <Percentage className='percentage' />
              </div>
              <div className='position-relative'>
                {item.l13}
                <Input
                  value={data.investmentRatios.to}
                  className='inline-input'
                  style={{ width: '93px' }}
                />
                <Percentage className='percentage' />
              </div>
            </div>
          </div>
          <div className='raw align-items-end'>
            <div className='right'>
              <div className='label'>{item.l11}</div>
              <Radio.Group value={data.ConvertibilityToCash}>
                <Radio value={'قابل للتحويل'}>قابل للتحويل</Radio>
                <Radio value={'غير قابل للتحويل'}>غير قابل للتحويل</Radio>
              </Radio.Group>
            </div>
            <div>
              <button className='btn edit-w-icon'>
                <Edit />
                تعديل
              </button>
              <button className='btn delete-w-icon'>
                <Delete />
                حذف
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='new-category-card-hr'></div>
    </>
  )
}
