import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router"

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) return;
    setCart((prev) => [...prev, product])
  }
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !==id));
  }

  return (
    <>
      <Header />
      <Navbar />
      <Outlet context={{cart, addToCart, removeFromCart}}/>
    </>
  )
}