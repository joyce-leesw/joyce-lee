import '../styles/Achievement.css';

export default function Achievements ({ title, date, achievements }) {

	const highlightText = (text) => {
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, index) => {
			if (part.startsWith('*') && part.endsWith('*')) {
				const highlightedText = part.slice(1, -1);
				return <span key={index} className="highlight">{highlightedText}</span>;
			}
			return part;
    });
	};

	return (
		<div className="achievements-container">
			<h3 className='company-name'>{title}</h3>
			<h4 className='duration'>{date}</h4>
			{achievements.map((achievement, index) => (
				<div key={index} className="achievement">
					{highlightText(achievement)}
				</div>
			))}
		</div>
	)
}