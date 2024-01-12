import AddItemForm from './AddItemForm'
import ButtonsGroup from './ButtonsGroup'

export default function Sidebar({handleAddItem}) {
	return (
		<div className='sidebar'>
			<AddItemForm onAddItem={handleAddItem}/>
			<ButtonsGroup/>
		</div>
	)
}
