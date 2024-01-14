export default function Counter({numberOfItemsPacked, packedItems}) {

	return (
		<p>
      <b>{packedItems.length}</b> / {numberOfItemsPacked} items packed
    </p>
	)
}
