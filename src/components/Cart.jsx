import styles from '../styles/Cart.module.css'
const Cart = () =>{
    const montsera = 8
    const lierre = 10
    const bouquet = 15

    return(
        <div className={styles.panier}>
            <h2>Mon Panier:</h2>
            <ul>
                <li>Montsera: {montsera}</li>
                <li>Lierre: {lierre}</li>
                <li>Bouquet de Fleur: {bouquet}</li>
            </ul>
            <p>Total: {montsera+lierre+bouquet}€</p>
        </div>
    )
}
export default Cart