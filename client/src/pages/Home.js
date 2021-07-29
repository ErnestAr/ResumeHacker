import { Swiper, SwiperSlide} from 'swiper/react';

//Import Swiper Style
import 'swiper/swiper.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


export default function Homepage() {
    return(
        <Container style={{height:'45em'}}>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <Row className='py-4'>
                        <Col className='d-flex align-items-center'>
                            <p style={{color:'#3A7CA5', fontWeight:'bold', fontSize:'4em'}}> Resume<span style={{fontStyle:'italic', color:'#16425B'}}>Hacker</span> </p>
                            <br></br>
                            <h3 style={{fontSize:'1.5em', color:'#3A7CA5', fontWeight:'bold', fontStyle:'italic'}}>Resume building application catered to software developers and IT personal for the tech industry.</h3>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <Image src='/resumepic.jpg' fluid />
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </Container>
        
    )
}

