import React from 'react'
import Download from '../../../../../components/shared-components/Buttons/DownloadTransparent'
import AccordionItem from './AccordionItem'
import Item1 from './items/item1'
import Item2 from './items/item2'
import Item3 from './items/item3'
import Item4 from './items/item4'
import Item5 from './items/item5'
import Item6 from './items/item6'
import Item7 from './items/item7'
import Item8 from './items/item8'
import { ReactComponent as ScrollBtn } from '../../../../../components/shared-components/svgs/scrollTop.svg'

export default function RecordCardItems() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <div className='record-card-items'>
      <div className="header">
        <div className='d-flex'>
          <p className='title'>1# افصاح</p>
          <p>تم ارسال الافصاح في تاريخ: 12 فبراير 2022</p>
        </div>
        <Download />
      </div>

      <div className="content">
        <AccordionItem 
          title={'افصاح الشكاوى معلقة'}
          content={<Item1 />}
        />
        <AccordionItem 
          title={'افصاح الالتزام بنظم الرقابة'}
          content={<Item2 />}
        />
        <AccordionItem 
          title={'افصاح التزامات مدير الاستثمار تجاه الصندوق'}
          content={<Item3 />}
        />
        <AccordionItem 
          title={'افصاح التزامات لمدير الاستثمار تجاه الصندوق'}
          content={<Item4 />}
        />
        <AccordionItem 
          title={'افصاح التزامات مدير الاستثمار بمواد اللائحة التنفيذية'}
          content={<Item5 />}
        />
        <AccordionItem 
          title={'الالتزام ببنود السياسات الاستثمارية و الادوات الاستثمار المالية'}
          content={<Item6 />}
        />
        <AccordionItem 
          title={'افصاح الالتزام بالنسب الاستثمارية'}
          content={<Item7 />}
        />
        <AccordionItem 
          title={'افصاح الالتزام بالنسب الاستثمارية المسموح بها'}
          content={<Item8 />}
        />
      </div>

      <div className='scroll-btn'>
        <ScrollBtn
          onClick={scrollToTop}
        />
      </div>
    </div>
  )
}
