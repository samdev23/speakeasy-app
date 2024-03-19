import React from 'react';
import '../component_css/MainPage.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

const MainPage = (props) => {
    const {
        isConnected,
        users,
        chatRows,
        onPublicMessage,
        onConnect,
        onDisconnect
      } = props;

    return (
        <div className='main'>
            <div className="container">
                <Sidebar 
                    isConnected={isConnected} 
                    users={users}
                    onConnect = {onConnect}
                    onDisconnect = {onDisconnect}/>
                <Chat 
                    isConnected={isConnected}
                    chatRows={chatRows}
                    onPublicMessage={onPublicMessage} 
                />
            </div>
        </div>
    )
}

export default MainPage; 