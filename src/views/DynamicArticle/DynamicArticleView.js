import React, { useEffect } from 'react';
import TagManager from 'react-ga'
import DynamicArticle from '../../components/DynamicArticle/DynamicArticle';

const DynamicArticleView = (props) => {

    useEffect(()=>{
        TagManager.pageview(window.location.pathname + window.location.search);
    })

    return (
        <div>
            <DynamicArticle  _id={props._id} article={props.article}/>
        </div>
    );
};

export default DynamicArticleView;