import { Fragment, useState } from 'react';
import Styles from './UpperNavBar.module.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import image from '../../All Images/Images/836-removebg-preview (1).png'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

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
                            <p><BoltOutlinedIcon /></p>
                            <p>Automation</p>
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
        </Fragment>
    )
}