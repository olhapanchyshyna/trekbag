import { useEffect, useState } from 'react'
import { initialItems } from '../lib/constants'
import BeckgroundHeading from './BeckgroundHeading'
import Footer from './Footer'
import Header from './Header'
import ItemList from './ItemList'
import Sidebar from './Sidebar'

function App() {
	// const [items, setItems] = useState(initialItems)

	const [items, setItems] = useState(() => {
		return JSON.parse(localStorage.getItem('items')) || initialItems
	})

	const handleAddItem = newItemText => {
		const newItem = {
			id: new Date().getTime(),
			name: newItemText,
			packed: false,
		}
		const newItems = [...items, newItem]

		setItems(newItems)
	}

	const handleRemoveItem = id => {
		const newItem = items.filter(item => item.id !== id)
		setItems(newItem)
	}

	const handleToogleItem = id => {
		const newItem = items.map(item => {
			if (item.id === id) {
				return { ...item, packed: !item.packed }
			}
			return item
		})
		setItems(newItem)
	}

	const handleRemoveAllItems = () => {
		setItems([])
	}

	const handleResetToInitial = () => {
		setItems(initialItems)
	}

	const handleMarkAllAsComplete = () => {
		const newItem = items.map(i => {
			return { ...i, packed: true }
		})
		setItems(newItem)
	}

	const handleMarkAllAsIncomplete = () => {
		const newItem = items.map(i => {
			return { ...i, packed: false }
		})
		setItems(newItem)
	}

	const packedItems = items.filter(item => {
		return item.packed === true
	})

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items))
	}, [items])

	return (
		<>
			<BeckgroundHeading />
			<main>
				<Header numberOfItemsPacked={items.length} packedItems={packedItems} />
				<ItemList
					item={items}
					handleRemoveItem={handleRemoveItem}
					handleToogleItem={handleToogleItem}
				/>
				<Sidebar
					handleAddItem={handleAddItem}
					handleRemoveAllItems={handleRemoveAllItems}
					handleResetToInitial={handleResetToInitial}
					handleMarkAllAsComplete={handleMarkAllAsComplete}
					handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
				/>
			</main>
			<Footer />
		</>
	)
}

export default App
