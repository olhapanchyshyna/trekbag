import AddItemForm from './AddItemForm'
import ButtonsGroup from './ButtonsGroup'

export default function Sidebar({
	handleAddItem,
	handleRemoveAllItems,
	handleResetToInitial,
	handleMarkAllAsComplete,
	handleMarkAllAsIncomplete,
}) {
	return (
		<div className='sidebar'>
			<AddItemForm onAddItem={handleAddItem} />
			<ButtonsGroup
				handleRemoveAllItems={handleRemoveAllItems}
				handleResetToInitial={handleResetToInitial}
				handleMarkAllAsComplete={handleMarkAllAsComplete}
				handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
			/>
		</div>
	)
}
