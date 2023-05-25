import styles from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = ()=>{
    return (
        <header className={styles.navbar}>
            <h1 className= {styles.titulo}>Lara</h1>
            <section>
                <button>Productos</button>
                <button>Promociones</button>
                <button>Nosotros</button>
                <button>Contacto</button>
            </section>
        <CartWidget/>    
        </header>
    )
}

export default Navbar