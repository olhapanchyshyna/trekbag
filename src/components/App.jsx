import { useState } from 'react'
import BeckgroundHeading from './BeckgroundHeading'
import Footer from './Footer'
import Header from './Header'
import ItemList from './ItemList'
import Sidebar from './Sidebar'
import { initialItems } from '../lib/constants'

function App() {
  const [item, setItem] = useState(initialItems)

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    }
    const newItems = [...item, newItem]
    
    setItem(newItems)
  }

  return (
    <>
      <BeckgroundHeading/>
      <main>
        <Header/>
        <ItemList item={item}/>
        <Sidebar handleAddItem={handleAddItem}/>
      </main>
      <Footer/>
      
    </>
  )
}

export default App
