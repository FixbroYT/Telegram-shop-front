import "./SuccessPage.css"
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
    const navigate = useNavigate();

    function goHome() {
        navigate("/");
    }

    return (
        <div className="successPage">
            <h2>Your purchase was successful!<br />Thank you for shopping with us.</h2>
            <button onClick={goHome}>Go to main page</button>
        </div>
    )
}