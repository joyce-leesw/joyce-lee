import EmailIcon from "../assets/email-icon";
import GitHubIcon from "../assets/github-icon";
import LinkedInIcon from "../assets/linkedin-icon";
import { GITHUB_URL, LINKEDIN_URL } from "../data";
import '../styles/NavBar.css';

export default function NavBar() {
	return (
		<nav className="nav-tabs">
			<div className="nav-icons">
				<ul>
					<li className="icon-item email-item">
						<EmailIcon className="icon"/>
					</li>
					<li className="icon-item github-item">
						<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="github-link">
							<GitHubIcon className="icon"/>
						</a>
					</li>
					<li className="icon-item linkedin-item">
						<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="linkedin-link">
							<LinkedInIcon className="icon"/>
						</a>
					</li>
				</ul>
			</div>
			<div className="nav-links">
				<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#experience">Experience</a></li>
					<li><a href="#projects">Projects</a></li>
				</ul>
			</div>
		</nav>
	)
}