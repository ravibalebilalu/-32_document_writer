 

 import { useState } from "react"
import "./dm.css"

function DocumentWriter({fontName,fontsize,fontColor,bgcolor, text_align,indent,content,handleContentChange,saveFile}) {
     

     

     
  return (
    <div>

         <textarea name="" id="ta" 
         style={{fontFamily:fontName,fontSize:`${fontsize}px`,color:fontColor,backgroundColor:bgcolor,
         textAlign: text_align,paddingLeft:indent}}
         value={content}
         onChange={handleContentChange}
         >
        
         </textarea>
        
          
    </div>
  )
}

export default DocumentWriter
