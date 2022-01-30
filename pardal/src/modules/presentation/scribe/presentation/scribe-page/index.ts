// dependencies
import React from 'react';

import ScribePresentation  from './presentation'

import EditorJS from '@editorjs/editorjs'; 

const editor = new EditorJS({ 
  /** 
   * Id of Element that should contain the Editor 
   */ 
  holder: 'editorjs', 

})

export function Scribe() {
  return ScribePresentation({
  
  });
}
