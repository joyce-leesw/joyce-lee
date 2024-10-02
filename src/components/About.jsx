import Lottie from "lottie-react";
import { ABOUT } from "../data";
import Section from "./Section";
import joyceAnimation from '../animations/joyce-animation.json';
import '../styles/About.css';

export default function About () {
	return (
		<Section id="about" title="About">
			<div className="content">
				{ABOUT}
			</div>
			<Lottie animationData={joyceAnimation} loop={true} style={{ height: 300, width: 300 }} />
		</Section>
	)
}