import { useState } from 'react'
import BeckgroundHeading from './BeckgroundHeading'
import Footer from './Footer'
import Header from './Header'
import ItemList from './ItemList'
import Sidebar from './Sidebar'
import { initialItems } from '../lib/constants'

function App() {
  const [item, setItem] = useState(initialItems)

  return (
    <>
      <BeckgroundHeading/>
      <main>
        <Header/>
        <ItemList item={item}/>
        <Sidebar setItem={setItem}/>
      </main>
      <Footer/>
      
    </>
  )
}

export default App
