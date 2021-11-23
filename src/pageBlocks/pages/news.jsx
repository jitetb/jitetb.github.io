import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const news = [
    {
    "heading": "Elevator Analysis and Monitoring Tester",
    "image": "ea7.jpg",
    "title": "Elevator Analytics - EA7 - Qameleon Technology",
    "body": <>Elevator Analyics&trade; is a new elevator analysis and monitoring tools by Qameleon. Building upon the company&apos;s existing technology, the product looks for meaningful patterns in an elevator&apos;s operation and is promoted as workable with any elevator, regardless of age. The <b>EA7 Elevator Analyzer</b> was designed with input from inspectors, consultants and mechanics. Working with your laptop, it provides real-time information about an elevator&apos;s operation, creates a permanent record of every trip and automatically generates reports. It can be setup in minutes inside the car and does not interfere with the elevator&apos;s operation. Uses include inspection, troubleshooting, load testing, pre-modernization evaluation and traffic-analysis enhancement.</>
    },
    {
     "heading": "Installational Mannual: Basic field practices for installation of elevator and escalator equipment",
     "image": "nemi.png",
     "title": "Installational Mannual: Basic field practices for installation of elevator and escalator equipment",
     "body": <>Grab your copy of the latest edition of Installation Manual at <a href="https://www.elevatorbooks.com/">Elevator Books</a>. We do not own this manual. For furthur query, contact <a href="https://www.elevatorworld.com/">Elevator World</a>. To read the older version <a href="https://drive.google.com/file/d/1-mtrv-OVJ7pT1RIXaJ8PYfoPLA5eQSwb/view?usp=sharing">Click here</a></>
     }
];

const blog = news.map(
    ({ heading, image, title, body }) => {
        const image_object = require("./news_images/" + image);
        return (
        <Row key={title + Math.floor(Math.random() * 100)} className="pb-5 justify-content-center">
            <Col xs={8} sm={3} className="pb-3">
                <img src={image_object} alt={title} style={{ width: "90%" }} />
            </Col>
            <Col sm={10} lg={8}>
                <h3>{heading}</h3>
                {body}
            </Col>
        </Row>
        );
    }
);
function News(){
    return (
        <Container>
            <h1 className="text-center py-5">News</h1>
            { blog }
        </Container>
    );
}
export default News;
