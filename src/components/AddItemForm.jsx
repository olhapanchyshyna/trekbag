import { useRef, useState } from 'react'
import Button from './Button'
import { useItemsContect } from '../lib/hooks'

export default function AddItemForm() {
	const [itemText, setItemText] = useState('')
	const inputRef = useRef()
	const {handleAddItem} = useItemsContect()

	const handleSubmit = e => {
		e.preventDefault()

		if (itemText !== '') {
			handleAddItem(itemText)
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
