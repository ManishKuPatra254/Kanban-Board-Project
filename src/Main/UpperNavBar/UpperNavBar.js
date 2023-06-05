import { Fragment, useState } from 'react';
import Styles from './UpperNavBar.module.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

export function UpperNavBar() {

    const [starFilled, setStarFilled] = useState(false)

    function handleClickStar() {
        setStarFilled(!starFilled);
    }

    return (
        <Fragment>
            <div className={Styles.main_upper_bar_container}>
                <div className={Styles.sub_upper_bar_container}>
                    <input type="text" className={Styles.input_nav} />
                    <p onClick={handleClickStar}>{starFilled ? <StarIcon sx={{ color: 'yellow', cursor: 'pointer' }} /> : <StarBorderIcon />}</p>
                    <div className={Styles.work_shop_nav}>
                        <p><PeopleAltOutlinedIcon /></p>
                        <span>Workspace visible</span>
                    </div>
                    <div className={Styles.board_nav_part}>
                        <p><ViewStreamOutlinedIcon /></p>
                        <span>Board</span>
                    </div>

                    <div className={Styles.power_ups}>
                        <p><RocketLaunchOutlinedIcon /></p>
                        <span>Power-Ups</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}