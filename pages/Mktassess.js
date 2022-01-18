import style from "../styles/mktassess.module.css"



function Mktassess() {
    return (
        <div>
            <div className={style.wrap}>
                <h1>Market Assessment</h1>
                <div className={style.media}>
                    <div>
                        <div className="card">
                            <div className="card-img-top"><h4>Market Assessment</h4></div>
                            <div className="card-body">
                                <p className="card-text">We provide our client with top-notch insights
                                    into the market intelligence and  .</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img-top"><h4>Market Assessment</h4></div>
                        <div className="card-body">
                            <p className="card-text">We provide our client with top-notch insights
                                into the market intelligence and  </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img-top"><h4>Market Assessment</h4></div>
                        <div className="card-body">
                            <p className="card-text">We provide our client with top-notch insights
                                into the market intelligence and  </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Mktassess;