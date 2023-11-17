//import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
//import Button from 'react-bootstrap/Button';
import studyZotIcon from '../assets/StudyZotIcon_Circle.svg'
import './TopNavBar.css'
import { ThemeSwitch } from './ThemeSwitch';

function LeftContainer() {
  return (
    <Container className="left-container">
      <a className="navbar-brand" href="#">
        <img src={studyZotIcon} className="d-inline-block align-text-bottom"/>StudyZot
      </a>
    </Container>
  )
}

function RightContainer() {
  return (
    <Container className="right-container">
      <ThemeSwitch/>
    </Container>
  )
}

export function TopNavBar() {
    return (
      <>
        <div className="navbar">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <LeftContainer />
            <RightContainer />
          </nav>
        </div>
      </>
    )
}
