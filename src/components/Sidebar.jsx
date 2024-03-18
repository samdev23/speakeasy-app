import React from 'react'
import User from './User';
import Logo from './Logo';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Logo/>
            <User/>
            <User/>
            <User/>
        </div>
    )
}

export default Sidebar;