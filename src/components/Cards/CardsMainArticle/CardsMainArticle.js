/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import _strNoAccent from "../../../utils/strNoAccent";
import "./CardsMainArticle.css";
import { useNavigate } from "react-router-dom";

const CardsMainArticle = (props) => {
  const navigate = useNavigate();
  const date = new Date(props.dataArticle.updatedAt);
  return (
    <>
      {props.dataArticle.status === "Publish" ? (
        <>
          <Card className="mainCards" onClick={()=>{
                            navigate(`/article/${props.dataArticle._id}`)
                        }}>
            <Card.Img
              className="imgMainPreview"
              variant="top"
              src={
                props.dataArticle.mainPicture
                  ? props.dataArticle.mainPicture
                  : ""
              }
            />
            <Card.Body>
              <Card.Text>
                
                  <Link to={_strNoAccent(props.dataArticle.categories).split(' ').join('_').toLowerCase()}>
                    {props.dataArticle.categories}
                  </Link>

              </Card.Text>
              <Card.Text>{props.dataArticle.article_title}</Card.Text>
              <Card.Text>{props.dataArticle.contentSeo}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Publillé le :
                {date.toLocaleDateString("fr-FR").substring(0, 10)}
              </small>
            </Card.Footer>
          </Card>
        </>
      ) : 
        ""
      }
      <br/>
      <br/>
    </>
  );
};

export default CardsMainArticle;
