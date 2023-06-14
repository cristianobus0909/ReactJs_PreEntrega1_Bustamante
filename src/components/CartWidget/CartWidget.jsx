import cart from './asset/cart.png'
import styles from './CartWidget.module.css'



const CartWidget = ()=>{
    return(
        <div>
            <img className={styles.cartwidget} src={cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget