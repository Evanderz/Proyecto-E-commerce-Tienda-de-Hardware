import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <>
            <div className="navbar bg-base-100 drop-shadow-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl ">HARDMANIA</a>

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-rectangle">
                            <a className="normal-case text-x ">Categorias</a>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Motherboards</a></li>
                            <li><a>Microprocesadores</a></li>
                            <li><a>Placas de Video</a></li>
                            <li><a>Memorias RAM</a></li>
                            <li><a>Gabinetes</a></li>
                            <li><a>Refrigeracion</a></li>
                            <li><a>Fuentes</a></li>
                        </ul>

                    </div>

                </div>
                <CartWidget/>
            </div>
        </>
    )
}