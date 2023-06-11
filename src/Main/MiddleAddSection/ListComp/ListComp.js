import React, { Fragment, useState } from 'react';
import style from './ListComp.module.css';
import { AddNewComp } from '../AddNewList/AddNewComp';
import { useSelector } from 'react-redux';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { CardComp } from '../CardComp/CardComp';
import { updateList } from '../../../Store/ListSlice';
import { useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { updateListOrder } from '../../../Store/ListSlice';


export function ListComp() {


    const onDragEnd = (result) => {

        const { source, destination } = result;

        if (!destination)
            return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        dispatch(
            updateListOrder({
                sourceListId: parseFloat(source.droppableId),
                destinationListId: parseFloat(destination.droppableId),
                sourceIndex: source.index,
                destinationIndex: destination.index,
            })
        );
    };


    const dispatch = useDispatch();

    const [inputList, setInputList] = useState('');
    const [inputShow, setInputShow] = useState(false);

    function handleAddClick() {
        setInputShow(!inputShow);
    }

    function handleUpdateData(oldData) {
        setInputShow(false);
        dispatch(updateList({ oldData, inputList }));
        console.log('hello');
    }

    const listItem = useSelector((store) => store.listSlice.list);

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Fragment>
                {listItem.map((list) => (
                    <Droppable key={list.id} droppableId={String(list.id)}>
                        {(provided) => (
                            <div
                                key={list.id}
                                className={style.list_container}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {!inputShow ? (
                                    <span className={style.list_value} onClick={handleAddClick}>
                                        {list.title}
                                    </span>
                                ) : (
                                    <Fragment>
                                        <div className={style.render_update_container}>
                                            <input
                                                type="text"
                                                value={inputList}
                                                className={style.input_update_data}
                                                placeholder="Enter the list name"
                                                onChange={(event) => setInputList(event.target.value)}
                                            />
                                            <button
                                                onClick={() => handleUpdateData(list.id)}
                                                className={style.button_update}
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </Fragment>
                                )}
                                <span className={style.list_more}>
                                    <BiDotsHorizontalRounded />
                                </span>
                                {list?.children?.length > 0 &&
                                    list.children.map((children, index) => (
                                        <Draggable
                                            key={children.id || index}
                                            index={index}
                                            draggableId={String(children.id)}
                                        >
                                            {(provided) => (
                                                <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <CardComp
                                                        key={String(children.id)}
                                                        cardInfo={children}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                {provided.placeholder}
                                <div className={style.list_cardss}>
                                    <AddNewComp type="card" parentId={list.id} />
                                </div>
                            </div>
                        )}
                    </Droppable>
                ))}
                <div className={style.list_container}>
                    <AddNewComp />
                </div>
            </Fragment>
        </DragDropContext>
    );
}
