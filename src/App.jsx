import { useState } from 'react'

import './App.css'
import MakeKeyboard from './keyboard'
import React from 'react'

function App() {
  const [text, setText] = useState("")
  const keyBoardEnglishSmall=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const keyBoardEnglishBig=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const [currentAray, setCurrentArray] = useState(keyBoardEnglishSmall);
  return (
    <>
<MakeKeyboard arrayLetters={currentAray} text={text} onKeyClicked={(index)=> {setText(text=> text+currentAray[index])}}/>
    </>
  )
}

export default App
