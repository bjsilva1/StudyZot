import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import './LeftSideBar.css'

function SpaceRoomSection () {
	return (
		<Container className="leftSideBar">
			<h2> Filters </h2>
			<h5> Priorities </h5>
			<Form>
				<Form.Check label="Distance" defaultChecked/>
				<Form.Check label="Crowdedness" defaultChecked/>
			</Form>
			<br />
			<h5> Space Type </h5>
			<Form>
				<Form.Check label="Study Room" defaultChecked/>
				<Form.Check label="Open Space" defaultChecked/>
			</Form>
			<br />
			<h5> Amenities </h5>
			<Form>
				<Form.Check label="Food" />
			</Form>
		</Container>
	)
}

export function LeftSideBar() {
	return (
		<>
			<SpaceRoomSection />
		</>
	)
}
