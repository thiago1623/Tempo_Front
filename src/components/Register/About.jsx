import React from 'react'
import Footer from '../Footer/index';

import { ComponentFooter, ContainerHeader1 } from './LoginStyled'
import { Navbar } from "./Navbar";


export const About = () => (
    <div className="container-fluid">
        <div className="container-fluid p-4">
            <Navbar />
        </div>
        <div className="container">
            <h1>Acerca</h1>
            <p>
                Tempo fue diseñada pensando en la necesidad de encontrar shows en la ciudad
                y también ofrecer un lugar donde los organizadores de eventos o dueños de establecimientos
                puedan subir sus shows; y los usuarios interesados en estos shows, desde la aplicación logren verlos
                desde cualquier lugar.
            </p>
        </div>
        <ComponentFooter><Footer></Footer></ComponentFooter>
    </div>
)