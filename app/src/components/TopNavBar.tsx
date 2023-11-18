//import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
//import Button from 'react-bootstrap/Button';
import studyZotIcon from '/assets/StudyZotIcon_Circle.svg'
import './TopNavBar.css'
import { ThemeSwitch } from './ThemeSwitch';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { AboutModal } from './AboutModal';

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
const [aboutShow, setAboutShow] = useState(false)

  return (
    <Container className="right-container">
      <Button onClick={() => setAboutShow(true)}>
        <b>?</b>
      </Button>
      <ThemeSwitch/>
      <AboutModal
       onHide={() => setAboutShow(false)}
       show={aboutShow}
      />
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
