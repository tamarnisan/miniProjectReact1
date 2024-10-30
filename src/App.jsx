import { useState } from 'react'

import './App.css'
import MakeKeyboard from './keyboard'
import React from 'react'
const keyBoardEnglishSmall = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ",", ".", "?", "!", "   "]
const keyBoardEnglishBig = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ",", ".", "?", "!", "space"]
const keyBoardHebrew = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת", ",", ".", "?", "!", "רווח"]
function App() {
  function upperCase() {
    setLang(!lang);
    lang === true ? setCurrentArray(keyBoardEnglishBig) : setCurrentArray(keyBoardEnglishSmall)
  }
  function onKeyClicked(index) {
    { setText(text => currentAray[index] === "space" || currentAray[index] === "רווח" ? text + " " : text + currentAray[index]) }
  }
  const [lang, setLang] = useState(false)
  const [text, setText] = useState("")

  const [currentAray, setCurrentArray] = useState(keyBoardEnglishSmall);
  return (
    <>
      <button onClick={() => { setCurrentArray(keyBoardEnglishSmall) }}>ENGLISH</button>
      <button onClick={() => { setCurrentArray(keyBoardHebrew) }}>עברית</button>
      <button onClick={upperCase}>uppercase</button>
      <button onClick={() => setText((text) => text.slice(0, -1))}>DELETE</button>
      <button onClick={() => setText((text) => text = "")}>RESET</button>
      <>
        <MakeKeyboard arrayLetters={currentAray} text={text} onKeyClicked={onKeyClicked} />
      </>
    </>)
}

export default App
