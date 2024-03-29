import React, { useEffect } from 'react';
import SheetBrand from '../../components/CardsSheet/SheetBrand';
import TagManager from 'react-ga'

const ViewCardsSheetBrand = () => {
    useEffect(()=>{
        TagManager.pageview(window.location.pathname + window.location.search);
    })
    return (
        <div>
            <SheetBrand/>
        </div>
    );
};

export default ViewCardsSheetBrand;