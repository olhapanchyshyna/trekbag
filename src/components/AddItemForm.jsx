import { useState } from 'react'
import Button from './Button'

export default function AddItemForm({ setItem }) {
	const [itemText, setItemText] = useState('')
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()

				const newItem = {
					id: new Date().getTime(),
					name: itemText,
					packed: false,
				}
				setItem((prev) => [...prev, newItem])
			}}
		>
			<h2>Add an item</h2>
			<input
				value={itemText}
				onChange={e => {
					setItemText(e.target.value)
				}}
			/>
			<Button>Add to list</Button>
		</form>
	)
}
