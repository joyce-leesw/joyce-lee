const EmailIcon = (props) => (
	<a href="mailto:shuwei1203@gmail.com" className="email-link" {...props}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			fill="currentColor"
			className="email-icon"
		>
			<path d="M12 12.713l-11.985-7.713h23.97l-11.985 7.713zm-12-1.148v10.435h24v-10.435l-12 7.727-12-7.727z"/>
		</svg>
	</a>
);

export default EmailIcon;