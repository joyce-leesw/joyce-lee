import GitHubIcon from "../assets/github-icon";
import '../styles/Projects.css';

export default function Project ({ title, description, languages, link }) {
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
			<div className="project-github-item">
				<a href={link} target="_blank" rel="noopener noreferrer" className="project-github-link">
					<GitHubIcon className="project-github-icon"/>
				</a>
			</div>
		</section>
	)
}