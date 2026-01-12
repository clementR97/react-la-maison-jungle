import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'


const ShoppingList = ({cart,updateCart}) => {
 
const [filterPlants, setFilter]=useState([])

	 const categories = plantList.reduce(
		(acc, plant) =>
	 		acc.includes(plant.category) ? acc : acc.concat(plant.category),
	 	[]
	 )
      
	 const handleFilter = (plantList)=>{
		setFilter(plantList)
	 }
	 


	return (
		<div className='lmj-shopping-list'>
			<Categories categories={categories} plantliste={plantList} plantesfiltrer={handleFilter}/>
			{console.log(filterPlants)}

			<ul className='lmj-plant-list'>
				{( filterPlants.length>0 ? filterPlants: plantList).map(({ id, cover, name, water, light }) => (
					<div key={id}>
						<PlantItem
						
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
					<button onClick={()=>updateCart(cart+1)}>Ajouter</button>
					</div>
					
				))
				
				// plantList.map(({ id, cover, name, water, light }) => (
				// 	<div key={id}>
				// 		<PlantItem
						
				// 		cover={cover}
				// 		name={name}
				// 		water={water}
				// 		light={light}
				// 	/>
				// 	<button onClick={()=>updateCart(cart+1)}>Ajouter</button>
				// 	</div>
					
				// ))
			}
			</ul>
		</div>
		
	)
	
}

export default ShoppingList
