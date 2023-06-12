import { Container, Row, Col } from 'react-bootstrap';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';
const Footer = () => {
    return (
        <footer className="footer bg-dark text-light">
            <Container>
                <Row>
                    <Col md={6}>
                        <h3>About Us</h3>
                        <p>ZoneSport - Tu tienda en línea de ropa deportiva. Encuentra lo mejor para tu entrenamiento. Vive activo, vive en movimiento con ZoneSport.</p>
                    </Col>
                    <Col md={3}>
                        <h3>Links</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#" className="icon-link"><SiFacebook className="facebook-icon" /></a>
                            <a href="#" className="icon-link"><SiTwitter className="twitter-icon" /></a>
                            <a href="#" className="icon-link"><SiInstagram className="instagram-icon" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-bottom text-center">
                <p>&copy; 2023 Your Website. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
