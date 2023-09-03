import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useOutletContext } from 'react-router-dom'

function Catalog() {
    let [getSuppliers, getCustomers] = useOutletContext()

    // let ListSuppliers = getSuppliers.map( info => <PartnerCard logo={info.image} link={info.link} title={info.title} catalog={info.catalog} /> );
    return (
        <Container>
            <h1 className="text-center py-5">Catalogues</h1>
            <Row className="justify-content-center px-lg-5">
                {getSuppliers.map( info => <PartnerCard key={'catalog-' + info.title} logo={info.image} link={info.link} title={info.title} catalog={info.catalog} /> )}
            </Row>
        </Container>
    );
}

export default Catalog;

function PartnerCard({logo, link, title, catalog}) {
    return (
        <Col key={'catalog' + title} sm={12} md={5} lg={4}>
            <Card className="m-3">
                <a href={catalog} target='_blank'><Card.Img src={logo} variant="top" alt={title} /></a>
                <Card.Body>
                    <Card.Title>&nbsp;{title}</Card.Title>
                    <Button variant="outline-warning" target="_blank" href={link}
                        style={{ marginTop: "1em", width: "100%" }}>Visit Site</Button>
                    <Button variant="warning" target="_blank" href={catalog}
                        style={{ marginTop: "1em", width: "100%" }}>View Catalogue</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}