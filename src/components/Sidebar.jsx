import AddItemForm from './AddItemForm'
import ButtonsGroup from './ButtonsGroup'

export default function Sidebar({setItem}) {
	return (
		<div className='sidebar'>
			<AddItemForm setItem={setItem}/>
			<ButtonsGroup/>
		</div>
	)
}
