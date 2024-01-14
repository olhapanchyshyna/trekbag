import { useContext } from 'react'
import { ItemsContext } from '../contexts/itemsContextProvider'

export function useItemsContect() {
	const context = useContext(ItemsContext)
	if (!context){
		throw new Error('useItemsContext must be used within an ItemsContextProvider')
	} 

	return context
}
