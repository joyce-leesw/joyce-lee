import GitHubIcon from "../assets/github-icon";
import WebsiteIcon from "../assets/website-icon";
import '../styles/Projects.css';

export default function Project ({ title, description, languages, githubLink }) {
	return (
		<section className="project">
			<h2>{title}</h2>
			<p>{description}</p>
			<div className="languages">
				{languages.map((language, index) => (
					<div className="language" key={index}>
						{language}
					</div>
				))}
			</div>
			<div className="project-items">
				<a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-website-link">
					<WebsiteIcon className="project-website-icon"/>
				</a>
				<a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-github-link">
					<GitHubIcon className="project-github-icon"/>
				</a>
			</div>
		</section>
	)
}