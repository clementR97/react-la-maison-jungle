import sun from'../assets/sun.svg'
import goute from'../assets/water.svg'
const CareScale = ({ scaleValue, careType }) => {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? <img src={sun}/> : <img src={goute}/> 

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale

