import Modal from 'react-bootstrap/Modal'
import StudyZotIcon from '../../public/assets/StudyZotIcon_Circle2.svg'
import './AboutModal.css'

export function AboutModal(props: AboutProps) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          About StudyZot
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='about-flex'>
            <img src={StudyZotIcon} className='about-img'/>
            <p>
            StudyZot is a web application designed by four second-year undergraduate students at the
            University of California, Irvine. The app is designed to help students find a desirable
            place to study on UCI campus, based on their current location. StudyZot was built using
            React.js, TypeScript, HTML, and CSS.<br></br><br></br>
            Made with ♥ from the StudyZot Team
            </p>
        </div>
      </Modal.Body>
    </Modal>
  )
}