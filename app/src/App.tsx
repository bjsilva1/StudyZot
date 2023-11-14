import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TopHeading() {
    return (
        <h1> StudyZot </h1>
    )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <TopHeading />

    </>
  )
}

export default App
