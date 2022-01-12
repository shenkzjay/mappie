import style from "../styles/Home.module.css"
import Layout from "../components/Layout"
import Link from "next/link";
import Head from "next/head"
import dynamic from "next/dynamic"





//Home function
function Home() {
    const MapDisplay = dynamic(() => import("../components/MapDisplay"), {
        loading: () => <p>Loading...</p>,
        ssr: false
      });
      
    return (
        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
            </Head>
            <Layout>
            {/* overall wrapper */}
                <div className={style.wrap}>    
                    <div className={style.leftbar}>
                        <div>
                            <div className={style.leftbarcard_top}>
                                <p>
                                    We stand as a Blockchain and Crypto authority,
                                    and one of Africa&apos;s most influential Blockchain
                                    and Crypto media and consultancy firm,
                                    based in Nairobi, Kenya. We are the go-to entry
                                     point of all matters blockchain in Africa for
                                    both our audiences and clients.
                            </p>
                            </div>
                        </div>


                        <div>
                            {/* sidebar information stats display */}
                            <div className={style.leftcard_bottom}>
                                <br />
                                <label>Crypto Stats</label><Link href="/">
                                <div className={style.leftcard_cards}>
                                    <div>Blockchain Association</div>
                                    <div className={style.spotter}>
                                    {/* <div className={style.leftcardbox}>40</div> */}
                                    <div><img src="/arrow.svg" alt="decking" ></img></div>
                                    </div>
                                    </div></Link>

                                    <Link href="/">
                                    <div className={style.leftcard_cards}>
                                    <div>Projects</div>
                                    <div className={style.spotter}>
                                    {/* <div className={style.leftcardbox}>12</div> */}
                                    <div><img src="/arrow.svg" alt="decking" ></img></div>
                                    </div>
                                    </div></Link>
                                    
                                    <Link href="/">
                                    <div className={style.leftcard_cards}>
                                    <div>Defi wallet stats</div>
                                    <div className={style.spotter}>
                                    {/* <div className={style.leftcardbox}>400,324</div> */}
                                    <div><img src="/arrow.svg" alt="decking"></img></div>
                                    </div>
                                    </div></Link>
                                    
                                    <Link href="/">
                                    <div className={style.leftcard_cards}>
                                    <div>P2P Stats</div>
                                    <div className={style.spotter}>
                                    {/* <div className={style.leftcardbox}>230,234.34</div> */}
                                    <div><img src="/arrow.svg" alt="decking" ></img></div>
                                    </div>
                                    </div></Link>

                                    <Link href="/">
                                    <div className={style.leftcard_cards}>
                                    <div>Crypto events</div>
                                    <div className={style.spotter}>
                                    {/* <div className={style.leftcardbox}>2</div> */}
                                    <div><img src="/arrow.svg" alt="decking" ></img></div>
                                    </div>
                                    </div></Link>

                                    <Link href="/">
                                    <div className={style.leftcard_cards}>
                                    <div>Country notable crypto report</div>
                                    <div className={style.spotter}>
                                    {/* <div className={style.leftcardbox}>9</div> */}
                                    <div><img src="/arrow.svg" alt="decking" ></img></div>
                                    </div>
                                    </div></Link>
                               
                               

                            </div>
                        </div>
                    </div>
                    {/* map area */}
                    <div className={style.rightbar}>
                        <div>
                           <MapDisplay />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )

}

export default Home;