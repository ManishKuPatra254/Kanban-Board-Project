import { Fragment } from 'react';
import styles from './DescriptionPg.module.css';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';
import ListIcon from '@mui/icons-material/List';
// import toast, { Toaster } from 'react-hot-toast';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import image1 from '../All Images/Images/836-removebg-preview (1).png'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { updateCard } from '../Store/ListSlice';
import { useDispatch } from 'react-redux';

export function DescriptionPg() {

    const navigateToHome = useNavigate()

    const { id } = useParams()
    const listItem = useSelector((store) => store.listSlice.list);
    // let tasks;
    // for(let i=0;i<listItem.length;i++){
    //  tasks = listItem[i].map((item) => item.children);

    // }
    const tasks = listItem.map((item) => item.children);
    console.log(tasks);
    let taskUpdate;
    for (let i = 0; i < listItem.length; i++) {
        let temptask;
        temptask = tasks[i].find((task) => {
            // console.log(task.id,id);
            return task.id === Number(id)
        });
        if (temptask !== undefined) {
            taskUpdate = temptask;
            break;
        }
    }

    console.log(taskUpdate)

    const [displayName, setDisplayName] = useState(taskUpdate.title !== undefined ? taskUpdate.title : "");

    const dispatch = useDispatch()

    function updateDataList() {
        const newUpdatedData = { id: id, title: displayName, parentId: taskUpdate.parentId }
        dispatch(updateCard(newUpdatedData))
        navigateToHome('/')
    }

    // ...............................................


    const [close, setClose] = useState(true)

    function handleClickCloseBar() {
        setClose(!close)
    }

    return (
        <Fragment>
            {
                close && (
                    <Fragment>
                        <div className={styles.main_description_container}>

                            <p style={{ padding: '10px 0px' }} onClick={handleClickCloseBar}><CloseRoundedIcon
                                sx={{ cursor: 'pointer' }} /></p>

                            <div className={styles.input_section_top}>
                                <p><TableRowsOutlinedIcon /></p>

                                {/* .............................. */}

                                <input type="text" placeholder='Enter the name'
                                    value={displayName}
                                    onChange={(event) => setDisplayName(event.target.value)}
                                />
                            </div>

                            <div className={styles.btn1_save}>
                                <button
                                    onClick={updateDataList}
                                >Save</button>
                                {/* <Toaster /> */}
                            </div>

                            <div className={styles.description_section}>
                                <p><SegmentRoundedIcon /></p>
                                <p>Description</p>
                            </div>

                            <div className={styles.input_field}>
                                <input type="text" placeholder='Add a more detailed description' />
                            </div>

                            <div className={styles.activity_section}>
                                <p><ListIcon />Activity</p>
                                <span>Show details</span>
                            </div>

                            <div className={styles.input_second_bar}>
                                <Stack>
                                    <Avatar alt='G15' src={image1} />
                                </Stack>
                                <input type="text" placeholder='Write a comment' />
                            </div>
                            <div className={styles.last_section}>
                                <p>Members</p>
                                <p>Labels</p>
                                <p>Checklist</p>
                                <p>Dates</p>
                                <p>Attachment</p>
                            </div>
                        </div>
                    </Fragment>
                )
            }
        </Fragment>
    )
}
