// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Auth from '../utils/auth';
import '../App.css'



import { Swiper, SwiperSlide} from 'swiper/react';

//Import Swiper Style
import 'swiper/swiper.min.css';
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Navigation
  } from 'swiper/core';

SwiperCore.use([Navigation]);



export default function Homepage() {
    return(
            <Swiper navigation={true} className="mySwiper">

                {/* MAIN LANDING PAGE SLIDE 1:--------  APPLICATION HEADING AND BRIEF DESCRIPTION */}
                <SwiperSlide>
                    <section className='d-flex'>
                        <div  className='col d-flex  flex-column justify-content-center' style={{marginLeft:'5vw'}}>
                            <p style={{color:'#3A7CA5', fontWeight:'bold', fontSize:'4em'}}> Resume<span style={{fontStyle:'italic', color:'#16425B'}}>Hacker</span> </p>
                            <br></br>
                            <p style={{fontSize:'1.5em', color:'#3A7CA5', fontWeight:'bold', fontStyle:'italic'}}>Resume building application catered to software developers and IT personal for the tech industry.</p>
                            <div>
                            {Auth.loggedIn() ? (
                                
                                <a href='/Dashboard'><Button variant="info" size="lg">Get Started</Button></a>
                                ) : (
                                    <a href='/LoginSignUp'><Button variant="info" size="lg">Get Started</Button></a>
                                )}
                            </div>
                        </div>
                        <div  className='col d-flex  justify-content-center'>
                            <Image src='/resumepic.jpg'  style={{height:'80vh', width:'37vw'}} fluid />
                        </div>
                    </section>
                </SwiperSlide>

                {/* SLIDE 2:-------- RESOURCES FOR TOP BOOTCAMP PROGRAM CERTIFICATES */}
                <SwiperSlide>
                    <section className='container d-flex flex-column my-5 py-5'>
                        <h1 style={{color:'#3A7CA5', fontWeight:'bold'}}>Need to strengthen <span style={{fontStyle:'italic', color:'#16425B'}}>Resume?</span></h1>
                        <h3 style={{color:'#3A7CA5'}}>Join top Developer Programs from IronHack, App Academy and General Assembly and more!</h3>
                        <h4 style={{color:'#3A7CA5'}}>Get Certificates in Web Devleopment, Fintech, Data Analytics, UI/UX, Cyber Security, Machine Learning.</h4>
                        <div className="row justify-content-around">
                            <div className="col-md-4 col-sm-4 "><img className='resource-images'src='/Ironhack.PNG' style={{height:'25.5vh'}}></img> </div>
                            <div className="col-md-4 col-sm-4 "><img className='resource-images'src='/appAcademy.PNG'style={{height:'25.5vh'}}></img></div>
                            <div className="col-md-4 col-sm-4 "><img className='resource-images'src='/GeneralAssembly.PNG'style={{height:'25.5vh'}}></img></div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-4"><a href='https://www.ironhack.com/en'><Button variant="info" size="lg">Learn More</Button></a></div>
                            <div className="col-4"><a href='https://www.appacademy.io/'><Button variant="info" size="lg">Learn More</Button></a></div>
                            <div className="col-4"><a href='https://generalassemb.ly/'><Button variant="info" size="lg">Learn More</Button></a></div>
                        </div>
                    </section>
                </SwiperSlide>
                    
                {/* SLIDE 3:-------- RESOURCES FOR IMPROVING TECH PROGRAMMING SKILLS */}
                <SwiperSlide>
                    <section className='container d-flex flex-column my-5 py-5'>
                        <h1 style={{color:'#3A7CA5', fontWeight:'bold'}}>Need to polish those programming <span style={{fontStyle:'italic', color:'#16425B'}}>Skills?</span></h1>
                        <h3 style={{color:'#3A7CA5'}}>Sign up at top platforms to solve algorithmic challenges at LeetCode, TopCoder, HackerRank and more!</h3>
                        <h4 style={{color:'#3A7CA5'}}>Improve your profficiency in Algorithms, Python, Datbases, AI, DataStructures, Regex, etc</h4>
                        <div className="row justify-content-around">
                            <div className="col-md-4 col-sm-4 "><img className='resource-images'src='/topCoder.PNG' style={{height:'25.5vh'}}></img> </div>
                            <div className="col-md-4 col-sm-4 "><img className='resource-images'src='/HackerRank.PNG'style={{height:'25.5vh'}}></img></div>
                            <div className="col-md-4 col-sm-4 "><img className='resource-images'src='/LeedCode.PNG'style={{height:'25.5vh'}}></img></div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-4"><a href='https://www.topcoder.com/'><Button variant="info" size="lg">Learn More</Button></a></div>
                            <div className="col-4"><a href='https://www.hackerrank.com/'><Button variant="info" size="lg">Learn More</Button></a></div>
                            <div className="col-4"><a href='https://leetcode.com/'><Button variant="info" size="lg">Learn More</Button></a></div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        
        
    )
}

