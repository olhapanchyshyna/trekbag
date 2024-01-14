import Select from 'react-select'
import EmptyView from './EmptyView'
import { useMemo, useState } from 'react'
import { useItemsStore } from '../stores/itemsStore'

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
	const items = useItemsStore((state) => state.items);
	const removeItem = useItemsStore((state) => state.removeItem);
	const toogleItem = useItemsStore((state) => state.toogleItem);

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
					<Item key={item.id} item={item} removeItem={removeItem} toogleItem={toogleItem}/>
				)
			})}
		</ul>
	)
}

function Item({ item, removeItem, toogleItem }) {
	return (
		<li className='item'>
			<label>
				<input onClick={() => {toogleItem(item.id)}} type='checkbox' checked={item.packed}/>
				{item.name}
			</label>
			<button onClick={() => {removeItem(item.id)}}>❌</button>
		</li>
	)
}
