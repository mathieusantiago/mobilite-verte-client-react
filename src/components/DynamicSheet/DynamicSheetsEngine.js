import React, {useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import _get from "../../utils/dataUtils";
import dompurify from '../../utils/dompurify'

import electric from '../../assets/electric.png'
import hybride from '../../assets/hybride.png'
import hydrogene from '../../assets/hydrogene.jpg'

const DynamicSheets = (props) => {
    const [modelsCars, setModelsCars] = useState([])

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
            
        </Container>
    )
};

export default DynamicSheets;
