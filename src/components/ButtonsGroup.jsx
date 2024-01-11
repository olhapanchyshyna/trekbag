import Button from './Button'

export default function ButtonsGroup() {
	return (
		<section className='button-group'>
			<Button buttonType='secondary'>Mark all as complete</Button>
			<Button buttonType='secondary'>Mark all as incomplete</Button>
			<Button buttonType='secondary'>Reset to initial</Button>
			<Button buttonType='secondary'>Remove all items </Button>
		</section>
	)
}
