import { ABOUT } from "../data"
import Section from "./Section"

export default function About () {
	return (
		<>
			<Section id="about" title="About">
			<div className="content">
				{ABOUT}
			</div>
			</Section>
		</>
	)
}