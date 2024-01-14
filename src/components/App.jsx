import ItemsContextProvider from '../contexts/itemsContextProvider'
import BeckgroundHeading from './BeckgroundHeading'
import Footer from './Footer'
import Header from './Header'
import ItemList from './ItemList'
import Sidebar from './Sidebar'

function App() {
	return (
		<>
			<BeckgroundHeading />
			<main>
				<ItemsContextProvider>
					<Header />
					<ItemList />
					<Sidebar />
				</ItemsContextProvider>
			</main>
			<Footer />
		</>
	)
}

export default App
