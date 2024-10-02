import { PROJECTS } from "../data";
import Project from "./Project";
import Section from "./Section";
import '../styles/Projects.css';

export default function Projects () {
	return (
		<Section id="projects" title="Projects">
			<div id="projects-container">
				{PROJECTS.map((project, index) => (
					<Project 
						key={index}
						title={project.title}
						description={project.description}
						languages={project.languages}
						link={project.link}/>
				))}
			</div>
		</Section>
	)
}