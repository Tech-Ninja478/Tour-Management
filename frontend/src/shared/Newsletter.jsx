import React from 'react'
import './newsletter.css'

import { Col, Container, Row } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
        <section className="newsletter">
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Subscribe now to get updates about latest tours</h2>

                            <div className="newsletter__input">
                                <input type="email" placeholder='Enter your Email' />
                                <button className="btn newsletter__btn">Subscribe</button>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod sed quis impedit quo illum sint vel fugiat eos explicabo? Nobis tenetur quasi excepturi obcaecati, eos qui commodi, rem repellendus quia laudantium hic fugit expedita.</p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter
