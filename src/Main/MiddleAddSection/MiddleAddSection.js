import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, addList } from '../../Store/Slice';
import { CgClose } from 'react-icons/cg';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { GrFormAdd } from 'react-icons/gr';
import styles from './MiddleAddSection.module.css';
import { useNavigate } from 'react-router-dom';

export function TodoList () {
    const [isClick, setIsClick] = useState(false);
    const [showAddCard, setShowAddCard] = useState(false);
    const [task, setTask] = useState('');
    const [list, setList] = useState('');
    const dispatch = useDispatch();
    const { Todo } = useSelector((state) => state.todo);
    const navigate = useNavigate()


    const handleAdd = () => {
        dispatch(addTask({ myTask: task }));
        setTask('');
    }

    const handleAddCard = (taskId) => {
        dispatch(addList({ taskId, list }));
        setList('');
    }

    const handleEnterClick = (e, taskId) => {
        if (e.keyCode === 13) {
            handleAddCard(taskId);
        }
    }

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            dispatch(addTask({ myTask: task }));
            setTask('');
        }
    }

    const deleteData = (id) => {
        dispatch(deleteTask({ id }));
    }

    const deleteList = () => {
        dispatch()
    }

    function handleDynamicRouting({key}){
        navigate(`description/${key}`)
       
    }

    return (
        <div className={styles.wrapper}>
            {Todo.map((title) => (
                <div className={styles.mapContainer}>
                    <div className={styles.title}>
                        <span>{title.AddData}</span>
                        <span className={styles.more} onClick={() => deleteData(title.id)}>
                            <AiFillDelete />
                        </span>
                        <span className={styles.more}>
                            <BiDotsHorizontalRounded />
                        </span>
                    </div>
                    {title.TodoList.map((item) => (
                        <li className={styles.card} key={item.id}>
                            <div className={styles.cardss}>
                                
                               <p onClick={()=>handleDynamicRouting({key :item.id})}>{item.myList}</p> 
                                <AiFillDelete className={styles.deleteListItem} onClick={()=>deleteList(item.id)} />
                            </div>

                        </li>

                    ))}
                    {!showAddCard ? (
                        <button
                            className={styles.cardButton}
                            onClick={() => setShowAddCard(!showAddCard)}
                        >
                            <GrFormAdd className={styles.addIcon} />
                            Add a card
                        </button>
                    ) : (
                        <div className={styles.cardContainer}>
                            <input
                                className={styles.inputCard}
                                placeholder="Enter a title for this card..."
                                value={list}
                                onChange={(e) => setList(e.target.value)}
                                onKeyDown={(e) => handleEnterClick(e, title.id)}
                                autoFocus
                            />
                            <div className={styles.buttonContainer}>
                                <button className={styles.button} onClick={() => handleAddCard(title.id)}>Add card</button>
                                <CgClose
                                    className={styles.close}
                                    onClick={() => {
                                        setShowAddCard(!showAddCard);
                                        setList('');
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            ))}
            {!isClick ? (
                <button
                    className={styles.listButton}
                    onClick={() => {
                        setIsClick(!isClick);
                    }}
                >
                    + Add another list
                </button>
            ) : (
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter list title..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        onKeyDown={handleEnter}
                        autoFocus
                    />
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={handleAdd}>
                            Add list
                        </button>
                        <CgClose
                            className={styles.close}
                            onClick={() => {
                                setIsClick(!isClick);
                                setTask('');
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
