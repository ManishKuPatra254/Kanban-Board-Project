import React, { Fragment } from 'react';
import style from './CardComp.module.css';
import { useNavigate } from 'react-router-dom';


export function CardComp({ cardInfo }) {

    const navigateFromCardPgToDesPg = useNavigate()


    function handleNavigateToCardToDes() {
        navigateFromCardPgToDesPg('/task')
    }

    return (
        <Fragment>
            <div className={style.card_container}
                onClick={handleNavigateToCardToDes}>
                {cardInfo.title}
            </div>
        </Fragment>
    )
}