import React, {useEffect} from "react";
import { Container, Row } from "react-bootstrap";
import DynamicCards from "../../components/DynamicCards/DynamicCards";
import TagManager from 'react-ga'

const DynamicView = (props) => {
    useEffect(()=>{
        TagManager.pageview(window.location.pathname + window.location.search);
    })
    if(props.Components === props.route){
        return (
            <div className='mb-5'>
                <Container >
                <h1 className='text-center'>{props.Title}</h1>
                    <Row>
                        <DynamicCards  articleList={props.articleList} title={props.Title} Components={props.Components}/>
                    </Row>
                </Container>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
};

export default DynamicView;
