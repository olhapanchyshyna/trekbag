import Button from './Button'

export default function ButtonsGroup({handleRemoveItems, handleResetToInitial, handleMarkAllAsComplete, handleMarkAllAsIncomplete}) {
	const secondaryButtons = [
		{
			text: "Mark all as complete",
			onClick : handleMarkAllAsComplete
		},
		{
			text: "Mark all as incomplete",
			onClick : handleMarkAllAsIncomplete
		},
		{
			text: "Reset to initial",
			onClick : handleResetToInitial
		},
		{
			text: "Remove all items",
			onClick : handleRemoveItems
		},
	]

		return (
			<section className="button-group">
				{secondaryButtons.map((item) => {
					return <Button key={item.text} type="secondary" onAction={item.onClick}>{item.text}</Button>
				})}
			</section>
		)
		
}
