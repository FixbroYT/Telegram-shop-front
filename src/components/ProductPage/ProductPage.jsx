import "./ProductPage.css"
import Product from "../product/product"
import { useEffect, useState } from "react"

export default function ProductPage({ setCartItems, cartItems }) {
    const [ products, setProducts ] = useState([])

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(
        () => {
            async function getProducts() {
                try {
                    const response = await fetch(`${apiUrl}/get_products`)
                    if (!response.ok) {
                        return
                    }
                    const data = await response.json()
                    if (Array.isArray(data)) {
                        setProducts(data)
                    } else {
                        console.error("Invalid data type")
                    }
                } catch (error) {
                    console.error(`Error: ${error}`)
                }
            }
            getProducts()
        }, []
    )

    return (
        <div className="productpage">
            {products.length === 0
            ? <p>No products found</p>
            : products.map(product => (
                <Product
                    key={product.name}
                    product={product}
                    setCartItems={setCartItems}
                    cartItems={cartItems}
                />
                ))
            }
        </div>
        );
}
