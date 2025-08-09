import "./Header.css"
import ShoppingcartButton from "../ShoppingcartButton/ShoppingcartButton"

export default function Header({ currentPage, setCurrentPage }) {
    return (
        <div className="header">
            <h2 className="shoptitle">Quippl shop</h2>
            <ShoppingcartButton currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}