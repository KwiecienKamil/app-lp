import logo from "../assets/logo_OT_t.png"
const Navbar = () => {
  return (
    <nav className="flex-between">
      <div>
        <img src={logo} alt="logo Ogarnijto.org" />
      </div>
      <div className="flex">
        <a href="#">XXX</a>
        <a href="#">XDX</a>
        <a href="#">XXD</a>
      </div>
    </nav>
  )
}

export default Navbar
