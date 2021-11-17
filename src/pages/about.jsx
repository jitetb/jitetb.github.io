import { Container, Row, Col } from "react-bootstrap";
import black_logo from './logo/black_logo.jpg';
import green_logo from './logo/green_logo.jpg';
import './about.css'

function About(){
    const image_title = "Just In Time Engineering Technology Bangladesh";
    const bg_img = {
        position: "relative",
        width: "100%",
        maxWidth: "calc(100% - 4vw)"
    };
    const img_bk = {
        width: "inherit",
        position: "absolute"
    };
    const img_gr = {
        width: "inherit",
        position: "relative",
        animation: "fadeSwap 15s ease-in-out infinite"
    };
    return (
        <Container style={{marginTop: "4vh"}}>
            <Row className="flex-row-reverse justify-content-center">
                <Col xs={12} sm={4} md={4}>
                    <div style={bg_img}>
                        <img style={img_bk} src={black_logo} alt={image_title} loading="lazy" />
                        <img style={img_gr} src={green_logo} alt={image_title} loading="lazy" className="animeImg" />
                    </div>
                </Col>
                <Col xs={12} sm={8} md={6}>
                    <h1 className="text-center">About Us</h1>
                    <p>The aim of JITETB Limited is to provide the latest useful technology of the world to our customers. We always try to introduce new technology which support the existing technology. We try to work in an environment where both suppliers and clients are in a win win situation. Our marketing aim is towards the customers' satisfaction. At the same time, we intimate to our suppliers about the needs of our clients. Basically we make a bridge between our suppliers and clients.</p>
                </Col>
            </Row>
        </Container>
    );
}
export default About;
