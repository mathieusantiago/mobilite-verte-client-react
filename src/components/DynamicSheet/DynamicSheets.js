import React from "react";
import { Container } from "react-bootstrap";
import dompurify from '../../utils/dompurify'

const DynamicSheets = (props) => {
    return (
        <Container className='bg-light'>
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
        </Container>
    );
};

export default DynamicSheets;
