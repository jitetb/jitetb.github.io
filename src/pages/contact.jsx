import { Container, Row, Col, Stack } from 'react-bootstrap';
import { BsTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { SiWechat, SiWhatsapp, SiViber } from 'react-icons/si';
import { createElement as e } from 'react';
const contacts = [{
    "branch": "Corporate Office",
    "address": [{
        "icon": ImLocation,
        "value": <>House 67/C Road 6/A <br />Cantonment R.A. <br />Dhaka Cantonment Dhaka</>
    }, {
        "icon": BsTelephoneFill,
        "value": "+880 171 681 4208"
    }]
}, {
    "branch": "Mymensingh Office",
    "address": [{
        "icon": ImLocation,
        "value": <>House 196/A <br />R.K. Misson Road <br />Mymensingh</>
    }, {
        "icon": BsTelephoneFill,
        "value": "+880 173 299 8295"
    }]
}, {
    "branch": "Social Network",
    "address": [{
        "icon": MdEmail,
        "value": "jitbdgroup@gmail.com"
    }, {
        "icon": SiWechat,
        "value": "+880 153 517 4014"
    }, {
        "icon": SiWhatsapp,
        "value": "+880 153 517 4014"
    }, {
        "icon": SiViber,
        "value": "+880 153 517 4014"
    }]
}];

const contacts_style = {
    minWidth: "2em",
    minHeight: "2em",
    backgroundRepeat: "no-repeat",
    backgroundSize: "2em 2em"
};

function MediaCard({ icon, value }){
    return (
        <Stack direction="horizontal" gap={3} style={{ paddingTop: "1rem" }}>
            { e(icon, {style: contacts_style}) }
            <p>{value}</p>
        </Stack>
    )
}
const contact_details = contacts.map(
    ({ branch, address }) => {
        // const point_of_contact = details.map();
        return (<Col xs={10} sm={5} lg={3} style={{ paddingTop: "1rem" }}>
            <h2 className="text-center">{ branch }</h2>
            {
                address.map(
                    ({ icon, value }) => <MediaCard icon={icon} value={value} />
                )
            }
        </Col>);
    }
);

function Contact(){
    return (
        <Container style={{ minHeight: "100vh", paddingTop: "1rem" }}>
            <h1 className="text-center">Contact Us</h1>
            <Row className="justify-content-center">
                { contact_details }
            </Row>
        </Container>
    );
}
export default Contact;
