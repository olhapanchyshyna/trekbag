export default function ItemList({item, handleRemoveItem}) {
	return (
		<ul>
			{item.map(item => {
				return <Item key={item.id} item={item} handleRemoveItem={handleRemoveItem} />
			})}
		</ul>
	)
}

function Item({ item, handleRemoveItem }) {
	return (
		<li className='item'>
			<label>
				<input type='checkbox' checked={item.packed} />
				{item.name}
			</label>
			<button onClick={()=>{handleRemoveItem(item.id)}}>❌</button>
		</li>
	)
}
