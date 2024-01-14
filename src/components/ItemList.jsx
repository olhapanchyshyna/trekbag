import EmptyView from './EmptyView'

export default function ItemList({item, handleRemoveItem, handleToogleItem}) {
	return (
		<ul className='item-list'>
			{item.length === 0 ? <EmptyView/> : null}
			{item.map(item => {
				return <Item key={item.id} item={item} onRemoveItem={handleRemoveItem} onToogleItem={handleToogleItem} />
			})}
		</ul>
	)
}

function Item({ item, onRemoveItem, onToogleItem }) {
	return (
		<li className='item'>
			<label >
				<input onClick={()=>{onToogleItem(item.id)}} type='checkbox' checked={item.packed} />
				{item.name}
			</label>
			<button onClick={()=>{onRemoveItem(item.id)}}>❌</button>
		</li>
	)
}
