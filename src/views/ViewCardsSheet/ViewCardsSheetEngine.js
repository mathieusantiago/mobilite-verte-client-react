import React, { useEffect } from 'react';
import SheetEngine from '../../components/CardsSheet/SheetEngine';
import TagManager from 'react-ga'

const ViewCardsSheetEngine = () => {
    useEffect(()=>{
        TagManager.pageview(window.location.pathname + window.location.search);
    })
    return (
        <div>
            <SheetEngine/>
        </div>
    );
};

export default ViewCardsSheetEngine;