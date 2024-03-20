import React from 'react';
import '../component_css/MainPage.scss';
import Sidebar from './sidebar_components/Sidebar';
import Chat from './chat_components/Chat';

const MainPage = (props) => {
    const {
        isConnected,
        users,
        chatRows,
        onPublicMessage,
        onDisconnect,
      } = props;

    return (
        <div className='main'>
            <div className="container">
                <Sidebar 
                    isConnected={isConnected} 
                    users={users}
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