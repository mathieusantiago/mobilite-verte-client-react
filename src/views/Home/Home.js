import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardsMainArticle from '../../components/Cards/CardsMainArticle/CardsMainArticle';
import './Home.css'
const Home = (props) => {

    return (
        <div className='mb-5'>
            <Container>
                <Row>
                {props.articleList.map((article)=>{
                    return( 
                        <Col className='mainCards' key={article._id}>
                            <CardsMainArticle dataArticle={article} />
                        </Col>
                    )
                })}
                </Row>
            </Container>
        </div>
    );
};

export default Home;