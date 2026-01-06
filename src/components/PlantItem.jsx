import '../styles/PlantItem.css';
import CareScale from'./CareScale'

const PlantItem = ({name, cover, id, light, water})=>{

    return(
        <li key={id} className='lmj-plant-item'>
        
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

