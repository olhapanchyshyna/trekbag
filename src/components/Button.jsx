export default function Button({ buttonType, children, onAction }) {
	return (
		<button
			onClick={onAction}
			className={`btn ${buttonType === 'secondary' ? 'btn--secondary' : ''}`}
		>
			{children}
		</button>
	)
}
