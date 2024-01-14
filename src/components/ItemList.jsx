export default function ItemList({item, handleRemoveItem, handleToogleItem}) {
	return (
		<ul>
			{item.map(item => {
				return <Item key={item.id} item={item} handleRemoveItem={handleRemoveItem} handleToogleItem={handleToogleItem} />
			})}
		</ul>
	)
}

function Item({ item, handleRemoveItem, handleToogleItem }) {
	return (
		<li className='item'>
			<label >
				<input onClick={()=>{handleToogleItem(item.id)}} type='checkbox' checked={item.packed} />
				{item.name}
			</label>
			<button onClick={()=>{handleRemoveItem(item.id)}}>❌</button>
		</li>
	)
}
