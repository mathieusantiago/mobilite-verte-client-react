import React, { useEffect } from 'react';
import SheetModel from '../../components/CardsSheet/SheetModel';
import TagManager from 'react-ga'

const ViewCardsSheetModel = () => {
    useEffect(()=>{
        TagManager.pageview(window.location.pathname + window.location.search);
    })
    return (
        <div>
            <SheetModel/>
        </div>
    );
};

export default ViewCardsSheetModel;