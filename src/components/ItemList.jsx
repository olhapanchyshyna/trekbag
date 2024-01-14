import Select from 'react-select'
import EmptyView from './EmptyView'
import { useMemo, useState } from 'react'


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


export default function ItemList({ item, handleRemoveItem, handleToogleItem }) {

	const [sortBy, setSortBy] = useState('default')

	const sortedItems = useMemo(
    () =>
      [...item].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [item, sortBy]
  );
	return (
		<ul className='item-list'>
			{item.length === 0 ? <EmptyView /> : null}

			{item.length > 0 ? (
				<section className='sorting'>
					<Select onChange={(option) => {setSortBy(option.value)}} defaultValue={sortingOptions[0]} options={sortingOptions}/>
				</section>
			) : null}

			{sortedItems.map(item => {
				return (
					<Item key={item.id} item={item} onRemoveItem={handleRemoveItem} onToogleItem={handleToogleItem}/>
				)
			})}
		</ul>
	)
}

function Item({ item, onRemoveItem, onToogleItem }) {
	return (
		<li className='item'>
			<label>
				<input onClick={() => {onToogleItem(item.id)}} type='checkbox' checked={item.packed}/>
				{item.name}
			</label>
			<button onClick={() => {onRemoveItem(item.id)}}>❌</button>
		</li>
	)
}
