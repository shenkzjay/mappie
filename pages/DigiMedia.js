import style from "../styles/mktassess.module.css"
import Head from "next/head";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


// SwiperCore.use([Pagination, EffectCoverflow]);
import SwiperCore, { EffectCoverflow,Pagination,Navigation } from 'swiper';
  



function DigiMedia() {
// install Swiper modules

  // install Swiper modules
  SwiperCore.use([EffectCoverflow,Pagination,Navigation]);



    return (
        <div className="section header">
            <Head>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" rel="stylesheet" />
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"></script>

            <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
   <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
           </Head>
            {/* <div className={style.wrap}>
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
            </div> */}

            {/* <section class="section-header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-6">
                            <h1 class="mb-3">Carousel cards title </h1>
                        </div>
                        <div class="col-6 text-right">
                            <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                <i class="fa fa-arrow-left"></i>
                            </a>
                            <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <i class="fa fa-arrow-right"></i>
                            </a>
                        </div>
                        <div class="col-12">
                            <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="carousel">

                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">

                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                                    <div class="card-body">
                                                        <h4 class="card-title">Special title treatment</h4>
                                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698" />
                                                    <div class="card-body">
                                                        <h4 class="card-title">Special title treatment</h4>
                                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" />
                                                    <div class="card-body">
                                                        <h4 class="card-title">Special title treatment</h4>
                                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">

                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4" />
                                                    <div class="card-body">
                                                        <h4 class="card-title">Special title treatment</h4>
                                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840" />
                                                    <div class="card-body">
                                                        <h4 class="card-title">Special title treatment</h4>
                                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e" />
                                                    <div class="card-body">
                                                        <h4 class="card-title">Special title treatment</h4>
                                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">

                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23" />
                                                        <div class="card-body">
                                                            <h4 class="card-title">Special title treatment</h4>
                                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                        </div>

                                    </div>
                                                </div>
                                                <div class="col-md-4 mb-3">
                                                    <div class="card">
                                                        <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129" />
                                                        <div class="card-body">
                                                            <h4 class="card-title">Special title treatment</h4>
                                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 mb-3">
                                                    <div class="card">
                                                        <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6" />
                                                        <div class="card-body">
                                                            <h4 class="card-title">Special title treatment</h4>
                                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
</section> */}







  
                     <div className="title col-6">
                            <h1 class="mb-3">Digital media </h1>
                        </div>
  

             <>
             <Swiper effect={'coverflow'} 
             grabCursor={true}
             centeredSlides={true}
             slidesPerView={'auto'}
             coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
                }}   
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                  }} breakpoints={{
                    "640": {
                      "slidesPerView": 1,
                      
                    },
                    "768": {
                      "slidesPerView": 2,
                      
                    },
                    "1024": {
                      "slidesPerView": 3,
                      
                    }
                  }}
                  navigation={true}
                  className="mySwiper">

                    <SwiperSlide>
                    <div class="card">
                    <img src="mkt.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    
                    </div>
                    </div>
                        
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <div class="card">
                    <img src="mkt.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    
                    </div>
                    </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <div class="card">
                    <img src="mkt.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    
                    </div>
                    </div>
                        
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <div class="card">
                    <img src="mkt.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    
                    </div>
                    </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <div class="card">
                    <img src="mkt.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    
                    </div>
                    </div>
                        
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <div class="card">
                    <img src="mkt.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    
                    </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </>
        
        </div>
    )
}
        
export default DigiMedia;