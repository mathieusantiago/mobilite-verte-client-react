import React, { useEffect, useState } from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import _get from "../../utils/dataUtils";
import dompurify from "../../utils/dompurify";
import { useNavigate } from "react-router-dom";

import './DynamicArticle.css'
import _gTagsEvent from "../../utils/gTagsEvent";
import DynamicHelmet from "../DynamicHelmet/DynamicHelmet";
const DynamicArticle = (props) => {
    const navigate = useNavigate();
    const [author, setAuthor] = useState('')
    const [tags, setTags] = useState([])
    useEffect(()=>{
        _get('get', 'api/user', '', props.article.editing_id, '')
        .then((e)=>{
            setAuthor(e.data.pseudo)
        })
        _get('get', 'api/tags', '', '', '')
        .then((e)=>{
            setTags(e.data)
        })
    },[props.article.editing_id])
    
    const date = new Date(props.article.updatedAt);
    
    const UncontrolledExample = () => {
        return (
        <Carousel>
            <Carousel.Item>
            <img
                className="imgMainArticle"
                src={props.article.mainPicture}
                alt="First slide"
                key={props.article.mainPicture}
            />
            </Carousel.Item>
            {props.article.galleryPicture.map((picture) => {
            return (
                <Carousel.Item key={picture.urlPicture}>
                <img
                    className="imgMainArticle"
                    src={picture.urlPicture}
                    alt="First slide"
                />
                </Carousel.Item>
            );
            })}
        </Carousel>
        );
    };

    return (
        <>
            <DynamicHelmet  title={props.article.categories}
                description={props.article.contentSeo}   
                url={window.location.pathname + window.location.search}
                ogDescription={props.article.contentSeo}
                ogTitle={props.article.tilteSeo}
                ogType="Article"
                ogImage={props.article.secondaryPicture}>
            </DynamicHelmet>

            <Container className="bg-light compet">
                <Row>
                    <Col>
                        <div className="mt-2  rounded p-3 previewArticle">
                            <div>
                            {props.article.tags.map((e)=>{
                                let temp
                                tags.filter((res)=>{
                                    if(res.tags_name === e){
                                        return temp = res.link_field[0]
                                    }else{
                                        return null
                                    }
                                })
                                return  <Button variant="link" onClick={()=>{
                                    _gTagsEvent('Tags', `User click on tags ${temp}`, 'User click tags')
                                    navigate(`/${temp}`)
                                }}>{e}</Button> 
                            })}
                            </div>
                            <br />
                            <h1
                                className="pb-3 text-center"
                                dangerouslySetInnerHTML={{
                                __html: dompurify(props.article.article_title),
                                }}
                            ></h1>
                            <div
                                className="pb-3"
                                dangerouslySetInnerHTML={{
                                __html: dompurify(props.article.chapo),
                                }}
                            ></div>
                            {props.article &&
                            props.article.galleryPicture &&
                            props.article.galleryPicture.length !== 0 ? (
                                <UncontrolledExample />
                            ) : (
                                <img
                                src={
                                    props.article.mainPicture ? props.article.mainPicture : ""
                                }
                                alt=""
                                className="imgMainArticle mb-3"
                                />
                            )}
                            <div
                                className="pb-5"
                                dangerouslySetInnerHTML={{
                                __html: dompurify(props.article.content_article),
                                }}
                            ></div>
                            <div
                                className="pb-5"
                                dangerouslySetInnerHTML={{
                                __html: dompurify(props.article.content_subarticle),
                                }}
                            ></div>
                        </div>
                        <div className="previewArticle p-3">
                            <div>
                                <small className="text-muted">
                                Auteur: {author}
                                </small>
                            </div>
                            <div>
                                <small className="text-muted ">
                                Publié le :{" "}
                                {date.toLocaleDateString("fr-FR").substring(0, 10)}
                                </small>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DynamicArticle;
