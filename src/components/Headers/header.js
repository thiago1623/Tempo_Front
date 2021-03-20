import React from 'react';
import { Link } from "react-router-dom";
import "../../assets/styles/components/header.css";
import logoTempo from "../../assets/static/tempo-05.png";


export default function Header() {
    return (
        <div>
            <header class="header">
                <div class="content-header">
                    <nav>
                        <div class="logo">
                            <Link to="/"><img class="imagen" src={logoTempo}></img></Link>
                            <ul class="ul-header">
                                <li class="li-header">
                                    <Link to="/eventos">EVENTOS</Link>
                                </li>
                                <li class="li-header">
                                    <Link to="/Login">INICIAR SESIÓN</Link>
                                </li>
                                <li class="li-header">
                                    <Link to="/register">REGISTRARSE</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}
