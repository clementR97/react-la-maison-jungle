import '../styles/PlantItem.css';
import CareScale from'./CareScale'
const handleClick = () =>{
    console.log('oh mon dieu ça chatouille🤣')
}
const PlantItem = ({name, cover, id, light, water})=>{

    return(
        <li key={id} className='lmj-plant-item' onClick={handleClick}>
        
         <img className='lmj-plant-item-cover' src={cover} alt={name}/> 
         {name}
            <div>
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </div>
        </li>
    )
}
export default PlantItem