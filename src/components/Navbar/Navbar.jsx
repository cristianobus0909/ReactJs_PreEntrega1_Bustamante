import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = ()=>{
    return (
        <header>
            <h1>Lara</h1>
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