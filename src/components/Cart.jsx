import {useState} from'react'

const Cart = ()=>{
  const montserraPrice=8
  const [cart,UpdatCart]=useState(0)

  const handleAddToCart = ()=>{
    UpdatCart(cart+1)  
  }
  const [isOpen,setIsOpen]=useState(false)
  const handleOpenPanier = ()=>{
    setIsOpen(true)
  }
  const handleClosePanier = ()=>{
    setIsOpen(false)
  }

return isOpen ?(
  <div className='lmj-cart'>
    <button onClick={handleClosePanier}>fermer le panier</button>
    <h2>Panier</h2>
    <div>
      Montserra: {montserraPrice}€
      <button onClick={handleAddToCart}> Ajouter </button>
    </div>
    <h3>total: {montserraPrice*cart}€</h3>
  </div>
): (
  <button onClick={handleOpenPanier}>ouvrir le Panier</button>
)
}
export default Cart