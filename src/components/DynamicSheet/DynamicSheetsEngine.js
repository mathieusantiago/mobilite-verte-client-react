import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dompurify from '../../utils/dompurify'
import electric from '../../assets/electric.png'
import hybride from '../../assets/hybride.png'
import hydrogene from '../../assets/hydrogene.jpg'
import { useNavigate } from "react-router-dom";
import _gTagsEvent from "../../utils/gTagsEvent";
const DynamicSheets = (props) => {
    const navigate = useNavigate();
    return (
        <Container className='bg-light'>
            <span className='d-flex justify-centent-center'>
                <span >
                    {props.datas.filed_name === 'Motorisation Électrique'?( <img src={electric} width='120px' alt="default logo"/>):''}
                    {props.datas.filed_name === 'Motorisation hybride'?( <img src={hybride} width='100px' alt="default logo"/>):''}
                    {props.datas.filed_name === 'Motorisation hydrogène'?( <img src={hydrogene} width='140px' alt="default logo"/>):''}
                </span>
            </span>
                    <p className="ms-2 h2">{props.datas.filed_name}</p>
            <div  dangerouslySetInnerHTML={{
                __html: dompurify(props.datas.content_field),
            }}>
            </div>
            <br/>
            <br/>
            <h4 className="text-center">Models de véhicules</h4>
            <br/>
            <br/>
            <Row>
                {props.datas.model.map((res)=>{
                    return (
                        <Col className='d-flex justify-content-center'>
                            <div className='cardBrand border border-dark rounded bg-light mb-4' onClick={()=>{
                                    _gTagsEvent('Models', `User open models ${res._id}`, 'User open models')
                                    navigate(`/sheet/model/${res._id}`)
                                }}>
                                <div className="border-bottom border-dark">
                                    <p className='text-center h6 mt-1'>{res.model}</p>
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
    )
};

export default DynamicSheets;
