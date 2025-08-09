import { useNavigate } from "react-router-dom";

export default function FailPage() {
    const navigate = useNavigate();

    function goHome() {
        navigate("/");
    }

    return (
        <div className="successPage">
            <h2>For some reason, the payment failed (<br />Please try again later or contact support.</h2>
            <button onClick={goHome}>Go to main page</button>
        </div>
    )
}