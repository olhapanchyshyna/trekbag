import AddItemForm from './AddItemForm'
import ButtonsGroup from './ButtonsGroup'

export default function Sidebar({
	handleAddItem,
	handleRemoveItems,
	handleResetToInitial,
	handleMarkAllAsComplete,
	handleMarkAllAsIncomplete,
}) {
	return (
		<div className='sidebar'>
			<AddItemForm onAddItem={handleAddItem} />
			<ButtonsGroup
				handleRemoveItems={handleRemoveItems}
				handleResetToInitial={handleResetToInitial}
				handleMarkAllAsComplete={handleMarkAllAsComplete}
				handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
			/>
		</div>
	)
}
