import React from 'react';
import TopBar from './TopBar';
import ChatBubbles from './ChatBubbles';
import InputBar from './InputBar';

const Chat = (props) => {
    const {
        isConnected,
        onDisconnect,
        chatRows,
        onPublicMessage,
      } = props;

    return (
        
        <div className='chat'>
            <TopBar 
                onDisconnect = {onDisconnect}
                isConnected = {isConnected}/>
            <ChatBubbles chatRows = {chatRows}/>
            <InputBar 
            onPublicMessage = {onPublicMessage}
            isConnected = {isConnected}/>
        </div>
    )
}

export default Chat;