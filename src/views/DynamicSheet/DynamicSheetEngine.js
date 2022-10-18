import React, { useEffect } from 'react';
import DynamicSheetsEngine from '../../components/DynamicSheet/DynamicSheetsEngine';
import TagManager from 'react-ga'

const DynamicSheetEngine = (props) => {

    useEffect(()=>{
        TagManager.pageview(window.location.pathname + window.location.search);
    })


    return (
        <div>
            <DynamicSheetsEngine _id={props._id} datas={props.datas}/>
        </div>
    );
};

export default DynamicSheetEngine;