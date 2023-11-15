import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import studyZotIcon from './assets/StudyZotIcon_Circle.svg'
import './App.css'

function Switch() {
  return (
    <>
      <label class="switch">
        <input type="checkbox"/>
        <span class="slider"></span>
      </label>
    </>
  )
}

function TopNavBar() {
    return (
      <div class="navbar">
        <img src={studyZotIcon}/>
        <h1> StudyZot </h1>
        <Switch />
      </div>
    )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNavBar />
    </>
  )
}

export default App
