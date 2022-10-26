import React from 'react';
import Helmet from 'react-helmet';

const DynamicHelmet = (props) => {
    return (
        <div>
            <Helmet>
                <title>{props.title}</title>
                <meta name="description" content={props?.description} />
                <meta name="robots"></meta>

                <meta property="og:url" content={`${process.env.REACT_APP_CLIENT_URL}${props?.url || ""}`} />
                <meta property="og:description" content={props?.ogDescription || ""} />
                <meta property="og:title" content={props?.ogTitle || ""} />
                <meta property="og:type" content={props?.ogType || ""} />
                <meta property="og:image" content={props?.ogImage || ""} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mobilité verte" />
                <meta name="twitter:title" content={props?.ogTitle || ""} />
                <meta name="twitter:description" content={props?.ogDescription || ""}/>
                <meta name="twitter:image" content={props?.ogImage || ""} />
            </Helmet>    
        </div>
    );
};

export default DynamicHelmet;