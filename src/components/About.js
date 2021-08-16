import React from 'react';
import ContactForm from './ContactForm/ContactForm';

export default function About() {
    return (
        <section>
            <div className='container fluid' >
                <div className='row align-items-center' style={{height:'50vh'}}>
                    <div className='col'><p className='fw-bold' style={{color:'#3A7CA5', fontSize:'4em'}}>About<span className='fst-italic' style={{color:'#16425B'}}>Us</span></p></div>
                    <div className='col'><p style={{color:'#3A7CA5', fontSize:'1.5em'}}>"We are a group of full stack software developers based out of Toronto Canada. Our mission to create this resume building app was realized as we felt that this niche part of the industry lacked a reliable streamlined tool to make it easier to for both experienced and aspiring tech/it professionals to have a fine tuned resume."</p></div>
                </div>
            </div>

            <div style={{backgroundColor:'#16425B', width:'100vw', height:'92vh'}}>
                <div className='container'>
                    <div className='row align-items-center' style={{height:'40vh'}}>
                        {/* -----CONTACT---- */}
                        <div className='col' style={{marginTop:'12vh'}}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}