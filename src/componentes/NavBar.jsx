import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from "./CartWidget"

const NavBar =()=>{
    return(
        <nav className="nav-container">
            <div className='nav-logo'>
              <a className="nav-link" href="">
                <img src={'../logo-akari-rojo.png'} alt="Logo Akari Store" width={180} />
              </a>
            </div>
            <div className="nav-links">
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Figuras de acción</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Cuadros decorativos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Remeras estampadas</NavDropdown.Item>
              </NavDropdown>
              <a className="nav-link" href="">Envíos</a>
              <a className="nav-link" href="">Contacto</a>
              <CartWidget />
            </div>  
        </nav>
    )
}
export default NavBar