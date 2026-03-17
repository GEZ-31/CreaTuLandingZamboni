import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container fs-4">
      <div className="nav-logo">
        <NavLink to="/">
          <img
            src={"../logo-akari-rojo.png"}
            alt="Logo Akari Store"
            width={120}
          />
        </NavLink>
      </div>
      <button
        className="navbar-toggler d-lg-none nav-link"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`nav-links ${isOpen ? 'd-block' : 'd-none'} d-lg-flex`}>
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          <NavDropdown.Item as={NavLink} to="/category/figuras">
            Figuras de acción
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={NavLink} to="/category/cuadros">
            Cuadros decorativos
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={NavLink} to="/category/remeras">
            Remeras estampadas
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={NavLink} to="/category/peluches">
            Peluches Pokemon
          </NavDropdown.Item>
        </NavDropdown>
        <NavLink className="nav-link" to="/envios">
          Envíos
        </NavLink>
        <NavLink className="nav-link" to="/contacto">
          Contacto
        </NavLink>
        <CartWidget />
      </div>
    </nav>
  );
};
export default NavBar;
