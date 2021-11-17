import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Catalog({suppliers}){
		const list_of_partners = suppliers.map(
		({ image, link, title, catalog }) => {
            const file_link = "https://drive.google.com/file/d/" + catalog + "/view?usp=sharing";
            return (
                <Col sm={12} md={5}>
                    <Card className="m-3">
                        <a href={link}><Card.Img src={image} variant="top" alt={title} /></a>
                        <Card.Body>
                            <Card.Title>&nbsp;{title}</Card.Title>
                            <Button variant="outline-warning" target="_blank" href={file_link}>Download</Button>
                        </Card.Body>
                    </Card>
                </Col>
            );
		});
    return (
        <Container fluid style={{backgroundColor: "darkturquoise"}}>
            <Container className="py-3">
                <h1 className="text-white text-center">Catalogues</h1>
                <Row className="justify-content-center">
                {list_of_partners}
                </Row>
            </Container>
        </Container>
    );
}
export default Catalog;
