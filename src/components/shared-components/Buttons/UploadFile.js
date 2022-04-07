import React from 'react'
import { Upload, Button } from 'antd';
import {ReactComponent as Attach} from '../svgs/attach.svg';

export default function UploadFile() {
  return (
    <Upload>
      <Button className='btn upload-file'>
        <Attach />
        رفع ملف
      </Button>
    </Upload>
  )
}
