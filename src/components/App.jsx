import { useState } from 'react'
import { initialItems } from '../lib/constants'
import BeckgroundHeading from './BeckgroundHeading'
import Footer from './Footer'
import Header from './Header'
import ItemList from './ItemList'
import Sidebar from './Sidebar'

function App() {
	const [item, setItem] = useState(initialItems)

	const handleAddItem = newItemText => {
		const newItem = {
			id: new Date().getTime(),
			name: newItemText,
			packed: false,
		}
		const newItems = [...item, newItem]

		setItem(newItems)
	}
	const handleRemoveItems = () => {
		setItem([])
	}
	const handleResetToInitial = () => {
		setItem(initialItems)
	}
  const handleMarkAllAsComplete = () => {
    const newItem = item.map((i) => {
      return {...i, packed: true}
    })
		setItem(newItem)
	}
  const handleMarkAllAsIncomplete = () => {
    const newItem = item.map((i) => {
      return {...i, packed: false}
    })
		setItem(newItem)
	}

	return (
		<>
			<BeckgroundHeading />
			<main>
				<Header />
				<ItemList item={item} />
				<Sidebar
					handleAddItem={handleAddItem}
					handleRemoveItems={handleRemoveItems}
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
