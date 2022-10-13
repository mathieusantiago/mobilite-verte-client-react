/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import _strNoAccent from "../../utils/strNoAccent";
import { useNavigate } from "react-router-dom";

const DynamicCards = (props) => {
    const navigate = useNavigate();
    
    const articleFilter = props.articleList.filter((e)=>{
        return e.categories === props.title
    })
    return articleFilter.map((article)=>{
        const date = new Date(article.updatedAt);
        return (
            <>
            {article.status === "Publish" ? (
                <>
                    <Col className='mainCards mb-5' >
                        <Card className="mainCards" onClick={()=>{
                            navigate(`/article/${article._id}`)
                        }}>
                            <Card.Img
                            className="imgMainPreview"
                            variant="top"
                            src={
                                article.mainPicture
                                ? article.mainPicture
                                : ""
                            }
                            />
                            <Card.Body>
                            <Card.Text>
                                
                                <Link to={_strNoAccent(article.categories).split(' ').join('_').toLowerCase()}>
                                    {article.categories}
                                </Link>

                            </Card.Text>
                            <Card.Text>{article.article_title}</Card.Text>
                            <Card.Text>{article.contentSeo}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">
                                Publillé le :
                                {date.toLocaleDateString("fr-FR").substring(0, 10)}
                            </small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </>
            ) : 
                ""
            }
            <br/>
            <br/>
            </>
        );
    })
};

export default DynamicCards;
