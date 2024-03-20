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
                    users={users}/>
                <Chat 
                    isConnected={isConnected}
                    onDisconnect = {onDisconnect}
                    chatRows={chatRows}
                    onPublicMessage={onPublicMessage} 
                />
            </div>
        </div>
    )
}

export default MainPage; 