import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel1 = {
	1:'peu',
	2:'moderer',
	3:'beaucoup'
}

const CareScale = ({ scaleValue, careType }) => {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={()=> alert(`cette plante requiert ${quantityLabel1[scaleValue]} ${careType === 'light'? 'de lumiere':'d\'arrosage'}`)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
