import React, { useState } from 'react'
import Header from '../Headers/header';
import "../../assets/styles/components/register.css"


const API = process.env.REACT_APP_API

export const Register = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${API}/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                'names_organizer': name,
                'email': email,
                'pwd': password,
                'confirmPwd': confirmPassword
            })
        }).then(
            function (response) {
                if (response.status === 200)
                    props.history.push('/login')
            }
        ).catch(
            (error) => console.log(error)
        )
    }

    return (
        <>
            <div className="image-container-register">
                <Header></Header>
                <div id="registro" className="registrar">
                    <div className="inner">
                        <div className="rcont">
                            <h2>
                                REGISTRATE
                        </h2>
                            <form onSubmit={handleSubmit} className="form_reg">
                                <ol>
                                    <li>
                                        <label>NOMBRE</label>
                                        <input
                                            type="text"
                                            placeholder="NOMBRE"
                                            onChange={e => setName(e.target.value)}
                                            value={name}
                                            required
                                        />
                                    </li>
                                    <li>
                                        <label>EMAIL</label>
                                        <input
                                            type="text"
                                            placeholder="EMAIL"
                                            onChange={e => setEmail(e.target.value)}
                                            value={email}
                                            required
                                        />
                                    </li>
                                    <li>
                                        <label>CONTRASEÑA</label>
                                        <input
                                            placeholder="CONTRASEÑA"
                                            type="password"
                                            onChange={e => setPassword(e.target.value)}
                                            value={password}
                                            required />
                                    </li>
                                    <li>
                                        <label>CONFIRMAR CONTRASEÑA</label>
                                        <input
                                            type="password"
                                            placeholder="CONFIRMAR CONTRASEÑA"
                                            onChange={e => setConfirmPassword(e.target.value)}
                                            value={confirmPassword}
                                            required />
                                    </li>
                                    <li>
                                        <button type="submit" className="btn-signup">
                                            CREAR CUENTA
                                    </button>
                                    </li>
                                </ol>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}