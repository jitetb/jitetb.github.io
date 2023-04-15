import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Catalog(props) {
    const list_of_partners = props.suppliers.map(
        ({ image, link, title, catalog }) => {
            return (
                <Col key={'catalog' + title} sm={12} md={5} lg={4}>
                    <Card className="m-3">
                        <a href={catalog} target='_blank'><Card.Img src={image} variant="top" alt={title} /></a>
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
        });
    return (
        <Container>
            <h1 className="text-center py-5">Catalogues</h1>
            <Row className="justify-content-center px-lg-5">
                {list_of_partners}
            </Row>
        </Container>
    );
}
export default Catalog;
