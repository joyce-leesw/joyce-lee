import '../styles/Achievement.css';

export default function Achievements ({ title, date, achievements }) {
	return (
		<div className="achievements-container">
			<h3>{title}</h3>
			<h4>{date}</h4>
			{achievements.map((achievement, index) => (
				<div key={index} className="achievement">
					{achievement}
				</div>
			))}
		</div>
	)
}