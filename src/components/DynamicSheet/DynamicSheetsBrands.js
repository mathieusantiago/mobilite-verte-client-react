import React, {useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import _get from "../../utils/dataUtils";
import _gTagsEvent from "../../utils/gTagsEvent";
import dompurify from '../../utils/dompurify'
import { useNavigate } from "react-router-dom";
import './DynamicSheets.css'
const DynamicSheets = (props) => {
    const navigate = useNavigate();

    const [modelsCars, setModelsCars] = useState([])

    useEffect(() => {
        getModelsCars()
    },[])
    

    const getModelsCars = () => {
        _get('get', 'api/fieldModel', '', '', '')
        .then((res)=>{
            setModelsCars(res.data)
        })
    }
    return (
        <Container className='bg-light complet'>
            <span>
                <span>
                    <img src={props.datas.brandFlag} alt="logo marques" width='150px'/>
                    <span className="ms-2 h2">{props.datas.filed_name}</span>
                </span>
            </span>
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
    );
};

export default DynamicSheets;
