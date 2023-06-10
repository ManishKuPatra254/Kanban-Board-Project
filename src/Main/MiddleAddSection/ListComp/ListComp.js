import React from 'react';
import style from './ListComp.module.css';
import {AddNewComp} from '../AddNewList/AddNewComp';
import { useSelector } from 'react-redux';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { CardComp } from '../CardComp/CardComp';

export function ListComp () {

    const listItem = useSelector((store)=>store.listSlice.list);

    return(
        <>
        { listItem.map((list)=><div key={list.id} className={style.list_container}>
        <span className={style.list_value}>{list.title}</span>
        <span className={style.list_more}><BiDotsHorizontalRounded/></span>

        {list?.children?.length > 0 && list.children.map((children)=> <CardComp key={children.id} cardInfo={children}/>)}

        <div className={style.list_cardss}>
        <AddNewComp type="card" parentId={list.id}/>
        </div>
        
        </div>)}
       

        <div className={style.list_container}>
            <AddNewComp/>
        </div>
        </>
    )
}