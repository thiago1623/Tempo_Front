import React from 'react'
import tempo04 from '../../assets/static/tempo04.png'
import '../../assets/styles/components/Footer.css'

const Footer = () => {
    return (
    <div className="footer-content">
        <div className="content-all-f">
            <div className="footer-img">
                <img src={tempo04}/>
            </div>
            <div className="footer-tagline">
                <h3>Encuentra Tus Eventos a Tempo</h3>
            </div>
        </div>
    </div>
    )
}

export default Footer;