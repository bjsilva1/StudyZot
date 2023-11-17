import { useState } from 'react'
import { TopNavBar } from './components/TopNavBar.tsx'
import { BasicStudyCard } from './components/SpaceCards.tsx'
import { StudySpaceList } from "./components/StudySpaceList.tsx"
import { HeroCard } from './components/HeroCards.tsx'
import { LeftSideBar } from './components/LeftSideBar.tsx'
import { Footer } from './components/Footer.tsx'
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
          <h1> You should study at... </h1>
<<<<<<< Updated upstream
          <HeroCard />
          <BasicStudyCard />
          <BasicStudyCard />
          <BasicStudyCard />
          <BasicStudyCard />
=======
          <StudySpaceList/>
>>>>>>> Stashed changes
        </Container>
      </Container>
      <Footer />
    </Container>
  )
}

export default App
