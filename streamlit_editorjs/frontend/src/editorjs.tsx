import {
    ComponentProps,
    Streamlit,
    withStreamlitConnection
  } from "streamlit-component-lib";

import React, { useEffect, useRef } from "react"

import EditorJS from '@editorjs/editorjs';

import ResizeObserver from "resize-observer-polyfill"


interface EditorJSProps extends ComponentProps {
    args: any
}



const EditorJSDIV = ({ args }: EditorJSProps) => {
    const divRef = useRef<HTMLDivElement>(null)

    const editor = new EditorJS({ 
      /** 
       * Id of Element that should contain the Editor 
       */ 
      holder: 'editorjs',
    
      onChange: (api, event) => {
        Streamlit.setComponentValue(JSON.stringify(editor.save()))
      }
    
    });

    useEffect(() => {
        Streamlit.setFrameHeight()
    
        const ro = new ResizeObserver(() => {
          Streamlit.setFrameHeight()
        })
    
        if (divRef.current)
          ro.observe(divRef.current)
    
        return () => ro.disconnect()
      })



    return <div ref={divRef}>
        <div id="editorjs"></div>
    </div>
}

let timeout: NodeJS.Timeout


export default withStreamlitConnection(EditorJSDIV)
