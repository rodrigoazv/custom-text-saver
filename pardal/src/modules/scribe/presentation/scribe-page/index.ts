// dependencies
import React from 'react';

import ScribePresentation  from './presentation'

import EditorJS from '@editorjs/editorjs'; 

import { makeRemoteAddAccount } from '@/modules/scribe/main/factories'

const editor = new EditorJS({ 
  /** 
   * Id of Element that should contain the Editor 
   */ 
  holder: 'editorjs', 

})


export function Scribe() {
 async function saveData(){

  const addAccount = makeRemoteAddAccount()

  await addAccount.add({name: 'a', email:'a', password:'1', passwordConfirmation:'1'})
     

editor.save().then((outputData) => {
  console.log('Article data: ', outputData)
}).catch((error) => {
  console.log('Saving failed: ', error)
});
    }
  return ScribePresentation({
  saveData
  });
}
