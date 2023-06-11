import React, { Fragment } from 'react';
import style from './CardComp.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import listSlice from '../../../Store/ListSlice';


export function CardComp({ cardInfo }) {
    const storeDataNavigate = useSelector((store) => store.listSlice.list);
    console.log(storeDataNavigate);

    const navigateFromCardPgToDesPg = useNavigate()


    function handleNavigateToCardToDes(list) {
        navigateFromCardPgToDesPg(`/task/${list.id}`)
    }

    return (
        <Fragment>
            <div className={style.card_container}
                onClick={() => handleNavigateToCardToDes(cardInfo)}>
                {cardInfo.title}
            </div>
        </Fragment>
    )
}