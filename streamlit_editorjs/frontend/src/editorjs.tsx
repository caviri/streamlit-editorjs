import {
    ComponentProps,
    Streamlit,
    withStreamlitConnection
  } from "streamlit-component-lib";

import React, { useEffect, useRef, useCallback } from "react"

import { createReactEditorJS } from 'react-editor-js'
import {OutputData} from '@editorjs/editorjs';

import ResizeObserver from "resize-observer-polyfill"
import { EDITOR_JS_TOOLS } from './tools'

const ReactEditorJS = createReactEditorJS()

interface EditorJSProps extends ComponentProps {
    args: any
}

const EditorJSDIV = ({ args }: EditorJSProps) => {
    const divRef = useRef<HTMLDivElement>(null)
    const editorCore = useRef<any>(null)

    const handleInitialize = React.useCallback((instance: any) => {
      editorCore.current = instance;
    }, []);

    // const handleSave = useCallback( async () => { await editorCore.current?.save().then( (savedData) => { console.log('HI')  })}, []) //Streamlit.setComponentValue(JSON.stringify(savedData))
    const handleSave = useCallback( async () => { 
                                    const savedData = await editorCore?.current?.save();
                                    console.log(JSON.stringify(savedData));
                                    Streamlit.setComponentValue(JSON.stringify(savedData));
                                  }, []) 


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
        <ReactEditorJS
            onInitialize={handleInitialize}
            defaultValue={args.defaultValue}
            onChange={handleSave}
            tools={EDITOR_JS_TOOLS}
        />
    </div>
}



export default withStreamlitConnection(EditorJSDIV)
