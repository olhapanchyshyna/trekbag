import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { initialItems } from '../lib/constants'

export const useItemsStore = create(
	persist(
		set => ({
			items: initialItems,

			addItem: newItemText => {
				const newItem = {
					id: new Date().getTime(),
					name: newItemText,
					packed: false,
				}

				set(state => ({ items: [...state.items, newItem] }))
			},

			removeItem: id => {
				set(state => {
					const newItem = state.items.filter(item => item.id !== id)
					return { items: newItem }
				})
			},

			toogleItem: id => {
				set(state => {
					const newItem = state.items.map(item => {
						if (item.id === id) {
							return { ...item, packed: !item.packed }
						}
						return item
					})
					return { items: newItem }
				})
			},

			removeAllItems: () => {
				set(() => ({ items: [] }))
			},
			resetToInitial: () => {
				set(() => ({ items: initialItems }))
			},
			markAllAsComplete: () => {
				set(state => {
					const newItem = state.items.map(i => {
						return { ...i, packed: true }
					})
					return { items: newItem }
				})
			},
			markAllAsIncomplete: () => {
				set(state => {
					const newItem = state.items.map(i => {
						return { ...i, packed: false }
					})
					return { items: newItem }
				})
			},
		}),
		{
			name: 'items',
		}
	)
)
