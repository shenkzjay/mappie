import Layout from "../components/Layout";
import Head from "next/head"
import style from "../styles/About.module.css"


function About() {
    return (
        <div>
            <div className={style.bigwrap}>
                <Layout>
                    <div className={style.title}><h1>About us</h1></div>
                    {/* who we are page */}
                    <div className={style.wrapgod}>
                        <div className={style.wrap}>
                            <div className={style.wrapcard}>
                                <img src="/who we are.png" alt="white #d ball with shadow" width="230px" height="200px" />
                            </div>
                            <div className={style.text}>
                                <h1>Who we are</h1>
                                <p>
                                    We are Africa&apos;s Largest and Most Influential Blockchain and Crypto
                            Media, Marketing and Advisory firm. BitKE is a leading integrated
                            marketing and PR outfit providing solutions for your product,
                            service, and events around finance, crypto, and the blockchain
                            ecosystem in Kenya and the entire Africa. We have a growing
                            dedicated audience that is excited and equally curious about
                            Africa&apos;s digital revolution especially around the blockchain and
                            crypto space, and the vast opportunities and potentials embedded
                            upon the mobile money.
                                    <br />
                                    <br />
                                    Additionally, we have a network of African crypto and blockchain
                                    influencers, media networks, and communities across Africa enabling
                                    us to reach across any part of the continent.
                                 </p>
                            </div>
                        </div>


                        {/* our story page */}
                        <div className={style.wrap}>
                            <div className={style.wrapcard}>
                                <img src="/our story.png" alt="white #d ball with shadow" width="230px" height="200px" />
                            </div>
                            <div className={style.text}>
                                <h1>Our Story</h1>
                                <p>
                                    BitKE was founded on the belief that blockchain is the foundation
                                    of the third generation internet, and that cryptocurrencies will
                                    power this new economy. We are one of the earliest online publications
                                    in the blockchain and crypto space in Africa. As our audience and
                                    engagement grew over time, it became apparent that Africa is excited
                                    about decentralized technology and the potential that it promises for
                                    the continent. We also realized that there was scanty information and
                                    little or no documentation on Africa. Since then, there has been
                                    unprecedented growth in the space and BitcoinKE has been providing
                                    timely coverage and analysis of the trends to our audiences across
                                    Africa and the rest of the world. We have evolved to offer consultancy
                                    services tackling market dynamics including finance and tech entities.
                              </p>
                            </div>
                        </div>

                        {/* our value page */}
                        <div className={style.wraprow}>
                            {/* <div className={style.wrapcard}>
                            <img src="/3d ball.jpg" alt="white #d ball with shadow" width="330px" height="300px" />
                            </div> */}
                            <div className={style.textrow}>
                                <h1>Our Value</h1>
                                <p>
                                    We thrive in securing the TRUST we have in our vast audiences;<br />
                                    We are PASSIONATE about fulfilling our desire to TRANSFORM our continent;<br />
                                    And we serve with INTEGRITY.
                              </p>
                            </div>
                        </div>


                        {/* our why page */}
                        <div className={style.wrap}>
                            <div className={style.wrapcard}>
                                <img src="/our why.png" alt="white #d ball with shadow" width="230px" height="200px" />
                            </div>
                            <div className={style.text}>
                                <h1>Our why</h1>
                                <p>
                                    60% of Africa’s population was under the age of 25 in 2019.
                                    Africans have been successfully adopting leapfrogging technologies
                                    and solutions, including telecommunications, blockchain and crypto,
                                    characterizing us among the best early adopters in the world.
                                    Internet penetration rate on the continent is still low with
                                    Africa at 39.3%, against the world’s 60%. Seychelles and Kenya
                                    lead at 71% and 83%. Africa has seen a great increase in the usage
                                    of Internet since 2000. This could be because of the availability
                                    of more affordable smartphones as well as cheap mobile data plans.
                                    It is estimated that less than 5% of Africa’s population is actively
                                    involved in the blockchain and crypto space. However, it's growing at
                                    a rapid rate, coupled with a high bandwidth internet penetration that
                                    is averaging at 40%. There’s a huge gap that requires unique bridging
                                    approaches in order to demystify industry and market readiness, while
                                    unlocking sustainable solutions.
                              </p>
                            </div>
                        </div>

                        {/* our why page */}
                        <div className={style.wrapconnect}>
                            <div className={style.connect}>
                                <h1>We connect you</h1>
                                <p>For organizations looking to enter the African Blockchain
                                    and Crypto space, we are your ideal partner to help
                                    you get started, and succeed in this dynamic and unique place.
                                    We understand the African landscape and we have the experience
                                    needed to make your organization meet its objectives in advancing
                                    your Blockchain and Crypto agenda on the continent.
                                    </p>
                            </div>

                            <div className={style.wrapcardclip}>
                                <div className={style.wrapcardconnect}>
                                    <h4>We are active</h4>
                                    <p>We have an itinerary of activities such as weekly trainings
                                        (online and offline), webinars, meetups, interviews, and
                                        a strong social media presence. We are also well known for
                                        featuring prominent guest speakers to our events.
                            </p>
                                </div>
                                <div className={style.textconnect}>
                                    <h4>Our Approach</h4>
                                    <p>
                                        Our services are designed via integrated approaches.
                                        We feel that used together and in conjunction, they
                                        can create the most value for both our audiences and
                                        your business.
                              </p>
                                </div>
                            </div>
                        </div>


                        {/* what we can do for you  page */}
                        <div className={style.wrapserviceall}>
                        <div className={style.wrapservice}>
                            <div className={style.service}>
                                <h1>What we can do for you</h1>
                                <p>We have a wide array of services to offer both our audiences and clients.
                                    </p>
                                <br />

                                <h4>For our Clients</h4>
                                <p>We pride ourselves in our flexibility and can certainly
                                    tailor a package specific to your needs. <br/>Services offered
                                    to our clients boil down into one of these 3 general categories:
                                    </p>
                            </div>
                            <div className={style.servicetxt}>
                                <div className={style.wrapcard}>
                                    <img src="/Market entry.png" alt="white #d ball with shadow" width="230px" height="200px" />
                                </div>
                                <div className={style.text}>
                                    <h4>Market Entry/Assessment</h4>
                                    <p>

                                        We provide our clients with top-notch insights into the market
                                        intelligence and relevant use cases across the ecosystem .
                                        We have been part of enabling market entry to some of the
                                        top tier clients in the industry.
                              </p>
                                </div>
                            </div>
                            
                            <br />
                            <br />                            
                            <br />                            

                            <div className={style.servicetxt}>
                                <div className={style.wrapcard}>
                                    <img src="/Training.png" alt="white #d ball with shadow" width="230px" height="200px" />
                                </div>
                                <div className={style.text}>
                                    <h4> Training/Education for Consumer Awareness and Market Readines</h4>
                                    <p>
                                        Our unique strategies and approaches on consumer awareness and education continue
                                        to play a very instrumental role in unlocking Africa’s blockchain potential.
                                   </p>
                                    <p>

                                        We provide:
                                         <ul className="list-group list-group-flush">
                                            <li className="list-group-item">A platform for budding developers, traders and investors to nurture their skills and talents.</li>
                                            <li className="list-group-item">Opportunities for potential partners to collaborate with
                                                 BitKE in equipping this platform with the necessary support required.</li>
                                            <li className="list-group-item">Tailor-made solutions to various target audiences and/or as
                                                part of your market entry planning. Some of them include product launches and activations.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <br/>
                            <div className={style.servicetxt}>
                                <div className={style.wrapcard}>
                                    <img src="/Consumer eng.png" alt="white #d ball with shadow" width="230px" height="200px" />
                                </div>
                                <div className={style.text}>
                                    <h4>Consumer engagement</h4>
                                    
                                    
                                    <p>At BitKe, we prioritize public engagement across the board. We leverage on this by offering our clients:</p>
                                    <ul className="list-group list-group-flush">
                                   <li className="list-group-item"> Featured Posts;</li>
                                    <li className="list-group-item">Email Newsletters Sponsored Content;</li>
                                    <li className="list-group-item">Community management;</li>
                                    <li className="list-group-item">Website Banners;</li>
                                    <li className="list-group-item">Social Media Promotions and Mentions;</li>
                                    <li className="list-group-item">Video Promos;</li>
                                    <li className="list-group-item">Events Organizing and Management;</li>
                                    <li className="list-group-item">Talent and influencer engagement,</li>
                                    <li className="list-group-item">Multicultural outreach and Content creation and distribution across all platforms and channels to earn attention for your brand/product.</li>
                                    </ul>
                              
                                </div>
                            </div>
                        </div>
                        </div>


                            {/* FOR OUR AUDIENCES */}
                            <br />
                            <br />
                            <div className={style.wrapserviceall}>
                             <div className={style.wrapservice}>
                            <div className={style.service}>

                                <h4>For our Audiences</h4>
                                <p>We offer Cryptocurrency Education</p>
                            </div>
                            <div className={style.servicetxt}>
                                <div className={style.wrapcard}>
                                    <img src="/audiences.png" alt="white #d ball with shadow" width="230px" height="200px" />
                                </div>
                                <div className={style.text}>
                                    <p>

                                       For many people in this landscape, their first interaction
                                       with blockchain/cryptocurrency begins with BitKE and its community.
                                       We offer regular free trainings on relevant topics.
                                       Audiences have free access to our past and future webinars
                                       and online events.
                                       </p>
                                    
                                           <ul className="list-group list-group-flush">
                                       <li className="list-group-item">Starting out? We know that it is often very difficult to navigate and start your own investments effectively.
                                        Following many requests, we have highlighted for you where to begin:</li>
                                        <li className="list-group-item">What is a cryptocurrency?</li>
                                        <li className="list-group-item">Join the community for further interaction with other crypto enthusiasts</li>
                                        </ul>
                                       
                                </div>
                            </div>
                            </div>
                            </div>

                            {/* Out team page */}
                            <div className={style.wrapteam}>
                            <div className={style.wrapcard}>
                                <img src="/team.png" alt="white #d ball with shadow" width="230px" height="200px" />
                            </div>
                            <div className={style.text}>
                                <h1>Our Team</h1>
                                <p>
                                The BitKE team comprises versatile individuals from several fields and experiences.
                                We have a solid technical foundation of blockchain fundamentals, blockchain development,
                                and crypto trading. Our team also comprises videographer, writers, business development
                                and marketing skillsets.
                              </p>
                            </div>
                        </div>


                        {/* who we work with */}
                        <div className={style.wrapteam}>
                            <div className={style.wrapcard}>
                                <img src="/who we work with.png" alt="white #d ball with shadow" width="230px" height="200px" />
                            </div>
                            <div className={style.text}>
                                <h1>Who we work with</h1>
                                
                                    <ul className="list-group list-group-flush">
                                We work with a span of organizations and individuals to deliver value including, but not limited, to:
                                <li className="list-group-item">Crypto exchanges and platforms</li>
                                <li className="list-group-item">Media organizations</li>
                                <li className="list-group-item">Blockchain startups</li>
                                <li className="list-group-item">Government and Non-profits</li>
                                <li className="list-group-item">Private institutions</li>
                                <li className="list-group-item">Blockchain and crypto influencers</li>
                                <li className="list-group-item">Blockchain and crypto stakeholders</li>
                                <li className="list-group-item">Fintechs</li>
                                <li className="list-group-item">Crypto enthusiasts and newbies</li>
                                </ul>
                              
                            </div>
                        </div>

                        


                    </div>
                </Layout>
            </div>
        </div>
    )
}

export default About;