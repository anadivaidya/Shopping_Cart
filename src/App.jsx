import "./App.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router"

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  )
}