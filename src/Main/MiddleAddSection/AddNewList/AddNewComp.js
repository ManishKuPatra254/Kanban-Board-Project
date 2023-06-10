import React, { useState } from 'react';
import style from './AddNewComp.module.css';
import { addList, addCard } from '../../../Store/ListSlice';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

export function AddNewComp({ type, parentId }) {

    const [inputVal, setInputVal] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(false);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (type) {
            dispatch(addCard({ id: Math.random(), title: inputVal, parentId: parentId }))
        } else {
            dispatch(addList({ id: Math.random(), title: inputVal }))
        }
        // console.log("inputVal",inputVal)
        hideForm();
        setInputVal("");
    }

    const updateInputVal = (e) => {
        setInputVal(e.target.value);
    }

    const openForm = () => {
        setIsFormVisible(true);

    }

    const hideForm = () => {
        setIsFormVisible(false);

    }

    // .........................


    return (
        <div className={style.addNew_container}>
            <button className={style.addNew_button}
                onClick={openForm}

            >
                <AddIcon /> Add {type ? "a card" : "a list"}
            </button>

            {isFormVisible && <form className={style.addNew_form} onSubmit={submitHandler}>
                <input className={style.addNew_input} value={inputVal}
                    onChange={updateInputVal}
                    placeholder={type ? "Enter card name" : "Enter list name"} />
                <div className={style.addNew_bc}>
                    <button className={style.addNew_button2} onClick={submitHandler}>Add card</button>
                    <p className={style.add_close_button}><CloseIcon onClick={hideForm} /></p>
                </div>
            </form>}

        </div>
    )
}