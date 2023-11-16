import studyZotIcon from './assets/StudyZotIcon_Circle.svg'
import './TopNavBar.css'

function Switch() {
  return (
    <>
      <label className="switch">
        <input type="checkbox"/>
        <span className="slider"></span>
      </label>
    </>
  )
}

export function TopNavBar() {
    return (
      <div className="navbar">
        <img src={studyZotIcon}/>
        <h1> StudyZot </h1>
        <Switch />
      </div>
    )
}