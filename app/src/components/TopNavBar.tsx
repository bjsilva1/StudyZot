import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import studyZotIcon from '../assets/StudyZotIcon_Circle.svg'
import './TopNavBar.css'

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
      <Form>
        <Form.Switch/>
      </Form>
      <Button>map</Button>
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
