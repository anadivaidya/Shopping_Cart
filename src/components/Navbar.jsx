import { Link } from "react-router";
export default function Navbar() {
    return(
        <div className="w-full max-w-5xl mx-auto px-4 pt-4">
            <div className="flex flex-row items-center justify-around text-xl sm:text-3xl font-medium">
                        <Link to="home" className="hover:opacity-75 transition-opacity">Home</Link>
                        <Link to="shop" className="hover:opacity-75 transition-opacity">Shop</Link>
                        <Link to="cart" className="hover:opacity-75 transition-opacity">Cart</Link>
            </div>
            <hr className="m-5 border" />
        </div>
    )
}