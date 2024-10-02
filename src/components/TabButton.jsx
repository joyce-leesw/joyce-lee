import '../styles/TabButton.css';

export default function TabButton({ company, isSelected, ...props }) {
	return (
		<li>
			<button 
				className={isSelected ? 'selected' : ''} 
				style={{ color: 'white' }}
				{...props}
			>
				{company}
			</button>
		</li>
	)
}