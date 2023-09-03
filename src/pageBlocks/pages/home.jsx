import { Container, Row, Col } from "react-bootstrap";
import { useOutletContext } from 'react-router-dom'
import './home.css';

function Home() {
    let [getSuppliers, getCustomers] = useOutletContext()
    return (<>
        <Container fluid style={{ height: "inherit" }}>
            <Row className="justify-content-center" style={{ backgroundColor: "#D7E1E1", height: "50%", minHeight: "calc(380px / 2)" }}>
                <p className="h1 text-center pt-5">Our Principals</p>
                <Col sm={12} md={8} style={{ overflow: "hidden" }}>
                    <BrandShowcase brandType='suppliers' brandList={getSuppliers} brandCount={getSuppliers.length} />
                </Col>
            </Row>
            <Row className="justify-content-center" style={{ backgroundColor: "#E4DCC6", height: "50%", minHeight: "calc(380px / 2)" }}>
                <p className="h1 text-center pt-5">Our Clients</p>
                <Col sm={12} md={8} style={{ overflow: "hidden" }}>
                    <BrandShowcase brandType='customers' brandList={getCustomers} brandCount={5} />
                </Col>
            </Row>
        </Container>
    </>);
}

export default Home;

function BrandLogo({ logo, link, brand }) {
    return (
        <a key={'home' + brand} href={link} target="blank" style={{ marginRight: "3em" }}>
            <img src={logo} loading="lazy" alt={brand} style={{ height: "6em" }} />
        </a>
    );
}

function BrandShowcase({ brandList, brandType, brandCount }) {
    return (
        <Container style={{
            "--brandCount": brandCount,
            whiteSpace: "nowrap",
            animation: brandType + "-animation " + (brandCount * 3) + "s linear 1s infinite"
        }}>
            {brandList.map(
                ({ image, link, title }, idx) => <BrandLogo key={'home1' + brandType + title} logo={image} link={link} brand={title} />
            )}
            {brandList.map(
                ({ image, link, title }, idx) => <BrandLogo key={'home2' + brandType + title} logo={image} link={link} brand={title} />
            )}
        </Container>
    )
}