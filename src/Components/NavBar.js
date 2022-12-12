import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import ItemList from "./ItemList"

export const NavBar = () => {
    return (
        <>
            <div className="navbar bg-base-100 drop-shadow-lg">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl ">HARDMANIA</Link>

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-rectangle">
                            <a className="normal-case text-x ">Categorias</a>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={`/categorias/Motherboard`}>Motherboards</Link></li>
                            <li><Link to={`/categorias/Microprocesador`}>Microprocesadores</Link></li>
                            <li><Link to={`/categorias/Placa_de_Video`}>Placas de Video</Link></li>
                            <li><Link to={`/categorias/RAM`}>Memorias RAM</Link></li>
                            <li><Link to={`/categorias/Gabinete`}>Gabinetes</Link></li>
                            <li><Link to={`/categorias/Refrigeracion`}>Refrigeracion</Link></li>
                            <li><Link to={`/categorias/Fuente`}>Fuentes</Link></li>
                            <li><Link to={`/categorias/Monitores`}>Monitores</Link></li>
                        </ul>

                    </div>

                </div>
                <CartWidget/>
            </div>
        </>
    )
}