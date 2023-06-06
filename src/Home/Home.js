import { Fragment } from 'react'
import Styles from './Home.module.css'
import BackgroundImage from '../All Images/Images/BackgroundHome.jpg'
import { UpperNavBar } from '../Main/UpperNavBar/UpperNavBar'
import { Addsection } from '../Main/MiddleAddSection/MiddleAddSection'
// import { MainAddList } from '../Main/MiddleAddSection/MainAddList'


export function Home() {

    return (
        <Fragment>
            <div className={Styles.main_container_home}
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    width: '100%',
                    height: '100vh',
                    backgroundSize: 'cover',
                    objectFit: 'cover'
                }}
            >
                <UpperNavBar />
                {/* <MainAddList/> */}
                <Addsection/>
                

            </div>
        </Fragment>
    )
}