import { useState } from 'react'
import { useEffect } from 'react'
import '../styles/Cart.css'

const Cart = ({cart, updateCart,activeCategory}) => {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )
    useEffect(()=>{
        alert ('bienvenu')
    },[])

    useEffect(()=>{
       
        alert(`j'aurai ${total} a payer`)

    },[total,activeCategory])

    useEffect(()=>{
        document.title = `LMJ: ${total} d'achats`
    },[total])

    // partie pour stocker le panier je vais utiliser le localStorage et modifier mon objet en texte
    // localStorage.setItem('ThemeDark', 'true');
    //  console.log(localStorage)

    // faire un une fonction qui sauvegarde le panier avec le timer

    const Saved=(cart)=>{
       
        const data = {
            panier : cart,
            expiratedCart : Date.now()+2*60*1000
        }
        console.log("les donner du panier + date d'expiration: ",data)

        localStorage.setItem("panierWithExpiration",JSON.stringify(data))
        
        // Vérifier que les données sont bien stockées
        const stored = localStorage.getItem("panierWithExpiration")
        console.log("date d'expiration + panier en text et localStorage: ", stored)
    }
    
    // faire une fonction pour lire le panier

    const Read=()=>{
        const saved = localStorage.getItem("panierWithExpiration")

        if(!saved) return []

        const data = JSON.parse(saved)
         console.log("data vers objet:",data)
        if(Date.now() > data.expiratedCart){
               localStorage.removeItem("panierWithExpiration")
                console.log("Panier expiré, données supprimées du localStorage")
                return []
        }
        return data.panier
    }
  
    const [panier, setPanier]= useState(Read)

    useEffect(()=>{
        if(cart.length > 0) {
            Saved(cart)
        }
    },[cart])

    // const monPanier = cart
    // const transformerText = JSON.stringify(monPanier)
    // const backObj= JSON.parse(transformerText)

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
                
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                  
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart;