import styles from'../styles/Banner.module.css'
import logo from '../assets/electro.jpeg'
const Banner = () =>{
    const tittle = '🌿 la maison jungle'
    return (
    <div className={styles.banner}>
        <img src={logo}
        alt="Logo La maison jungle"
        className="banner-logo"
        />
        <h1 className={styles.banner-tittle}> {tittle}</h1>
    </div>
    
)
}
export default Banner