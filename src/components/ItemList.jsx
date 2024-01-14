import Select from 'react-select'
import EmptyView from './EmptyView'
import { useMemo, useState } from 'react'
import { useItemsContect } from '../lib/hooks'


const sortingOptions = [
	{
		label: "Sort by default",
		value: "default",
	},
	{
		label: "Sort by packed",
		value: "packed",
	},
	{
		label: "Sort by unpacked",
		value: "unpacked",
	},
];


export default function ItemList() {
	const {items,
		handleToogleItem,
		handleRemoveItem,
} = useItemsContect()

	const [sortBy, setSortBy] = useState('default')


	const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );
	
	return (
		<ul className='item-list'>
			{items.length === 0 ? <EmptyView /> : null}

			{items.length > 0 ? (
				<section className='sorting'>
					<Select onChange={(option) => {setSortBy(option.value)}} defaultValue={sortingOptions[0]} options={sortingOptions}/>
				</section>
			) : null}

			{sortedItems.map(item => {
				return (
					<Item key={item.id} item={item} handleRemoveItem={handleRemoveItem} handleToogleItem={handleToogleItem}/>
				)
			})}
		</ul>
	)
}

function Item({ item, handleRemoveItem, handleToogleItem }) {
	return (
		<li className='item'>
			<label>
				<input onClick={() => {handleToogleItem(item.id)}} type='checkbox' checked={item.packed}/>
				{item.name}
			</label>
			<button onClick={() => {handleRemoveItem(item.id)}}>❌</button>
		</li>
	)
}
