import './Footer.css'
import { DiGithubBadge } from "react-icons/di";

export function Footer() {
    return (
      <>
        <div className="footer">
            <div className="footer-icons">
                <a href="https://github.com/bjsilva1/StudyZot" target="_blank" rel="noopener noreferrer" title="GitHub"><DiGithubBadge /></a>
            </div>
            <a href="https://github.com/bjsilva1/StudyZot">StudyZot</a>
        </div>
      </>
    )
}
