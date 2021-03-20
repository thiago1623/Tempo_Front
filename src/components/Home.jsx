import React from 'react'
import useFetch from "./Hooks/Hooks"
import Loading from "./Helpers/Loading"
import Error from "./Helpers/Error"
import Header from "./Headers/header";
import Footer from "./Footer/index.js"
import { ShowsRender2 } from "./ShowsHome"
import '../assets/styles/components/Home.css'
import tempo04 from '../assets/static/tempo04.png'


const API = process.env.REACT_APP_API

export default function Home() {
    const { data, loading, error } = useFetch(`${API}/`)
    if (loading) {
        <Loading></Loading>
    }
    if (error) {
        <Error></Error>
    }
    if (data) {
        return (
            <div className="all-content-img">
                    <div className="dark-img">
                        <Header></Header>
                        <main>
                            <div className="banner-all-home">
                                <div className="tagline">
                                    <div className="logo-tempo-banner">
                                        <img src={tempo04} alt=""/>
                                    </div>
                                    <h1>Encuentra eventos a Tempo.</h1>
                                </div>
                                <div className="filter">
                                    <form action="/shows" className="form-filter">
                                        <p>Buscar ahora:</p>
                                        <div className="selects">
                                            <select name="" id="">
                                                <option value="">Ciudad</option>
                                                <option value="Bogotá">Bogotá</option>
                                                <option value="Medellin">Medellín</option>
                                                <option value="Cali">Cali</option>
                                            </select>
                                            <select  name="" id="">
                                                <option value="">Rango de fecha</option>
                                                <option value="">Hoy</option>
                                                <option value="">Próximos 7 días</option>
                                                <option value="">Próximos 15 días</option>
                                                <option value="">Próximo mes</option>
                                                <option value="">Próximos 3 meces</option>
                                                <option value="">Próximos 6 meces</option>
                                            </select>
                                            <select name="" id="">
                                                <option value="">Genero</option>
                                                <option value="">Pop</option>
                                                <option value="">Rock</option>
                                                <option value="">Heavy Metal</option>
                                                <option value="">Jazz</option>
                                                <option value="">Reggae</option>
                                                <option value="">Punk</option>
                                                <option value="">Electro</option>
                                            </select>
                                        </div>
                                    </form>
                                    <div className="content-inp-form">
                                        <input type="submit" value="Filtrar"/>
                                    </div>
                                </div>
                            </div>
                            <section className="parrallax" id="section1">
                            </section>
                            <div className="cont-shows-mouth">
                                <div>
                                    <div className="container-cards-home">
                                        <ShowsRender2 data={data}></ShowsRender2>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <Footer></Footer>
                    </div>
                </div>
        )
    }
}
