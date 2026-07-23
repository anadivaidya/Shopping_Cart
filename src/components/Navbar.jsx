import { Link } from "react-router";

export default function Navbar() {
    return(
        <div>
            <div className="flex flex-row justify-around mr-10 ml-10 text-3xl">
                        <Link to="home">Home</Link>
                        <Link to="shop">Shop</Link>
                        <Link to="cart">Cart</Link>
            </div>
            <hr className="m-5 border" />
        </div>
    )
}