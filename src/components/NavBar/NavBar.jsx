import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
         <h1>Negro Oscuro</h1>

         <nav>
            <ul>
                <li>Remeras</li>
                <li>Buzos</li>
                <li>Camperas</li>
                <li>Jeans</li>
            </ul>
         </nav>

         <CartWidget/>
    </header>
  )
}

export default NavBar