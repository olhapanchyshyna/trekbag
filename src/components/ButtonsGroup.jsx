import Button from './Button'
import { useItemsStore } from '../stores/itemsStore'

export default function ButtonsGroup() {
	const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
	const markAllAsIncomplete = useItemsStore((state) => state.markAllAsIncomplete);
	const resetToInitial = useItemsStore((state) => state.resetToInitial);
	const removeAllItems = useItemsStore((state) => state.removeAllItems);


	const secondaryButtons = [
		{
			text: "Mark all as complete",
			onClick : markAllAsComplete
		},
		{
			text: "Mark all as incomplete",
			onClick : markAllAsIncomplete
		},
		{
			text: "Reset to initial",
			onClick : resetToInitial
		},
		{
			text: "Remove all items",
			onClick : removeAllItems
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
