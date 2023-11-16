import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import studyZotIcon from '../assets/StudyZotIcon_Circle.svg'
import './TopNavBar.css'

function LeftContainer() {
  return (
    <Container class="left-container">
      <a class="navbar-brand" href="#">
        <img src={studyZotIcon} class="d-inline-block align-text-bottom"/>StudyZot
      </a>
    </Container>
  )
}

function RightContainer() {
  return (
    <Container class="right-container">
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
        <div class="navbar">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <LeftContainer />
            <RightContainer />
          </nav>
        </div>
      </>
    )
}
