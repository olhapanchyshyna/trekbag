import { useState } from 'react'
import { initialItems } from '../lib/constants'
import BeckgroundHeading from './BeckgroundHeading'
import Footer from './Footer'
import Header from './Header'
import ItemList from './ItemList'
import Sidebar from './Sidebar'

function App() {
	const [items, setItems] = useState(initialItems)

	const handleAddItem = newItemText => {
		const newItem = {
			id: new Date().getTime(),
			name: newItemText,
			packed: false,
		}
		const newItems = [...items, newItem]

		setItems(newItems)
	}

  const handleRemoveItem = (id) => {
    const newItem = items.filter((item) => item.id !== id )
    setItems(newItem)
  }

	const handleRemoveAllItems = () => {
		setItems([])
	}
	const handleResetToInitial = () => {
		setItems(initialItems)
	}
  const handleMarkAllAsComplete = () => {
    const newItem = items.map((i) => {
      return {...i, packed: true}
    })
		setItems(newItem)
	}
  const handleMarkAllAsIncomplete = () => {
    const newItem = items.map((i) => {
      return {...i, packed: false}
    })
		setItems(newItem)
	}

	return (
		<>
			<BeckgroundHeading />
			<main>
				<Header />
				<ItemList item={items} handleRemoveItem={handleRemoveItem}/>
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
