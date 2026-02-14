import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from "./CartWidget"
import { NavLink } from 'react-router-dom'

const NavBar =()=>{
    return(
        <nav className="nav-container fs-3">
            <div className='nav-logo'>
              <NavLink  to='/'>
                <img src={'../logo-akari-rojo.png'} alt="Logo Akari Store" width={180} />
              </NavLink>
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
              <NavLink className="nav-link" to="/">Envíos</NavLink>
              <NavLink className="nav-link" to="/">Contacto</NavLink>
              <CartWidget/>
            </div>  
        </nav>
    )
}
export default NavBar