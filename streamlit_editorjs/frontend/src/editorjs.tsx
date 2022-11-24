import {
    ComponentProps,
    Streamlit,
    withStreamlitConnection
  } from "streamlit-component-lib";

import React, { useEffect, useRef } from "react"
import { createReactEditorJS } from 'react-editor-js'
import ResizeObserver from "resize-observer-polyfill"

const ReactEditorJS = createReactEditorJS()


interface EditorJSProps extends ComponentProps {
    args: any
}

const EditorJS = ({ args }: EditorJSProps) => {
    const divRef = useRef<HTMLDivElement>(null)

    let timeout: NodeJS.Timeout

    const handleChange = (content: string, delta: any, source: any, editor: any) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          Streamlit.setComponentValue(args.html ? content : editor.save())
        }, 200)
      }

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
            defaultValue={args.defaultValue} 
            onChange={handleChange}
        />
    </div>
}



export default withStreamlitConnection(EditorJS)
