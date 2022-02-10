// dependencies
import React from 'react'

import ScribePresentation from './presentation'

import EditorJS from '@editorjs/editorjs'
import { Image } from './ImageProvider'

const editor = new EditorJS({
  /**
   * Id of Element that should contain the Editor
   */
  holder: 'editorjs',
  tools: {
    image: Image
  }

})

export function Scribe () {
  const output = React.useRef<HTMLInputElement>(null)

  function onButtonClick () {
    return editor.save().then(savedData => {
      if (output.current) {
        output.current.innerHTML = JSON.stringify(savedData, null, 4)
      }
    })
  }

  return ScribePresentation({
    output,
    onButtonClick
  })
}
