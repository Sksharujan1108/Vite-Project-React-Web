import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocuseTextInput from './component/FocusInput'
import PreviousText from './component/useRef-PreviousInputText'

function App() {

  return (
    <>
      <div>
         <h1> Helloo UseRef!!!! </h1>
         <PreviousText/>

         <FocuseTextInput/>
      </div>
    </>
  )
}

export default App
