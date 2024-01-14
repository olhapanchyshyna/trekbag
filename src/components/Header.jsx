import Counter from './Counter'
import Logo from './Logo'

export default function Header({numberOfItemsPacked, packedItems}) {
	return (
		<header>
			<Logo />
			<Counter numberOfItemsPacked={numberOfItemsPacked} packedItems={packedItems}/>
		</header>
	)
}
