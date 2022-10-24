import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import CardsMainArticle from '../../components/Cards/CardsMainArticle/CardsMainArticle';
import './Home.css'
import TagManager from 'react-ga'
const Home = (props) => {
    useEffect(()=>{
        TagManager.pageview(window.location.pathname + window.location.search);
    })
    return (
        <div className='mb-5'>
            <Container className='bg-light complet pt-5'>
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