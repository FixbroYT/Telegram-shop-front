import "./CartProduct.css"
import Delete from "../../assets/delete.svg"
import { capitalize } from "../product/product"

export default function CartProduct({ product, setCartItems }) {
    const apiUrl = import.meta.env.VITE_API_URL;

    function deleteSelf() {
        setCartItems(prev => prev.filter(p => p.id !== product.id));
    }

    return (
        <span className="cartProduct">
            <span>
                <img src={`${apiUrl}/static/images/${product.image}`} alt="product logo" />
                <h3>{capitalize(product.name)}</h3>
            </span>
            <p>{product.price.toFixed(2)} $</p>
            <button className="delete" onClick={deleteSelf}><img src={Delete} alt="delete" /></button>
        </span>
    )
}