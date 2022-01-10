import style from "../styles/Digitalmedia.module.css"



function Digitalmedia() {
    return (
        <div>      
        <div className={style.wrap}>
        <h1>Digital Media</h1>
            <div className={style.media}>
                <div>
                    <div className="card">
                        <img src="/mkt.jpg" className="card-img-top" alt="image of a market" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        </div>
                    </div>
                </div>
                
                <div className="card">
                        <img src="/mkt.jpg" className="card-img-top" alt="image of a market" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        </div>
                    </div>
                
                    <div className="card">
                        <img src="/mkt.jpg" className="card-img-top" alt="image of a market" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        </div>
                    </div>

                <div className="card">
                        <img src="/mkt.jpg" className="card-img-top" alt="image of a market" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        </div>
                    </div>
                    
        </div>
        </div>
        </div>
    )
}

export default Digitalmedia;