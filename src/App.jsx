import Banner from './components/Banner'
import Cart from './components/Cart'
import logo from './assets/logo.png'
import ShoppingList from './components/ShoppingList'
import Footer from './components/Footer'

const App = () => {
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            {/* <Cart /> */}
            <ShoppingList />
            <Footer/>
        </div>
    )
}

export default App