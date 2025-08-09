import "./Product.css"
import addcart from "../../assets/addcart.svg"

export function capitalize(word) {
    const firstLetter = word.charAt(0)
    const capFirstLetter = firstLetter.toUpperCase()
    const remainLetters = word.slice(1)
    return capFirstLetter + remainLetters
}

export default function Product({ product, setCartItems, cartItems }) {
    const apiUrl = import.meta.env.VITE_API_URL;
    return (
        <div className="product">
            <img src={`${apiUrl}/static/images/${product.image}`} alt="product logo" />
            <h3>{capitalize(product.name)}</h3>
            <h4>$ {product.price.toFixed(2)}</h4>
            <button onClick={() => setCartItems(prev => [...prev, {id: cartItems[cartItems.length - 1] ? cartItems[cartItems.length - 1].id + 1 : 0, ...product}])}>+ Add</button>
        </div>
    )
}