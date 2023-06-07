import { Fragment } from 'react';
import styles from './DescriptionPg.module.css';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';
import ListIcon from '@mui/icons-material/List';
import toast, { Toaster } from 'react-hot-toast';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import image1 from '../All Images/Images/836-removebg-preview (1).png'
import { useState } from 'react';

export function DescriptionPg() {

    const [close, setClose] = useState(true)

    function handleClickCloseBar() {
        setClose(!close)
    }

    // ..........................................


    const [storeData, setStoreData] = useState('')


    function handleChangeData(event) {
        setStoreData(event.target.value)
    }

    function handleStoreData() {
        const dataStoreLocal = JSON.parse(localStorage.getItem('name of the file')) || []
        if (storeData === '') {
            toast.error("Empty 🙂", {
                style: {
                    backgroundColor: 'black',
                    color: 'white',
                }
            })
        }
        else {
            dataStoreLocal.push(storeData)
            localStorage.setItem('name of the file', JSON.stringify(dataStoreLocal))
            toast.success('Sucessfully saved ✌️', {
                style: {
                    backgroundColor: 'rgb(255, 255, 204)',
                    color: 'black',
                }
            });
        }
        setStoreData('');
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
                                <input type="text" placeholder='Enter the name'
                                    value={storeData} onChange={handleChangeData} />
                            </div>

                            <div className={styles.btn1_save}>
                                <button onClick={handleStoreData}
                                >Save</button>
                                <Toaster />
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
