
export default function Section ({ title, children, ...props }) {
	return (
		<section {...props} className="section">
			<h2>{title}</h2>
			{children}
		</section>
	)
}