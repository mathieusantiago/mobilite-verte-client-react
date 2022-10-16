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
                        
                            <CardsMainArticle dataArticle={article} />
                    )
                })}
                </Row>
            </Container>
        </div>
    );
};

export default Home;