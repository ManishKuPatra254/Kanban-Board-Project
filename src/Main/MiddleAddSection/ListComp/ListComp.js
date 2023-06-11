import React, { Fragment, useState } from 'react';
import style from './ListComp.module.css';
import { AddNewComp } from '../AddNewList/AddNewComp';
import { useSelector } from 'react-redux';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { CardComp } from '../CardComp/CardComp';
import { updateList } from '../../../Store/ListSlice';
import { useDispatch } from 'react-redux';

export function ListComp() {

    const dispatch = useDispatch()

    const [inputList, setInputList] = useState('')
    const [inputShow, setInputShow] = useState(false)

    function handleAddClick() {
        setInputShow(!inputShow)
    }

    function handleUpdateData(oldData) {
        setInputShow(false)
        dispatch(updateList({ oldData, inputList }))
        console.log('hello')
        // setInputList(e.target.value)

    }

    const listItem = useSelector((store) => store.listSlice.list);

    return (
        <Fragment>
            {listItem.map((list) =>
                <div key={list.id} className={style.list_container}>
                    {/* <span className={style.list_value}>{list.title}</span> */}

                    {
                        !inputShow ? (
                            <span className={style.list_value} onClick={handleAddClick}>{list.title}</span>
                        )
                            :
                            <Fragment>
                                <div className={style.render_update_container}>
                                    <input type="text" value={inputList} className={style.input_update_data} placeholder='Enter the list name'
                                        onChange={(event) => setInputList(event.target.value)}
                                    />
                                    <button onClick={() => handleUpdateData(list.id)}
                                        className={style.button_update}>Update</button>
                                </div>
                            </Fragment>
                            
                    }
                    <span className={style.list_more}><BiDotsHorizontalRounded /></span>

                    {list?.children?.length > 0 && list.children.map((children) => <CardComp key={children.id} cardInfo={children} />)}

                    <div className={style.list_cardss}>
                        <AddNewComp type="card" parentId={list.id} />
                    </div>

                </div>)}


            <div className={style.list_container}>
                <AddNewComp />
            </div>
        </Fragment>
    )
}