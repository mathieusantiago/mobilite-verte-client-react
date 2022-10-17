import React, { useEffect } from 'react';
import DynamicSheets from '../../components/DynamicSheet/DynamicSheets';
import TagManager from 'react-ga'
const DynamicSheet = (props) => {
    console.log(props)
    useEffect(()=>{
        TagManager.pageview(window.location.pathname + window.location.search);
    })
    return (
        <div>
            <DynamicSheets _id={props._id} datas={props.datas}/>
        </div>
    );
};

export default DynamicSheet;