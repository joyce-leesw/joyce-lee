
export default function TabButton({ company, isSelected, ...props }) {
	return (
		<li>
			<button className={isSelected ? 'selected' : ''} {...props}>{company}</button>
		</li>
	)
}