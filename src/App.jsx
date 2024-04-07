import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './component/user'

function App() {

  const userData = {
    name: "John",
    age: 30,
    email: "john@gmail.com"
  }

  return (
    <>
      <div>
        <User
          // userDetails = { userData }
          {...userData}
        />
      </div>
    </>
  )
}

export default App
