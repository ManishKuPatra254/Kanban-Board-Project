import { Fragment, useState } from 'react';
import Styles from './UpperNavBar.module.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import SettingsAccessibilityOutlinedIcon from '@mui/icons-material/SettingsAccessibilityOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import image from '../../All Images/Images/836-removebg-preview (1).png'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';



const TransitionSlide = forwardRef(function TransitionSlide(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export function UpperNavBar(props) {

    const [starFilled, setStarFilled] = useState(false)

    function handleClickStar() {
        setStarFilled(!starFilled);
    }

    // .....................................................


    const [anchorEl, setAnchorEl] = useState()

    const openMenu = Boolean(anchorEl)

    function handleClickMenuOpen(event) {
        setAnchorEl(event.currentTarget)
    }


    function handleClickMenuClose() {
        setAnchorEl(null)
    }

    // ..........setting members of the page..........


    const [open, setOpen] = useState(false);

    function handleClickOpenDialog() {
        setOpen(true);
    };

    function handleCloseDialog() {
        setOpen(false);
    };


    // .........................................


    const [todos, setTodos] = useState(["Inzamam Ull Azeez", "Manish Kumar Patra", "Aditya Verma"]);
    const [storeDataMembers, setStoreDataMembers] = useState('');

    function handleStoreDataRender(e) {
        setStoreDataMembers(e.target.value);
    }

    function handleAddData() {
        if (storeDataMembers !== '') {
            setTodos([...todos, storeDataMembers]);
            setStoreDataMembers("");
            // toast.success('Congratulations Welcome New Member 😊')
            toast.success('नया सदस्य बनने पर बधाई 🥳')
        }
        else {
            toast.error('कृपया नाम दर्ज करें 😵')
            // toast.error('Please Enter The Name🤕')

        }
    }


    function handleDeleteData(indexes) {
        const latestData = [...todos];
        latestData.splice(indexes, 1)
        setTodos(latestData)
    }



    return (
        <Fragment>
            <div className={Styles.main_upper_bar_container}>
                <div className={Styles.sub_upper_bar_container}>
                    <input type="text" className={Styles.input_nav} placeholder='ENTER THE NAME' />
                    <p onClick={handleClickStar}>{starFilled ? <StarIcon sx={{ color: 'yellow', cursor: 'pointer' }} /> : <StarBorderIcon sx={{ color: 'white' }} />}</p>
                    <div className={Styles.work_shop_nav}>
                        <p><PeopleAltOutlinedIcon /></p>
                        <span>Workspace visible</span>
                    </div>
                    <div className={Styles.board_nav_part}>
                        <p><ViewStreamOutlinedIcon /></p>
                        <span>Board</span>
                    </div>

                    <Button
                        sx={{ color: 'white' }}
                        onClick={handleClickMenuOpen}
                    >▼</Button>

                    <Menu
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleClickMenuClose}
                    >

                        <MenuItem onClick={handleClickMenuClose}>Board</MenuItem>
                        <MenuItem onClick={handleClickMenuClose} disabled>Time Table</MenuItem>
                        <MenuItem onClick={handleClickMenuClose} disabled>Calender</MenuItem>
                        <MenuItem onClick={handleClickMenuClose} disabled>Timeline</MenuItem>
                        <MenuItem onClick={handleClickMenuClose} disabled>Dashboard</MenuItem>
                        <MenuItem onClick={handleClickMenuClose} disabled>Map</MenuItem>

                    </Menu>
                    <div className={Styles.second_part_nav_bar}>

                        <div className={Styles.power_ups}>
                            <p><SettingsSuggestOutlinedIcon /></p>
                            <p onClick={props.handleChangeBackgroundProp}>{props.name}</p>
                        </div>
                        <div className={Styles.automation_part}>
                            <p onClick={handleClickOpenDialog}><SettingsAccessibilityOutlinedIcon /></p>
                            <p onClick={handleClickOpenDialog}>All Members</p>
                            <Dialog
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-end'

                                }}

                                open={open}
                                TransitionComponent={TransitionSlide}
                                keepMounted
                                onClose={handleCloseDialog}
                                aria-describedby="alert-dialog-slide-description">

                                <DialogTitle sx={{
                                    fontSize: '28px',
                                    fontWeight: 'bold',
                                    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',

                                }}>Add Members</DialogTitle>
                                <DialogContent sx={{
                                    width: '400px',
                                    height: '40vh',
                                    '&::-webkit-scrollbar': { display: 'none' }
                                }}>

                                    <DialogContentText >

                                        <input className={Styles.input_todo_data}
                                            type="text"
                                            onChange={handleStoreDataRender}
                                            value={storeDataMembers}
                                            placeholder='Enter the name' />

                                        <button onClick={handleAddData} className={Styles.add_data_button}> Add Name
                                            <Toaster />
                                        </button>

                                        {todos.map((item, indexes) => (

                                            <span className={Styles.todo_list_map}
                                                key={indexes}>
                                                {item}
                                                <button onClick={() => handleDeleteData(indexes)}>Delete Name</button>
                                            </span>
                                        ))}
                                    </DialogContentText>
                                </DialogContent>
                            </Dialog>
                        </div>


                        <div className={Styles.filter_part}>
                            <p><FilterListOutlinedIcon /></p>
                            <p>Filters</p>
                        </div>

                        <Stack>
                            <Avatar alt='Group 15' src={image} />
                        </Stack>

                        <div className={Styles.share_options}>
                            <p><PersonAddAltOutlinedIcon /></p>
                            <p>Share</p>
                        </div>

                        <div className={Styles.side_options}>
                            <p>...</p>
                        </div>


                    </div>
                </div>
            </div>
        </Fragment >
    )
}