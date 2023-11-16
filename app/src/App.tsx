import { useState } from 'react'
import { TopNavBar } from './components/TopNavBar.tsx'
import { BasicStudyCard } from './components/SpaceCards.tsx'
import { HeroCard } from './components/HeroCards.tsx'
import { LeftSideBar } from './components/LeftSideBar.tsx'
import Container from "react-bootstrap/Container"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className="big-container">
      <TopNavBar />
      <Container className="bottom-container">
        <LeftSideBar />
        <Container className="cards-container">
          <HeroCard />
          <BasicStudyCard />
        </Container>
      </Container>
    </Container>
  )
}

export default App
