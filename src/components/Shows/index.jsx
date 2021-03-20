import React from 'react'
import useFetch from "../Hooks/Hooks"
import Loading from "../Helpers/Loading"
import Error from "../Helpers/Error"
import Header from '../Headers/header';
import '../../assets/styles/components/Profile.css'
import { ShowsRender } from "./showcards"
import '../../assets/styles/components/Shows.css'
import Footer from '../Footer/index'

const API = process.env.REACT_APP_API;

export const Shows = () => {
    const { data, loading, error } = useFetch(`${API}/shows`)
    if (loading) {
        return <Loading />
    }
    if (error)
        return <Error />
    if (data) {
        return (
            <div className="wraper-img">
                <div className="dark-wrapper">
                    <div className="mini-content">
                        <Header></Header>
                        <div className="content-head">
                            <div className="content-of-head">
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
                                            <select name="" id="">
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
                        </div>
                        <div className="content-body">
                            <div className="content-of-body">
                                <div className="content-card">
                                    <ShowsRender data={data} ></ShowsRender>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}
