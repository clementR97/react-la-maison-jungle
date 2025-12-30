const plantList = [
    'montsera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

const ShoppingList = () =>{
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key ={`${plant}-${index}`}>{plant}</li>
            ))}
        </ul>
    )
}
export default ShoppingList