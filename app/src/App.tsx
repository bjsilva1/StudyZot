import { TopNavBar } from './components/TopNavBar.tsx'
import { BasicStudyCard } from './components/SpaceCards.tsx'
import { HeroCard } from './components/HeroCards.tsx'
import { LeftSideBar } from './components/LeftSideBar.tsx'
import { Footer } from './components/Footer.tsx'
import Container from "react-bootstrap/Container"
import './App.css'


function App() {
  return (
    <Container className="big-container">
      <TopNavBar />
      <Container className="bottom-container">
        <LeftSideBar />
        <Container className="cards-container">
          <h1> You should study at... </h1>
          <HeroCard spaceInfo={{name: "lool", description: "", locationLink: "", rating: 0, id: 0, hasFood: false}}/>
          <BasicStudyCard spaceInfo={{name: "lool", description: "", locationLink: "", rating: 0, id: 0, hasFood: false}}/>
          <BasicStudyCard spaceInfo={{name: "lool", description: "", locationLink: "", rating: 0, id: 0, hasFood: false}}/>
          <BasicStudyCard spaceInfo={{name: "lool", description: "", locationLink: "", rating: 0, id: 0, hasFood: false}}/>
          <BasicStudyCard spaceInfo={{name: "lool", description: "", locationLink: "", rating: 0, id: 0, hasFood: false}}/>
        </Container>
      </Container>
      <Footer />
    </Container>
  )
}

export default App
