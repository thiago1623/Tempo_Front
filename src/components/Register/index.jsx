import React, { useState } from 'react';
import "../../styles/login.css"
import Header from '../Headers/header';


const API = process.env.REACT_APP_API


export const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(`${API}/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                'email': email,
                'pwd': password,
            })
        }).then(response => response.json())
            .then(data => {
                if (data.status !== 'Email not found' && data.status !== 'Invalid password') {
                    props.history.push('/profile');
                }
                else
                    setError(data.status);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <>
            <Header></Header>
            <div class="image-container-login">
                <section class="container-login-tempo">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label><strong>Email</strong></label><br />
                            <input
                                onChange={event => setEmail(event.target.value)}
                                value={email}
                                class="inputs-tempo-login" type="email"
                                placeholder="ingresa tu correo" autoFocus />
                        </div>
                        <div>
                            <label><strong>Contraseña</strong></label><br />
                            <input
                                class="inputs-tempo-login"
                                type="password"
                                onChange={event => setPassword(event.target.value)}
                                value={password}
                                placeholder="ingresa tu contraseña" />
                        </div>
                        <div class="button-container-tempo">
                            <button class="boton-login-tempo">
                                Iniciar Sesión
                        </button>
                        </div>
                    </form>
                    <div>
                        <h1 style={{ alignItems: "center", textAlign: "center" }}>{error}</h1>
                    </div>
                </section>
                <div class="footer-login">
                    {/* <h1>soy el footer</h1> */}
                </div>
            </div>
        </>
    );
}
