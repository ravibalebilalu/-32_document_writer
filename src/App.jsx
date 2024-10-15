
import DocumentWriter from "./component/DocumentWriter"
import Tools from "./component/Tools"
import { useState } from "react"
import './App.css'

 
function App( ) {
  const [fontName,setFontName] = useState("Courier")
  const [fontsize,setFontSize] = useState(16)
  const [fontColor,setFontColor] = useState("white")
  const [bgcolor,setBgColor] = useState("black")
   const [text_align,setTextAlign] = useState("left")
   const [indent,setIndent] = useState(0)

   const [content,setContent] = useState("")


   const handleContentChange = (e)=>{
    setContent(e.target.value)
  }

  const saveFile = ()=>{
    const blob = new Blob([content],{type:"text/plain"})
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "myDocument.txt"
    link.click()
    URL.revokeObjectURL(link.href)
  }



  const changeFontName = (e)=>{
    setFontName(e.target.value)
  }
  const changeFontSize = (e)=>{
    setFontSize(e.target.value)
  }
  const changeFontColor = (e)=>{
    setFontColor(e.target.value)
  }

  const changeBgColor = (e)=>{
    setBgColor(e.target.value)
  }

   const changeLeftAlign = ()=>{
    setTextAlign("left")
   }

   const changeRightAlign = ()=>{
    setTextAlign("right")
   }

   const changeCenterAlign = ()=>{
    setTextAlign("center")
   }
   const changejustifyAlign = ()=>{
    setTextAlign("justify")
   }

   const indentIncrease = ()=>{
    const editor_width = document.querySelector("#ta").offsetWidth
     
    

   if(indent < (editor_width * 60)/100){
    let newIndent = indent+ 10
    setIndent(newIndent)
   }
   }

   const indentDecrease = ()=>{
   if(indent > 20){
    let newIndent = indent- 10
    setIndent(newIndent)
   }
   }
  return (
    <>
       <Tools changeFontName={changeFontName}
         changeFontSize={changeFontSize}
         changeFontColor={changeFontColor}
         changeBgColor={changeBgColor}
         changeLeftAlign={changeLeftAlign}
         changeRightAlign  = {changeRightAlign }
         changeCenterAlign = {changeCenterAlign}
         changejustifyAlign = {changejustifyAlign}
         indentIncrease = {indentIncrease}
         indentDecrease = {indentDecrease}
         saveFile={saveFile}
         
         
         
         />
         <DocumentWriter 
          fontName={fontName} 
          fontsize={fontsize} 
          fontColor={fontColor}
          bgcolor={bgcolor}
          text_align={text_align}
          indent={indent}
          content={content}
          handleContentChange={handleContentChange}
          saveFile={saveFile}
          
         
          />
          
    </>
  )
}

export default App
