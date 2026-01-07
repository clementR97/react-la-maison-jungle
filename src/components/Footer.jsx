import { useState } from 'react'
import '../styles/Footer.css'


const Footer = () => {
	const handleInput = (e)=>{
	setInputValue(e.target.value)
}
const handleBlur = (e)=>{
	if(!inputValue.includes('@')){
		alert("Adresse mail invalide vous avez oublier le @")
	}
}
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
				<input
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
				/>
			
		</footer>
	)
}

export default Footer
