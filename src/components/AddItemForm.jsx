import { useRef, useState } from 'react'
import Button from './Button'
import { useItemsStore } from '../stores/itemsStore'

export default function AddItemForm() {
	const [itemText, setItemText] = useState('')
	const inputRef = useRef()

	const addItem = useItemsStore((state) => state.addItem);

	const handleSubmit = e => {
		e.preventDefault()

		if (itemText !== '') {
			addItem(itemText)
		} else {
			alert("Item can't be empty")
			inputRef.current.focus()
		}
		
		setItemText('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add an item</h2>
			<input
				value={itemText}
				onChange={e => {
					setItemText(e.target.value)
				}}
				ref={inputRef}
				autoFocus
			/>
			<Button>Add to list</Button>
		</form>
	)
}
