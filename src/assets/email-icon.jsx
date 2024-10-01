const EmailIcon = (props) => (
	<a href="mailto:shuwei1203@gmail.com" className="email-link" {...props}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 80 80"
			width="30"
			height="30"
			fill="currentColor"
			className="email-icon"
		>
			<g>
				<path d="M48.7,55c0.8,0.7,1.9,0.7,2.7,0l28.3-26.2c0.5-1,0.4-2.6-1.6-2.6h-56c-1.5,0-2.7,1.4-1.6,2.6L48.7,55z" />
				<path d="M80,40c0-1.3-1.6-2-2.5-1.1l-22,20.4c-1.5,1.4-3.4,2.1-5.4,2.1s-3.9-0.7-5.4-2.1L22.6,38.9c-1-0.9-2.5-0.2-2.5,1.1v26c0,3.3,2.7,6,6,6h48c3.3,0,6-2.7,6-6v-26z" />
			</g>
		</svg>
	</a>
);

export default EmailIcon;