import React from 'react';
import style from './BodySection.module.css';

export function CardComp ({cardInfo}){
    return(
        <div className={style.card_container}>
            {cardInfo.title}

        </div>
    )
}