import { INTRO_NAME, INTRO_SUBTITLE, INTRO_TITLE } from "../data";
import '../styles/Intro.css';

export default function Intro () {
	return (
		<section id="home" className="intro">
			<h3>{INTRO_TITLE}</h3>
			<h1>{INTRO_NAME}</h1>
			<h4>{INTRO_SUBTITLE}</h4>
		</section>
	)
}