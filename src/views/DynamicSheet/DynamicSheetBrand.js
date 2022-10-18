import React, { useEffect } from 'react';
import DynamicSheetsBrands from '../../components/DynamicSheet/DynamicSheetsBrands';
import TagManager from 'react-ga'

const DynamicSheetBrand = (props) => {

    useEffect(()=>{
        TagManager.pageview(window.location.pathname + window.location.search);
    })


    return (
        <div>
            <DynamicSheetsBrands _id={props._id} datas={props.datas}/>
        </div>
    );
};

export default DynamicSheetBrand;