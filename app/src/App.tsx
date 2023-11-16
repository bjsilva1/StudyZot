import { useState } from 'react'
import { TopNavBar } from './TopNavBar'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNavBar />
    </>
  )
}

export default App
