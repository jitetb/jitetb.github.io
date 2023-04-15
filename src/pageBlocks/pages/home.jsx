import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './home.css';
function Home(props) {

    const list_of_suppliers = props.suppliers.map(
        ({ image, link, title }, idx) => {
            return (
                <a key={'home-suppliers' + title + idx} href={link} target="blank" style={{ marginRight: "3em" }}>
                    <img src={image} loading="lazy" alt={title} style={{ width: "16em" }} />
                </a>
            );
        }
    );
    let suppliers_count = props.suppliers.length / 2;
    const list_of_customers = props.customers.map(
        ({ image, link, title }, idx) => {
            return (
                <a key={'home-customers' + title + idx} href={link} target="blank" style={{ marginRight: "3em" }}>
                    <img src={image} loading="lazy" alt={title} style={{ height: "6em" }} />
                </a>
            );
        }
    );

    const suppliers_animation = {
        "--suppliersCount" : suppliers_count,
        whiteSpace: "nowrap",
        animation: "suppliers-animation " + (suppliers_count * 3) + "s linear 1s infinite"
    };
    const customers_animation = {
        whiteSpace: "nowrap",
        animation: "customers-animation " + 15 + "s linear 1s infinite"
    };
    const animation_style = {
        overflow: "hidden",
    };
    return (<>
        <Container fluid style={{ height: "inherit" }}>
            <Row className="justify-content-center" style={{ backgroundColor: "#D7E1E1", height: "50%", minHeight: "calc(380px / 2)" }}>
                <p className="h1 text-center pt-5">Our Principals</p>
                <Col sm={12} md={8} style={animation_style}>
                    <Container style={suppliers_animation}>
                        {list_of_suppliers}
                    </Container>
                </Col>
            </Row>
            <Row className="justify-content-center" style={{ backgroundColor: "#E4DCC6", height: "50%", minHeight: "calc(380px / 2)" }}>
                <p className="h1 text-center pt-5">Our Clients</p>
                <Col sm={12} md={8} style={animation_style}>
                    <Container style={customers_animation}>
                        {list_of_customers}
                    </Container>
                </Col>
            </Row>
        </Container>
    </>);
}
export default Home;
