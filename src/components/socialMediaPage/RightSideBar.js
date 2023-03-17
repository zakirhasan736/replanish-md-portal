import React from 'react';
import { Grid } from 'antd';
import Services from './landingpage/Services';
import Sponsored from './landingpage/Sponsored';
import RightSideBarHeader from './RightSideBarHeader';
const { useBreakpoint } = Grid;

const RightSideBar = () => {
    const screens = useBreakpoint();
    return (
        <>
            <div className='right-sidebar-wrapper'>
                <div className="sidebar-top-header" style={{ marginTop: screens.lg ? 20 : 10 }}>
                    <RightSideBarHeader />
                </div>
                <div className='Professional-services-wrap'>
                    <Services />
                </div>
                <div className='sponsored-wrapper-box'>
                <Sponsored />
                </div>
            </div>
        </>
    );
}

export default RightSideBar;