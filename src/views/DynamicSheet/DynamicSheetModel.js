import React, { useEffect } from 'react';
import DynamicSheetsModel from '../../components/DynamicSheet/DynamicSheetsModel';
import TagManager from 'react-ga'

const DynamicSheetBrand = (props) => {

    useEffect(()=>{
        TagManager.pageview(window.location.pathname + window.location.search);
    })


    return (
        <div>
            <DynamicSheetsModel _id={props._id} datas={props.datas}/>
        </div>
    );
};

export default DynamicSheetBrand;