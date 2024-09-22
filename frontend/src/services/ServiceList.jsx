import React from 'react';
import { Col } from 'reactstrap';
import ServiceCard from './ServiceCard';

import customizationImg from '../assets/images/customization.png';
import guideImg from '../assets/images/guide.png';
import weatherImg from '../assets/images/weather.png';

const ServiceData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'We help you to calculate the Weather around you',
    },
    {
        imgUrl: guideImg,
        title: 'Provide the Best Guides',
        desc: 'Guides help you to explore the place more and tell you the untold',
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Help to customize your Holiday',
    },
];

const ServiceList = () => {
    return (
        <>
            {ServiceData.map((item, index) => (
                <Col lg="3" key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
};

export default ServiceList;
