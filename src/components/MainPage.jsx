import React from 'react';
import '../component_css/MainPage.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

const MainPage = () => {
    return (
        <div className='main'>
            <div className="container">
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    )
}

export default MainPage; 