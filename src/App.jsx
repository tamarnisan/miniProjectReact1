import { useState } from 'react'

import './App.css'
import MakeKeyboard from './keyboard'
import React from 'react'

function App() {

  const keyBoardEnglishSmall=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  return (
    <>
<MakeKeyboard arrayLetters={keyBoardEnglishSmall}/>
    </>
  )
}

export default App
