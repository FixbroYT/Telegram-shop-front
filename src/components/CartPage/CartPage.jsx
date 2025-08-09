import "./CartPage.css"
import CartProduct from "../CartProduct/CartProduct"
import PayButton from "../PayButton/PayButton"

export default function CartPage({ cartItems, setCartItems }) {
    return (
        <div className="cartPage">
            {
            cartItems.length === 0 
                ? <p>Your shopping cart is currently empty</p>
                : cartItems.map(product => {
                        return <CartProduct key={product.id} product={product} setCartItems={setCartItems}/>
                    }
                )
            }
            {cartItems.length !== 0 && <PayButton cartItems={cartItems}/>}
        </div>
    )
}