import { useState } from "react";

const Categories = ({categories,plantliste,plantesfiltrer})=>{
const [selectCategories,setCategories] = useState('')
    const handleCategories =(e)=>{
        console.log(`categories sélectionner: ${e.target.value}`)
        setCategories(e.target.value)
console.log(plantliste)
        // test pour afficher dans la console.log la liste des plantes par categories selectionner
         const PlantesParCategory = plantliste.filter(cate => cate.category === e.target.value)
         console.log(e.target.value)
          const listPlantesCatego = PlantesParCategory.map((catego=>catego))
         console.log('liste des plantes par category selectionner',listPlantesCatego)
         plantesfiltrer (listPlantesCatego)
         console.log('mon plantesfiltrer de categories contient:',plantesfiltrer)
    }

    

    return(
        <div>
            
            <select 
            value={selectCategories}
            onChange={handleCategories}> 
            {categories.map((cat)=>(
                <option key={cat} value={cat} >{cat}</option>
            ))}
                
            </select>
        </div>
        
    )
    
    
}

export default Categories