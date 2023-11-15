import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import studyZotIcon from './assets/StudyZotIcon.svg'
import './App.css'

function TopNavBar() {
    return (
      <div class="navbar">
        <img src={studyZotIcon}/>
        <h1> StudyZot </h1>

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
