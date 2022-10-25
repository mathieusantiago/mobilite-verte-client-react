import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='footer mt-5 bg-light'>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Button variant="link" onClick={()=>navigate("/donnees-personnelles")}>Donnees personnelles</Button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Button variant="link" onClick={()=>navigate("/mentions-legales")}>Mentions legales</Button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            coucou
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;