import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from "./CartWidget"
import { NavLink } from 'react-router-dom'

const NavBar =()=>{
    return(
        <nav className="nav-container">
            <div className='nav-logo'>
              <a as={NavLink} className="nav-link" to='/'>
                <img src={'../logo-akari-rojo.png'} alt="Logo Akari Store" width={180} />
              </a>
            </div>
            <div className="nav-links">
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to='/category/figuras'>Figuras de acción</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/category/cuadros'>Cuadros decorativos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/category/remeras'>Remeras estampadas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/category/peluches'>Peluches Pokemon</NavDropdown.Item>
              </NavDropdown>
              <a className="nav-link" href="">Envíos</a>
              <a className="nav-link" href="">Contacto</a>
              <CartWidget />
            </div>  
        </nav>
    )
}
export default NavBar