import { TopNavBar } from './components/TopNavBar.tsx'
import { LeftSideBar } from './components/LeftSideBar.tsx'
import { Footer } from './components/Footer.tsx'
import Container from "react-bootstrap/Container"
import './App.css'
import { StudySpaceList } from './components/StudySpaceList.tsx'


function App() {
  return (
    <Container className="big-container">
      <TopNavBar />
      <Container className="bottom-container">
        <LeftSideBar />
        <Container className="cards-container">
          <h1 id="head-text"> You should study at... </h1>
          <StudySpaceList />
        </Container>
      </Container>
      <Footer />
    </Container>
  )
}

export default App
