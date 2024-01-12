import { useRef, useState } from 'react'
import Button from './Button'

export default function AddItemForm({ setItem }) {
	const [itemText, setItemText] = useState('')
	const inputRef = useRef()

	const handleSubmit = e => {
		e.preventDefault()

		if (itemText !== '') {
			const newItem = {
				id: new Date().getTime(),
				name: itemText,
				packed: false,
			}
			setItem(prev => [...prev, newItem])
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
