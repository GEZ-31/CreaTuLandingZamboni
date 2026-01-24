import CartWidget from "./CartWidget"

const NavBar =()=>{
    return(
        <nav className="nav-container">
            <a className="nav-link" href="">
                <img src={'../logo-akari-rojo.png'} alt="Logo Akari Store" width={180} />
            </a>
           {/* Lo dejo así por ahora, despues lo quiero hacer un desplegable que se llame categorías 
           y dentro tenga a figuras, cuadros y remeras */}
            <a className="nav-link" href="">Figuras</a>
            <a className="nav-link" href="">Cuadros</a>
            <a className="nav-link" href="">Remeras</a>
            <a className="nav-link" href="">Envíos</a>
            <a className="nav-link" href="">Contacto</a>
            <CartWidget />
        </nav>
    )
}
export default NavBar