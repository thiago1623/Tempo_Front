import Image1 from '../../assets/images/show1.jpeg'
import '../Shows/popup_styles.css'


export const ShowsRender3 = ({ data }) => {
    let shows = data.map((show) => (show[0]))
    let artists = data.map((artist) => (artist[1]))
    let venue = data.map((venue) => (venue[2]))
    let show = shows.map((sh) => (sh))
    return (
        <div className="showscontainer">
            <div className="showswrapper">
                {show.map((sh, index) => {
                    return (
                        <>
                            <div className="showcard">
                                <div className="cardvisible">
                                    <img src={Image1} alt="tempo"></img>
                                    <div className="showinfo">
                                        <h3 >{sh.name_show}</h3>
                                        <p>Entrada: {sh.price_ticket}.<br></br>{sh.date.slice(0, 11)}</p>
                                        <a href={`#${sh.id}`} className="button-opn-popup">Ver más</a>
                                    </div>
                                </div>
                                <div className="container-all" id={`${sh.id}`}>
                                    <div className="popup">
                                        <div className="hiddenimg">
                                            <img src={Image1} alt="tempo"></img>
                                        </div>
                                        <div className="container-text">
                                            <div className="popup-show-cont">
                                                <h3>{sh.name_show}</h3><br></br>
                                                <div className="description-date">
                                                    <div className="description"><h4>Descripción</h4><p>{sh.description_show}</p></div>
                                                    <div className="date-hour">
                                                        <h4>Fecha</h4>
                                                        <p>{sh.date.slice(0, 11)}</p>
                                                        <h4>Hora</h4>
                                                        <p>{sh.hour}</p>
                                                    </div>
                                                </div>
                                                <p>{venue[index].address}</p>
                                                <div className="description-date">
                                                    <div className="description">
                                                        <h4>Bandas invitadas</h4>
                                                        {
                                                            artists[index].map((artist) => {
                                                                return (
                                                                    <>
                                                                        <div className="date-hour">
                                                                            <p>{artist.artist_name}</p>
                                                                            <p>{artist.genre_artist}</p>
                                                                        </div>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="precio">
                                                <p>{sh.price_ticket}</p>
                                            </div>
                                        </div>
                                        <a href="#" className="btn-close-popup">X</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    );
}
