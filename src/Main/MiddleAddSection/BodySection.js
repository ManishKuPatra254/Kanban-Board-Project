import React from 'react';
import style from './BodySection.module.css';
import { ListComp } from './ListComp';


export function BodySection () {
    return(
        <div className={style.Main_container}>
            <ListComp/>
           

        </div>
    )
}