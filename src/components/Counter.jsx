import { useItemsContect } from '../lib/hooks'

export default function Counter() {

	const {items, packedItems} = useItemsContect()
	return (
		<p>
      <b>{packedItems.length}</b> / {items.length} items packed
    </p>
	)
}
