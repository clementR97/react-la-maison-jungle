import { useState, useEffect } from 'react'

import Banner from './components/Banner'
import Cart from './components/Cart'
import Footer from './components/Footer'
import ShoppingList from './components/ShoppingList'
import logo from './assets/logo.png'
import './styles/Layout.css'

// Fonction pour lire le panier depuis le localStorage
const readCartFromLocalStorage = () => {
    const saved = localStorage.getItem("panierWithExpiration")
    
    if(!saved) return []

    const data = JSON.parse(saved)
    
    if(Date.now() > data.expiratedCart){
        localStorage.removeItem("panierWithExpiration")
        console.log("Panier expiré, données supprimées du localStorage")
        return []
    }
    return data.panier
}

const App = () => {
    // Initialiser le panier avec les données du localStorage au démarrage
    const [cart, updateCart] = useState(() => {
        const savedCart = readCartFromLocalStorage()
        if(savedCart.length > 0) {
            console.log('Panier restauré depuis le localStorage:', savedCart)
        }
        return savedCart
    })
    const [activeCategory, setActiveCategory] = useState('')
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} activeCategory={activeCategory} />
                <ShoppingList cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
            </div>
            <Footer />
        </div>
    )
}

export default App