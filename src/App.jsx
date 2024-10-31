import { useState } from 'react'

import './App.css'
import MakeKeyboard from './keyboard'
import React from 'react'
import Color from './Color'
import Text from './Text'
import FontFamily from './FontFamily'
import ChangeFontSize from './FontSize'


const keyBoardEnglishSmall = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ",", ".", "?", "!", "space"]
const keyBoardEnglishBig = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ",", ".", "?", "!", "space"]
const keyBoardHebrew = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת", ",", ".", "?", "!", "רווח"]
const arrayColor=["red", "yellow", "green", "purple", "palevioletred", "blue", "skyblue", "black","grey", "coral", "teal"];
const arrayFontFamily=["Arial"," Verdana", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", "Garamond", "Courier New (monospace)"
, "Brush Script MT"]
const fontSizeLetters=["10px","12px","14px","16px","18px","20px","22px","24px","26px","28px","30px","32px","40px","50px","60px"]
function App() {
  const [lang, setLang] = useState(false)
  const [text, setText] = useState([""])
  const [color,setColor] = useState("black")
  const [fontFamily, setFontFamily] = useState("Arial (sans-serif)")
  const[ fontSize, setFontSize] = useState(30)
  
  
  const [currentAray, setCurrentArray] = useState(keyBoardEnglishSmall);

  function upperCase() {
    setLang(!lang);
    lang === true ? setCurrentArray(keyBoardEnglishBig) : setCurrentArray(keyBoardEnglishSmall)
  }
  function onKeyClicked(index) {
    let newLetter= currentAray[index] === "space" || currentAray[index] === "רווח" ?<span> </span>:<span style={{color:color, fontFamily:fontFamily, fontSize:fontSize}}>{currentAray[index]}</span>
    { setText(text => [...text, newLetter]) }
  }
  function colorOnClick(index){
    setColor(arrayColor[index])

  }
  function onFontFamilyChange(e){
   setFontFamily(e);
  }
  function onFontSizeChange(e){
    setFontSize(e);
    console.log(e);
   }
  return (
    < div style={{ backgroundColor: '	#ffc0cb',     height: "100vh"}}>
   
     <h1 style={{textAlign:'center', color:"white", fontWeight:'bold', margintop: -80, paddingTop: 40,height: 100,fontSize: 50,}}>welcome to our keyboard!</h1>
     <div  >
     <Text text={text}/>
     </div>
      <>
     
        <MakeKeyboard arrayLetters={currentAray} text={text} onKeyClicked={onKeyClicked} color={color} fontFamily={fontFamily}/>
     <div style={{margin: "20px", display:"flex",flexWrap:'',justifyContent:'center',gap:20, paddingRight:75}}>
      <button onClick={() => { setCurrentArray(keyBoardEnglishSmall) }}>ENGLISH</button>
      <button onClick={() => { setCurrentArray(keyBoardHebrew) }}>עברית</button>
      <button onClick={upperCase}>UPPERCASE/lowercase</button>
      <button onClick={() => setText((text) => text.slice(0, -1))}>DELETE</button>
      <button onClick={() => setText([])}>RESET</button>
      </div>
      <div> 
        <Color arrayColor={arrayColor} colorOnClick={colorOnClick} />
        </div>
        <div style={{fontSize:25}}>
        <FontFamily arrayFontFamily={arrayFontFamily} onFontFamilyChange={onFontFamilyChange}/>
        </div>
        <div style={{fontSize:25, paddingTop:30,paddingRight:150}}>
        <ChangeFontSize fontSizeLetters={fontSizeLetters} onFontSizeChange={onFontSizeChange} />
        </div> </>
      
    </div>)
}

export default App
