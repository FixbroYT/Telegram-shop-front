import "./PayButton.css"

export default function PayButton({ cartItems }) {
    let totalAmount = 0

    cartItems.map((product) => {
        totalAmount += product.price
    })

    totalAmount = totalAmount.toFixed(2)

    const apiUrl = import.meta.env.VITE_API_URL;

    async function pay() {
        const response = await fetch(
            `${apiUrl}/create-checkout-session`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({"products": cartItems.map(product => {
                    return product.name
                })})
        })
        const data = await response.json()

        window.location.href = data.url
    }

    return (
        <button className="payButton" onClick={pay}>
            Pay {totalAmount}$
        </button>
    )
}