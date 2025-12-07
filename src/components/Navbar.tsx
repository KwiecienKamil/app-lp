import { useRef } from "react";
import logo from "../assets/logo_OT_t.png"
import "../styles/Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
const navRef = useRef<HTMLElement | null>(null);

const showNavbar = () => {
  navRef.current?.classList.toggle("responsive_nav")
}
  return (
    <header className="flex-between">
      <div>
        <img src={logo} alt="logo Ogarnijto.org" />
      </div>
      <nav ref={navRef} className="flex">
        <a href="#">Strona główna</a>
        <a href="#">Jak używać</a>
        <a href="https://app.ogarnijto.org/?beta=true">Kontakt</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />
      </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar
