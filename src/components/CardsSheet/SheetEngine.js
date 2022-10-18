import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import _get from '../../utils/dataUtils';
import './index.css'
import { useNavigate } from "react-router-dom";
import electric from '../../assets/electric.png'
import hybride from '../../assets/hybride.png'
import hydrogene from '../../assets/hydrogene.jpg'

const SheetEngine = () => {
    const navigate = useNavigate();
    const [engergy, setEngergy] = useState([])


    useEffect(()=>{     
        _get('get', 'api/fieldEnergy', '', '', '')
        .then((res)=>{
            console.log(res.data)
            setEngergy(res.data)
        })
    },[])



    return (
        <Container className='bg-light p-5 complet'>
            <Row>
                {engergy.map((res)=>{
                    return(
                        <Col className='d-flex justify-content-center'>
                            <div className='cardBrand border border-dark rounded bg-light mb-4' onClick={()=>navigate(`/sheet/engine/${res._id}`)}>
                                <div className="border-bottom border-dark">
                                    <p className='text-center h6 mt-1'>{res.chapo_field}</p>
                                </div>
                                <div className='text-center mt-3 mb-3'>
                                    {res.filed_name === 'Motorisation Électrique'?( <img src={electric} width='120px' alt="default logo"/>):''}
                                    {res.filed_name === 'Motorisation hybride'?( <img src={hybride} width='100px' alt="default logo"/>):''}
                                    {res.filed_name === 'Motorisation hydrogène'?( <img src={hydrogene} width='140px' alt="default logo"/>):''}
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
};

export default SheetEngine;