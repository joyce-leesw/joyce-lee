import '../styles/TabButton.css';
import PropTypes from 'prop-types';

export default function TabButton({ company, isSelected, ...props }) {
	return (
		<li>
			<button 
				className={isSelected ? 'selected' : ''} 
				{...props}
			>
				{company}
			</button>
		</li>
	)
}

TabButton.propTypes = {
	company: PropTypes.string.isRequired,
	isSelected: PropTypes.bool,
};

TabButton.defaultProps = {
	isSelected: false,
};