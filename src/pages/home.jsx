import { Container, Row, Col } from "react-bootstrap";
import './home.css';

function Home({suppliers, customers}){
    const list_of_suppliers = suppliers.map(
        ({ image, link, title }) => {
            return (
                <a href={link} target="blank" style={{ marginRight: "3em" }}>
                    <img src={image} loading="lazy" alt={title} style={{ width: "16em" }} />
                </a>
            );
        }
    );
    const list_of_customers = customers.map(
        ({ image, link, title }) => {
            return (
                <a href={link} target="blank" style={{ marginRight: "3em" }}>
                    <img src={image} loading="lazy" alt={title} style={{ height: "6em" }} />
                </a>
            );
        }
    );
    const suppliers_animation = {
        marginTop: "3em",
        whiteSpace: "nowrap",
        animation: "suppliers-animation 15s linear 1s infinite"
    };
    const customers_animation = {
        marginTop: "3em",
        whiteSpace: "nowrap",
        animation: "customers-animation 15s linear 1s infinite"
    };
    const animation_style = {
    	overflow: "hidden",
    	minHeight: "40vh",
    	marginBottom: "3rem"
    };
    return (<>
        <Container fluid>
            <Row className="justify-content-center" style={{ backgroundColor: "#D7E1E1" }}>
                <p className="h1 text-center pt-5 pb-3">Our Principals</p>
                <Col sm={12} md={8} style={animation_style}>
                <Container style={suppliers_animation}>
                    { list_of_suppliers } { list_of_suppliers }
                </Container>
                </Col>
            </Row>
            <Row className="justify-content-center" style={{ backgroundColor: "#E4DCC6"}}>
                <p className="h1 text-center pt-5 pb-3">Our Clients</p>
                <Col sm={12} md={8} style={animation_style}>
                <Container style={customers_animation}>
                    { list_of_customers } { list_of_customers }
                </Container>
                </Col>
            </Row>
        </Container>
    </>);
}
export default Home;
