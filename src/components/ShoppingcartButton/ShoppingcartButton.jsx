import shoppingcart from "../../assets/shoppingcart.svg"
import home from "../../assets/home.svg"
import "./ShoppingcartButton.css"

export default function ShoppingcartButton({ currentPage, setCurrentPage }) {
    return (
        <>
            <button className="shoppingcart" onClick={() => setCurrentPage(!currentPage)} ><img src={currentPage ? shoppingcart : home} alt="Shoppingcart" /></button>
        </>
    )
}