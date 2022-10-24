import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import _get from '../../utils/dataUtils';
import './index.css'
import { useNavigate } from "react-router-dom";
import _gTagsEvent from '../../utils/gTagsEvent';
const SheetModel = () => {
    const navigate = useNavigate();
    const [brand, setBrand] = useState([])


    useEffect(()=>{     
        _get('get', 'api/fieldModel', '', '', '')
        .then((res)=>{
            setBrand(res.data)
        })
    },[])


    return (
        <Container className='bg-light p-5 complet '>
            <Row>
                {brand.map((res)=>{
                    return(
                        <Col className='d-flex justify-content-center'>
                            <div className='cardBrand border border-dark rounded bg-light mb-4' onClick={()=>{
                                _gTagsEvent('Models', `User open models ${res._id}`, 'User open models')
                                navigate(`/sheet/model/${res._id}`)
                                }}>
                                <div className="border-bottom border-dark">
                                    <p className='text-center h6 mt-1'>{res.filed_name}</p>
                                </div>
                                <div className='text-center mt-3 mb-3'>
                                    <img src={res.imgCar || 'https://img.icons8.com/ios-filled/50/000000/no-image-gallery.png'} width={178} alt="default logo"/>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
};

export default SheetModel;