import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import dompurify from '../../utils/dompurify'
import './DynamicSheets.css'
const DynamicSheets = (props) => {

    return (
        <Container className='bg-light complet'>
            <Row>
                <Col lg="3">
                    <p className="ms-2 h2">{props.datas.filed_name}</p>
                    <img className='mb-5' src={props.datas.imgCar} alt="logo marques" width='250px'/>
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                    <div className='align-items-center'  dangerouslySetInnerHTML={{
                        __html: dompurify(props.datas.content_field),
                    }}>
                    </div>
                </Col>
            </Row>
            <span className='d-flex justify-centent-center'>
                <span >

                </span>
            </span>
            
        </Container>
    );
};

export default DynamicSheets;
