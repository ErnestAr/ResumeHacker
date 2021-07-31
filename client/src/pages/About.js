import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';

export default function About() {
    return (
        <section>
            <div className='container fluid' >
                <div className='row align-items-center' style={{height:'50vh'}}>
                    <div className='col'><p className='fw-bold' style={{color:'#3A7CA5', fontSize:'4em'}}>About <span className='fst-italic' style={{color:'#16425B'}}>Us</span></p></div>
                    <div className='col'><p style={{color:'#3A7CA5', fontSize:'1.5em'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></div>
                </div>
            </div>

            <div style={{backgroundColor:'#16425B', width:'100vw', height:'85vh'}}>
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