import React from 'react'

export default function Navbar({ rotas }) {

    return (
        <nav className="navbar">
            <div className="navbar--logo">
                Arthur
            </div>
            <ul className="navbar--menu">
                {
                    rotas.map(el => {
                        let nome = el.split("-").join(" ");
                        let rota = "/" + (el.toLowerCase() != "home" ? el : "");
                        return (
                            <li className="navbar--menu-botao">
                                <a className="navbar--menu-botao-link" href={rota}>{nome}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
