import React from 'react'
import '../styles/home.css'

import { Col, Container, Row } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'

import ServiceList from '../services/ServiceList'
import SearchBar from '../shared/SearchBar'


const Home = () => {
    return <>
        {/* =============== Hero Section  Start =============== */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={"Know Before You Go"} />
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>Travelling Opens the Door to <span className="highlight">Memories</span></h1>
                            Allowing us to explore new places, cultures, and experiences that leave lasting impressions on our hearts and minds. Each journey becomes a collection of unique moments—whether it's the breathtaking view of a distant mountain, the laughter shared with strangers turned friends, or the taste of an unfamiliar dish that instantly transports us back to that special day.
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-4">
                            <video src={heroVideo} alt="" controls />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02} alt="" />
                        </div>
                    </Col>


                    <SearchBar />
                </Row>
            </Container>
        </section>
        {/* =============== Hero Section  End =============== */}
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services__subtitle">Our Services</h5>
                        <h2 className="services__title">Our Best Services</h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>
    </>
}

export default Home
