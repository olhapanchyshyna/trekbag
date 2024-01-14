import Button from './Button'
import { useItemsContect } from '../lib/hooks'

export default function ButtonsGroup() {
	const {handleMarkAllAsComplete, handleMarkAllAsIncomplete, handleResetToInitial, handleRemoveAllItems} = useItemsContect()

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
			onClick : handleRemoveAllItems
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
